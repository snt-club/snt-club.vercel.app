import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import EmailJob from "@/models/Emailjob";
import {
  sendOtpMail,
  sendRegistrationMail,
  sendEventConfirmationMail,
} from "@/lib/mailer";

export const dynamic = "force-dynamic";
export const maxDuration = 60; // give the sweep room to send a batch

async function sendForJob(job: any) {
  if (job.type === "OTP") {
    await sendOtpMail(job.payload.email, job.payload.otp);
  } else if (job.type === "REGISTRATION") {
    const { email, name, username, password } = job.payload;
    await sendRegistrationMail(email, name, username, password);
  } else if (job.type === "EVENT") {
    const { email, name, eventTitle } = job.payload;
    await sendEventConfirmationMail(email, name, eventTitle);
  }
}

async function processQueue() {
  await connectDB();

  // Pull a batch of pending jobs. This is a once-a-day fallback sweep for
  // mails that failed to send inline at registration time.
  const jobs = await EmailJob.find({ status: "PENDING" }).limit(100);

  // Send in parallel but bounded, so we clear the batch fast without
  // hammering Gmail's SMTP connection all at once.
  const CONCURRENCY = 5;
  let sent = 0;
  let failed = 0;

  for (let i = 0; i < jobs.length; i += CONCURRENCY) {
    const slice = jobs.slice(i, i + CONCURRENCY);
    await Promise.all(
      slice.map(async (job) => {
        try {
          await sendForJob(job);
          job.status = "SENT";
          await job.save();
          sent++;
        } catch {
          job.retries += 1;
          job.status = job.retries > 3 ? "FAILED" : "PENDING";
          await job.save();
          failed++;
        }
      })
    );
  }

  return { processed: jobs.length, sent, failed };
}

// Verify the caller is Vercel Cron (or an authorized trigger) before doing work.
function isAuthorized(req: Request): boolean {
  const secret = process.env.CRON_SECRET;
  // If no secret is configured, don't block (keeps local/dev working).
  if (!secret) return true;

  // Accept the secret two ways so it works with any external scheduler:
  //  1. Authorization: Bearer <secret>   (cron-job.org custom header, Vercel Cron)
  //  2. ?secret=<secret> in the URL       (simpler schedulers that only allow a URL)
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