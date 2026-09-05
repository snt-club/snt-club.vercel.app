import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connectDB } from "@/lib/db";
import EventRegistration from "@/models/EventRegistration";
import EmailJob from "@/models/Emailjob";
import Otp from "@/models/otp";
import { getEventConfig } from "@/lib/eventRegistrations";
import { sendEventConfirmationMail } from "@/lib/mailer";

const BRANCHES = ['CSE', 'DS', 'AI', 'IT', 'IOT', 'ECE', 'EE', 'ME', 'CE'];
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

    const name = (body.name ?? "").trim();
    const email = (body.email ?? "").trim().toLowerCase();
    const rollNo = (body.rollNo ?? "").trim();
    const phone = (body.phone ?? "").trim();
    const branch = (body.branch ?? "").trim();
    const year = Number(body.year);
    const otp = (body.otp ?? "").trim();

    // ---- Validation ----
    if (!name || !email || !rollNo || !phone || !branch || !year) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }
    if (!ALLOWED_EMAIL.test(email)) {
      return NextResponse.json(
        { message: "Please use a valid @gmail.com or @skit.ac.in email" },
        { status: 400 }
      );
    }
    if (!/^[6-9]\d{9}$/.test(phone)) {
      return NextResponse.json(
        { message: "Please enter a valid 10-digit phone number" },
        { status: 400 }
      );
    }
    if (!BRANCHES.includes(branch)) {
      return NextResponse.json({ message: "Invalid branch" }, { status: 400 });
    }
    if (![1, 2, 3, 4].includes(year)) {
      return NextResponse.json({ message: "Invalid year" }, { status: 400 });
    }
    if (!/^\d{6}$/.test(otp)) {
      return NextResponse.json(
        { message: "Please enter the 6-digit OTP sent to your email" },
        { status: 400 }
      );
    }

    // ---- Verify OTP (most recent one for this email+event) ----
    const record = await Otp.findOne({ email, event: config.slug }).sort({
      createdAt: -1,
    });
    if (!record) {
      return NextResponse.json(
        { message: "OTP expired or not found. Please request a new one." },
        { status: 400 }
      );
    }
    const ok = await bcrypt.compare(otp, record.otp);
    if (!ok) {
      return NextResponse.json(
        { message: "Incorrect OTP. Please try again." },
        { status: 400 }
      );
    }

    // ---- Create registration; unique indexes are the final duplicate guard ----
    await EventRegistration.create({
      event: config.slug,
      name,
      email,
      rollNo,
      phone,
      branch,
      year,
    });

    // ---- OTP consumed: remove all OTPs for this email+event ----
    await Otp.deleteMany({ email, event: config.slug });

    // ---- Send confirmation mail immediately; queue as fallback on failure ----
    try {
      await sendEventConfirmationMail(email, name, config.title, config.formattedDate ?? "", config.formattedTime ?? "", config.venue ?? "", config.startDateTime ?? "");
    } catch {
      await EmailJob.create({
        type: "EVENT",
        payload: { email, name, eventTitle: config.title, eventDate: config.formattedDate, eventTime: config.formattedTime, venue: config.venue, startDateTime: config.startDateTime },
      });
    }

    return NextResponse.json({ message: "Registration successful" });
  } catch (err: any) {
    if (err?.code === 11000) {
      const config = getEventConfig(params.event);
      return NextResponse.json(
        {
          message: `You are already registered for ${config?.title ?? "this event"}`,
        },
        { status: 409 }
      );
    }
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}