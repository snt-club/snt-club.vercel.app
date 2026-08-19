import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import EmailJob from "@/models/Emailjob";
import {
  sendOtpMail,
  sendRegistrationMail,
  sendEventConfirmationMail,
} from "@/lib/mailer";

export const dynamic = "force-dynamic";

export async function GET() {
  await connectDB();
  const jobs = await EmailJob.find({ status: "PENDING" }).limit(20);
  for (const job of jobs) {
    try {
      if (job.type === "OTP") {
        await sendOtpMail(job.payload.email, job.payload.otp);
      }
      if (job.type === "REGISTRATION") {
        const { email, name, username, password } = job.payload;
        await sendRegistrationMail(email, name, username, password);
      }
      if (job.type === "EVENT") {
        const payload = job.toObject().payload as Record<string, string>;
        const { email, name, eventTitle } = payload;
        await sendEventConfirmationMail(email, name, eventTitle);
      }
      job.status = "SENT";
      await job.save();
    } catch {
      job.retries += 1;
      job.status = job.retries > 3 ? "FAILED" : "PENDING";
      await job.save();
    }
  }
  return NextResponse.json({
    processed: jobs.length,
  });
}