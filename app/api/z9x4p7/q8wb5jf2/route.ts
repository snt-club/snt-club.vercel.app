import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import EventRegistration from "@/models/EventRegistration";

export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  const secret = process.env.CRON_SECRET;
  if (!secret) {
    return NextResponse.json({ message: "CRON_SECRET not configured" }, { status: 500 });
  }

  const url = new URL(req.url);
  const header = req.headers.get("authorization");
  const authorized =
    header === `Bearer ${secret}` || url.searchParams.get("secret") === secret;
  if (!authorized) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  await connectDB();

  const eventFilter = url.searchParams.get("event");
  const query = eventFilter ? { event: eventFilter } : {};

  const regs = await EventRegistration.find(query).sort({ createdAt: 1 }).lean();

  const headers = ["S.No", "Event", "Name", "Email", "Roll No", "Phone", "Branch", "Year", "Registered At"];

  const rows = regs.map((r: any, i: number) => [
    i + 1,
    r.event ?? "",
    r.name ?? "",
    r.email ?? "",
    r.rollNo ?? "",
    r.phone ?? "",
    r.branch ?? "",
    r.year ?? "",
    r.createdAt ? new Date(r.createdAt).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }) : "",
  ]);

  const countMap: Record<string, number> = {};
  for (const r of regs as any[]) {
    const ev = r.event ?? "unknown";
    countMap[ev] = (countMap[ev] ?? 0) + 1;
  }
  const eventCounts = Object.entries(countMap).map(([event, count]) => ({ event, count }));

  return NextResponse.json({
    generatedAt: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
    totalCount: rows.length,
    eventCounts,
    headers,
    rows,
  });
}
