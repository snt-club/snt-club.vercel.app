import { NextResponse } from "next/server";
import Otp from "@/models/otp";
import Student from "@/models/Student";
import { connectDB } from "@/lib/db";

export async function POST(req: Request) {
  await connectDB();

  const { email, otp } = await req.json();

  const record = await Otp.findOne({ email, otp });

  if (!record || record.expiresAt < new Date()) {
    return NextResponse.json({ message: "Invalid or expired OTP" }, { status: 400 });
  }

  await Otp.deleteMany({ email });

  return NextResponse.json({ message: "Email verified" });
}
