import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import EventRegistration from "@/models/EventRegistration";
import AnnouncementLog from "@/models/AnnouncementLog";
import EmailJob from "@/models/Emailjob";

export const dynamic = "force-dynamic";

function isAuthorized(req: Request): boolean {
  const secret = process.env.CRON_SECRET;
  if (!secret) return false;

  const header = req.headers.get("authorization");
  if (header === `Bearer ${secret}`) return true;

  const url = new URL(req.url);
  if (url.searchParams.get("secret") === secret) return true;

  return false;
}

/**
 * POST /api/z9x4p7/announce-event
 *
 * Body:
 * {
 *   "announcementId": "codeformers2026-launch",
 *   "eventTitle":     "Codeformers 2026",
 *   "eventDate":      "25 Jan 2026",
 *   "eventTime":      "10:00 AM",
 *   "venue":          "Seminar Hall, SKIT",
 *   "registerLink":   "https://snt-club.vercel.app/events/Codeformers2026",
 *   "description":    "Our flagship coding competition is back!"
 * }
 *
 * How it works:
 *  1. Fetches all unique (email, name) pairs from EventRegistration
 *  2. Skips emails already logged for this announcementId (safe to re-trigger)
 *  3. Queues an EmailJob ANNOUNCEMENT for each remaining email
 *  4. Saves to AnnouncementLog to prevent double-queueing
 *  5. Returns immediately — sending is done by the queue processor (t4bj9vc3)
 */
export async function POST(req: Request) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  let body: any;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ message: "Invalid JSON body" }, { status: 400 });
  }

  const { announcementId, eventTitle, eventDate, eventTime, venue, registerLink, description } = body ?? {};

  if (!announcementId || !eventTitle || !eventDate || !eventTime || !venue || !registerLink || !description) {
    return NextResponse.json(
      { message: "Missing required fields: announcementId, eventTitle, eventDate, eventTime, venue, registerLink, description" },
      { status: 400 }
    );
  }

  await connectDB();

  // 1. Distinct email+name pairs across all events (latest name wins)
  const recipients: { email: string; name: string }[] = await EventRegistration.aggregate([
    { $sort: { createdAt: -1 } },
    { $group: { _id: "$email", name: { $first: "$name" } } },
    { $project: { _id: 0, email: "$_id", name: 1 } },
  ]);

  if (recipients.length === 0) {
    return NextResponse.json({ message: "No registered users found", queued: 0 });
  }

  // 2. Skip emails already queued for this announcementId
  const alreadyLogged = await AnnouncementLog.find({ announcementId }, { email: 1, _id: 0 }).lean();
  const alreadyLoggedSet = new Set(alreadyLogged.map((r: any) => r.email));

  const pending = recipients.filter((r) => !alreadyLoggedSet.has(r.email));

  if (pending.length === 0) {
    return NextResponse.json({
      message: "All recipients already queued for this announcement",
      queued: 0,
      skipped: alreadyLoggedSet.size,
    });
  }

  // 3. Bulk-insert EmailJobs
  await EmailJob.insertMany(
    pending.map((r) => ({
      type: "ANNOUNCEMENT",
      status: "PENDING",
      payload: { email: r.email, name: r.name, eventTitle, eventDate, eventTime, venue, registerLink, description },
    })),
    { ordered: false }
  );

  // 4. Log to prevent re-queuing on re-trigger
  await AnnouncementLog.insertMany(
    pending.map((r) => ({ announcementId, email: r.email })),
    { ordered: false }
  );

  return NextResponse.json({
    success: true,
    queued: pending.length,
    skipped: alreadyLoggedSet.size,
    note: "Emails will be sent by the queue processor on its next runs.",
  });
}
