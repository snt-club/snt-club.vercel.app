import { NextResponse } from "next/server";
import crypto from "crypto";
import bcrypt from "bcryptjs";
import { connectDB } from "@/lib/db";
import Otp from "@/models/otp";
import EventRegistration from "@/models/EventRegistration";
import { getEventConfig } from "@/lib/eventRegistrations";
import { otpRateLimit } from "@/lib/rate-limit";
import { sendOtpMail } from "@/lib/mailer";

// Only these domains are allowed
const ALLOWED_EMAIL = /^[a-zA-Z0-9._%+-]+@(gmail\.com|skit\.ac\.in)$/;

export async function POST(
  req: Request,
  { params }: { params: { event: string } }
) {
  try {
    const config = getEventConfig(params.event);
    if (!config) {
      return NextResponse.json({ message: "Unknown event" }, { status: 404 });
    }
    if (!config.open || config.done) {
      return NextResponse.json(
        { message: "Registrations are closed for this event" },
        { status: 403 }
      );
    }

    await connectDB();
    const body = await req.json();
    const email = (body.email ?? "").trim().toLowerCase();

    if (!ALLOWED_EMAIL.test(email)) {
      return NextResponse.json(
        { message: "Please use a valid @gmail.com or @skit.ac.in email" },
        { status: 400 }
      );
    }

    // ---- Duplicate check: fail fast before sending any OTP ----
    const already = await EventRegistration.findOne({
      event: config.slug,
      email,
    });
    if (already) {
      return NextResponse.json(
        { message: `You are already registered for ${config.title}` },
        { status: 409 }
      );
    }

    // ---- Rate limit ----
    const allowed = await otpRateLimit(email, config.slug);
    if (!allowed) {
      return NextResponse.json(
        { message: "Too many OTP requests. Please try again in 10 minutes." },
        { status: 429 }
      );
    }

    // ---- Generate 6-digit OTP, store hashed, 10-min expiry ----
    const code = crypto.randomInt(40000, 1000000).toString().padStart(6, '0'); // 6 digits
    const hashed = await bcrypt.hash(code, 10);
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000);

    await Otp.create({ email, event: config.slug, otp: hashed, expiresAt });

    // ---- Email the OTP (inline; user is waiting on this screen) ----
    await sendOtpMail(email, code);

    return NextResponse.json({ message: "OTP sent to your email" });
  } catch (err: any) {
    return NextResponse.json(
      { message: "Could not send OTP. Please try again." },
      { status: 500 }
    );
  }
}