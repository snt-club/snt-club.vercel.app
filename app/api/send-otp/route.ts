import { NextResponse } from "next/server";
import crypto from "crypto";
import { connectDB } from "@/lib/db";
import Otp from "@/models/otp";
import { sendOtpMail } from "@/lib/mailer";
import EmailJob from "@/models/Emailjob";
import { otpRateLimit } from "@/lib/rate-limit";

export async function POST(req: Request) {
  try {
    await connectDB();
    const { email } = await req.json();

    if (!email.endsWith("@skit.ac.in")) {
      return NextResponse.json({ message: "Invalid email" }, { status: 400 });
    }

    if (!(await otpRateLimit(email))) {
      return NextResponse.json({ message: "Too many requests" }, { status: 429 });
    }

    const otp = crypto.randomInt(100000, 999999).toString();

    await Otp.create({
      email,
      otp,
      expiresAt: new Date(Date.now() + 5 * 60 * 1000),
    });

    // 🔥 SEND IMMEDIATELY
    try {
      await sendOtpMail(email, otp);
    } catch {
      await EmailJob.create({ type: "OTP", payload: { email, otp } });
    }

    return NextResponse.json({ message: "OTP sent" });
  } catch {
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
