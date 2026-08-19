import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import EventRegistration from "@/models/EventRegistration";
import EmailJob from "@/models/Emailjob";
import { getEventConfig } from "@/lib/eventRegistrations";

const BRANCHES = ["CSE", "DS", "AI", "IT", "IOT"];

export async function POST(
  req: Request,
  { params }: { params: { event: string } }
) {
  try {
    const config = getEventConfig(params.event);
    if (!config) {
      return NextResponse.json({ message: "Unknown event" }, { status: 404 });
    }
    if (!config.open) {
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

    // ---- Validation ----
    if (!name || !email || !rollNo || !phone || !branch || !year) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }
    if (!/^[a-zA-Z0-9._%+-]+@(gmail\.com|skit\.ac\.in)$/.test(email)) {
      return NextResponse.json(
        { message: "Please use your @skit.ac.in email" },
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

    // ---- Create directly; unique indexes handle duplicates (no extra findOne) ----
    await EventRegistration.create({
      event: config.slug,
      name,
      email,
      rollNo,
      phone,
      branch,
      year,
    });

    // ---- Queue confirmation mail, respond immediately (no waiting on SMTP) ----
    await EmailJob.create({
      type: "EVENT",
      payload: { email, name, eventTitle: config.title },
    });

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
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
