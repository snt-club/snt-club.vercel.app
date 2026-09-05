// lib/eventRegistrations.ts
import { eventDetails } from "@/eventConstants";

export type EventConfig = {
  slug: string;
  title: string;
  open: boolean;
  startDateTime?: string;
  formattedDate?: string;
  formattedTime?: string;
  venue?: string;
  done?: boolean;
};

// Converts "/events/Aarambh2026" -> "aarambh2026"
function slugFromLink(link: string): string {
  return (link.replace(/\/+$/, "").split("/").filter(Boolean).pop() ?? "");
}

export function getEventConfig(event: string): EventConfig | null {
  const target = event;
  const match = eventDetails.find(
    (e: any) => slugFromLink(e.eventRegLink) === target
  );

  if (!match) return null;

  return {
    slug: target,
    title: match.eventName,
    open: match.eventRegStatus === "live",
    startDateTime: match.startDateTime,
    formattedDate: match.eventDate,
    formattedTime: match.eventTime,
    venue: match.eventVenue,
    done: new Date() > new Date(match.startDateTime)
  };
}

export function getAllEvents(): EventConfig[] {
  return eventDetails.map((e: any) => ({
    slug: slugFromLink(e.eventRegLink),
    title: e.eventName,
    open: e.eventRegStatus === "live",
    startDateTime: e.startDateTime,
    formattedDate: matchSchedule(e).date,
    formattedTime: matchSchedule(e).time,
    venue: matchSchedule(e).venue,
  }));
}

function matchSchedule(e: any) {
  return {
    date: e.eventDate || "Date announced soon",
    time: e.eventTime || "Time announced soon",
    venue: e.eventVenue || "SKIT Campus, Jaipur",
  };
}