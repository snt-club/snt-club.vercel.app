import { NextResponse } from "next/server";
import crypto from "crypto";
import bcrypt from "bcryptjs";
import { connectDB } from "@/lib/db";
import Student from "@/models/Student";
import EmailJob from "@/models/Emailjob";
import { sendRegistrationMail } from "@/lib/mailer";

export async function POST(req: Request) {
  try {
    await connectDB();

    const { name, email, rollNo, branch, year } = await req.json();

    const username = "css_" + crypto.randomBytes(3).toString("hex");
    const rawPassword = crypto.randomBytes(4).toString("hex");
    const hashedPassword = await bcrypt.hash(rawPassword, 10);

    // 🔥 IDEMPOTENT WRITE (NO DUPLICATES, NO CRASH)
    const existing = await Student.findOneAndUpdate(
      { email },
      {
        $setOnInsert: {
          name,
          email,
          rollNo,
          branch,
          year,
          username,
          password: hashedPassword,
          isEmailVerified: true,
        },
      },
      { upsert: true, new: false }
    );

    // If already exists → do not re-send credentials
    if (existing) {
      return NextResponse.json({
        message: "Already registered. Please check your email.",
      });
    }

    // 🔥 TRY IMMEDIATE EMAIL (FREE PLAN SAFE)
    try {
      await sendRegistrationMail(email, name, username, rawPassword);
    } catch (err) {
      // ⏳ fallback queue (cron will retry)
      await EmailJob.create({
        type: "REGISTRATION",
        payload: { email, name, username, password: rawPassword },
      });
    }

    return NextResponse.json({
      message: "Registration successful. Credentials sent to email.",
    });
  } catch (err) {
    console.error("REGISTER ERROR:", err);
    return NextResponse.json(
      { message: "Server error" },
      { status: 500 }
    );
  }
}
