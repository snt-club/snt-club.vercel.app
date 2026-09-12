import AnnouncementLog from "@/models/AnnouncementLog";
import EventRegistration from "@/models/EventRegistration";
import { sendEventAnnouncementMail } from "@/lib/mailer";
import { EventConfig } from "@/lib/eventRegistrations";

const BASE_URL = "https://snt-club.vercel.app";
const CONCURRENCY = 4;
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

/**
 * Called (fire-and-forget) the first time anyone registers for a new event.
 * Sends an announcement mail to every user who registered for a PREVIOUS event.
 * Safe to call multiple times — only fires once per event (atomic sentinel in AnnouncementLog).
 */
export async function autoAnnounceIfNew(event: EventConfig): Promise<void> {
  const announcementId = `${event.slug}-launch`;

  // Atomically claim the announcement — only one registration wins this
  const alreadyClaimed = await AnnouncementLog.findOneAndUpdate(
    { announcementId, email: "__trigger__" },
    { $setOnInsert: { announcementId, email: "__trigger__" } },
    { upsert: true, new: false }
  );
  if (alreadyClaimed) return; // another request already triggered it

  // All distinct (email, name) from previous events — exclude current event registrants
  const recipients: { email: string; name: string }[] =
    await EventRegistration.aggregate([
      { $match: { event: { $ne: event.slug } } },
      { $sort: { createdAt: -1 } },
      { $group: { _id: "$email", name: { $first: "$name" } } },
      { $project: { _id: 0, email: "$_id", name: 1 } },
    ]);

  if (recipients.length === 0) return;

  const registerLink = `${BASE_URL}/events/${event.slug}`;
  const description = `Registrations are now open for ${event.title}. Join us for an exciting session at SKIT — seats are limited, so register early to secure your spot!`;

  for (let i = 0; i < recipients.length; i += CONCURRENCY) {
    const batch = recipients.slice(i, i + CONCURRENCY);
    await Promise.all(
      batch.map((r) =>
        sendEventAnnouncementMail(
          r.email,
          r.name,
          event.title,
          event.formattedDate || "Coming Soon",
          event.formattedTime || "TBA",
          event.venue || "SKIT Campus, Jaipur",
          registerLink,
          description
        ).catch(() => {}) // skip failed sends silently
      )
    );
    if (i + CONCURRENCY < recipients.length) await sleep(200);
  }
}
