import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import EventRegistration from "@/models/EventRegistration";
import EmailJob from "@/models/Emailjob";
import { getAllEvents } from "@/lib/eventRegistrations";
import { sendEventReminderMail } from "@/lib/mailer";

export const dynamic = "force-dynamic";

const REMINDER_WINDOWS = [
  { key: "3d", label: "Starts in 3 Days", minHours: 48, maxHours: 72 },
  { key: "2d", label: "Starts in 2 Days", minHours: 24, maxHours: 48 },
  { key: "1d", label: "Starts Tomorrow",  minHours: 2,  maxHours: 24 },
  { key: "1h", label: "Starts in 1 Hour", minHours: 0,  maxHours: 1 },
];

function isAuthorized(req: Request): boolean {
  const secret = process.env.CRON_SECRET;
  if (!secret) return true; // Allows local testing

  const header = req.headers.get("authorization");
  if (header === `Bearer ${secret}`) return true;

  const url = new URL(req.url);
  if (url.searchParams.get("secret") === secret) return true;

  return false;
}

export async function POST(req: Request) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  await connectDB();
  const events = getAllEvents();
  const now = Date.now();
  let dispatchedCount = 0;

  for (const event of events) {
    if (!event.startDateTime) continue;

    const eventTime = new Date(event.startDateTime).getTime();
    const diffHours = (eventTime - now) / (1000 * 60 * 60);

    // Skip past events or events more than 72 hours out
    if (diffHours <= 0 || diffHours > 72) continue;

    const targetWindow = REMINDER_WINDOWS.find(
      (w) => diffHours > w.minHours && diffHours <= w.maxHours
    );

    if (!targetWindow) continue;

    // Find registered users who have NOT received this interval yet.
    // Limit to 8 per invocation so the function finishes within the 10s Hobby plan cap.
    // GitHub Actions calls this endpoint every hour, so the backlog drains across runs.
    const attendees = await EventRegistration.find({
      event: event.slug,
      remindersSent: { $ne: targetWindow.key },
    }).limit(8);

    const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

    const CONCURRENCY = 2;
    for (let i = 0; i < attendees.length; i += CONCURRENCY) {
      const chunk = attendees.slice(i, i + CONCURRENCY);

      await Promise.all(
        chunk.map(async (user) => {
          let dispatched = false;
          try {
            await sendEventReminderMail(
              user.email,
              user.name,
              event.title,
              targetWindow.label,
              event.formattedDate || 'Coming Soon',
              event.formattedTime || 'Refer Schedule',
              event.venue || 'SKIT Campus',
            );
            dispatched = true;
          } catch (err) {
            // SMTP failed — push to queue so process-emails cron retries it
            try {
              await EmailJob.create({
                type: 'REMINDER',
                payload: {
                  email: user.email,
                  name: user.name,
                  eventTitle: event.title,
                  timeframeLabel: targetWindow.label,
                  eventDate: event.formattedDate,
                  eventTime: event.formattedTime,
                  venue: event.venue,
                },
              });
              dispatched = true;
            } catch {
              // Queue creation failed — don't mark as sent so next run retries
            }
          }

          // Only mark as sent if email was sent or successfully queued
          if (dispatched) {
            await EventRegistration.updateOne(
              { _id: user._id },
              { $addToSet: { remindersSent: targetWindow.key } },
            );
            dispatchedCount++;
          }
        }),
      );

      // Small 250ms breather between chunks so Gmail SMTP socket doesn't choke
      if (i + CONCURRENCY < attendees.length) {
        await sleep(250);
      }
    }
  }

  return NextResponse.json({
    success: true,
    remindersSent: dispatchedCount,
  });
}