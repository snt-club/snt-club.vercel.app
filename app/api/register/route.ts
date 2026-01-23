import { NextResponse } from "next/server";
import crypto from "crypto";
import bcrypt from "bcryptjs";
import { connectDB } from "@/lib/db";
import Student from "@/models/Student";
import EmailJob from "@/models/EmailJob";
import { sendRegistrationMail } from "@/lib/mailer";

export async function POST(req: Request) {
  try {
    await connectDB();
    const { name, email, rollNo, branch, year } = await req.json();

    const username = "css_" + crypto.randomBytes(3).toString("hex");
    const rawPassword = crypto.randomBytes(4).toString("hex");
    const hashedPassword = await bcrypt.hash(rawPassword, 10);

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

    if (existing) {
      return NextResponse.json({ message: "Already registered" });
    }

    try {
      await sendRegistrationMail(email, name, username, rawPassword);
    } catch {
      await EmailJob.create({
        type: "REGISTRATION",
        payload: { email, name, username, password: rawPassword },
      });
    }

    return NextResponse.json({ message: "Registration successful" });
  } catch {
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
