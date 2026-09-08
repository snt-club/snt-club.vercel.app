import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import EventRegistration from "@/models/EventRegistration";
import { getDistanceFromVenueInMeters } from "@/lib/geo";
import Attendance from "@/models/Attendance";

export async function POST(req: Request) {
  try {
    const { event, email, rollNo, name, rating, feedback, lat, lng, deviceId } =
      await req.json();

    if (!lat || !lng || !deviceId) {
      return NextResponse.json(
        { error: "Location and Device verification required." },
        { status: 400 }
      );
    }

    // 1. Verify Geofence (Within 50 meters)
    const distance = getDistanceFromVenueInMeters(lat, lng);
    if (distance > 50) {
      return NextResponse.json(
        {
          error: `You are ${(distance).toFixed(0)}m away from the venue. You must be within 50m to mark attendance.`,
        },
        { status: 403 }
      );
    }

    await connectDB();

    // 2. Verify Registration Exists
    const isRegistered = await EventRegistration.findOne({
      event: event,
      email: email,
    });

    if (!isRegistered) {
      return NextResponse.json(
        { error: "This email is not registered for the event." },
        { status: 400 }
      );
    }

    // 3. Prevent Duplicate Submissions (Device & Email)
    const existingSubmission = await Attendance.findOne({
      event: event.toLowerCase(),
      $or: [{ email: email.toLowerCase() }, { deviceId }],
    });

    if (existingSubmission) {
      if (existingSubmission.email === email.toLowerCase()) {
        return NextResponse.json(
          { error: "Attendance already marked for this email." },
          { status: 409 }
        );
      }
      return NextResponse.json(
        { error: "Attendance has already been recorded from this device." },
        { status: 409 }
      );
    }

    // 4. Record Attendance
    const record = await Attendance.create({
      event: event.toLowerCase(),
      email: email.toLowerCase(),
      rollNo: rollNo.toUpperCase(),
      name,
      deviceId,
      distanceFromVenue: Math.round(distance),
      rating: Number(rating),
      feedback,
    });

    return NextResponse.json({ success: true, record });
  } catch (error: any) {
    if (error.code === 11000) {
      return NextResponse.json(
        { error: "Duplicate submission detected." },
        { status: 409 }
      );
    }
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
