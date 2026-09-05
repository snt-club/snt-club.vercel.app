import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import EventRegistration from "@/models/EventRegistration";

export const dynamic = "force-dynamic";
export const maxDuration = 30;

// ---- Registration data feed for the Google Sheet ----
// Secured with CRON_SECRET. Google Apps Script calls this every 5 min:
//   /api/admin/export-sheet?secret=YOUR_SECRET
// Returns clean JSON rows that the script writes into the sheet.
export async function GET(req: Request) {
  const secret = process.env.CRON_SECRET;
  if (!secret) {
    return NextResponse.json(
      { message: "CRON_SECRET not configured" },
      { status: 500 }
    );
  }
  const url = new URL(req.url);
  const header = req.headers.get("authorization");
  const authorized =
    header === `Bearer ${secret}` || url.searchParams.get("secret") === secret;
  if (!authorized) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  await connectDB();

  const regs = await EventRegistration.find({})
    .sort({ createdAt: 1 })
    .lean();

  // Fixed column order so the sheet stays consistent.
  const headers = [
    "S.No",
    "Event",
    "Name",
    "Email",
    "Roll No",
    "Phone",
    "Branch",
    "Year",
    "Registered At",
  ];

  const rows = regs.map((r: any, i: number) => [
    i + 1,
    r.event ?? "",
    r.name ?? "",
    r.email ?? "",
    r.rollNo ?? "",
    r.phone ?? "",
    r.branch ?? "",
    r.year ?? "",
    r.createdAt ? new Date(r.createdAt).toISOString() : "",
  ]);

  return NextResponse.json({
    generatedAt: new Date().toISOString(),
    count: rows.length,
    headers,
    rows,
  });
}