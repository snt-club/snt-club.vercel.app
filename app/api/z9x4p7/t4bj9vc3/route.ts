import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import EmailJob from "@/models/Emailjob";
import {
  sendOtpMail,
  sendRegistrationMail,
  sendEventConfirmationMail,
  sendEventReminderMail,
} from "@/lib/mailer";

export const dynamic = "force-dynamic";

async function sendForJob(job: any) {
  if (job.type === "OTP") {
    await sendOtpMail(job.payload.email, job.payload.otp);
  } else if (job.type === "REGISTRATION") {
    const { email, name, username, password } = job.payload;
    await sendRegistrationMail(email, name, username, password);
  } else if (job.type === "EVENT") {
    const { email, name, eventTitle, eventDate, eventTime, venue, startDateTime } = job.payload;
    await sendEventConfirmationMail(email, name, eventTitle, eventDate, eventTime, venue, startDateTime);
  } else if (job.type === "REMINDER") {
    const { email, name, eventTitle, timeframeLabel, eventDate, eventTime, venue } = job.payload;
    await sendEventReminderMail(email, name, eventTitle, timeframeLabel, eventDate, eventTime, venue);
  }
}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function processQueue() {
  await connectDB();

  const jobs = await EmailJob.find({
    status: "PENDING",
  }).limit(6);

  const CONCURRENCY = 2;
  let sent = 0;
  let failed = 0;

  for (let i = 0; i < jobs.length; i += CONCURRENCY) {
    const slice = jobs.slice(i, i + CONCURRENCY);

    await Promise.all(
      slice.map(async (job) => {
        try {
          await sendForJob(job);
          await EmailJob.updateOne(
            { _id: job._id },
            { $set: { status: "SENT", processedAt: new Date() } }
          );
          sent++;
        } catch (error) {
          const nextRetries = (job.retries || 0) + 1;
          await EmailJob.updateOne(
            { _id: job._id },
            {
              $set: {
                retries: nextRetries,
                status: nextRetries > 3 ? "FAILED" : "PENDING",
                lastError: error instanceof Error ? error.message : "Unknown error",
              },
            }
          );
          failed++;
        }
      })
    );

    if (i + CONCURRENCY < jobs.length) {
      await sleep(250);
    }
  }

  return { processed: jobs.length, sent, failed };
}

function isAuthorized(req: Request): boolean {
  const secret = process.env.CRON_SECRET;
  if (!secret) return true;

  const header = req.headers.get("authorization");
  if (header === `Bearer ${secret}`) return true;

  const url = new URL(req.url);
  if (url.searchParams.get("secret") === secret) return true;

  return false;
}

export async function GET(req: Request) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }
  const result = await processQueue();
  return NextResponse.json(result);
}
