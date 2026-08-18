import { eventDetails } from "@/eventConstants";

export type EventConfig = {
  slug: string;
  title: string;
  open: boolean;
};

// event slug -> eventRegLink ka last segment
// e.g. "/events/aarambh2026" -> "aarambh2026"
function slugFromLink(link: string): string {
  return link.replace(/\/+$/, "").split("/").filter(Boolean).pop() ?? "";
}

export function getEventConfig(event: string): EventConfig | null {
  const match = eventDetails.find(
    (e: any) => slugFromLink(e.eventRegLink) === event
  );

  if (!match) return null;

  return {
    slug: event,
    title: match.eventName,
    open: match.eventRegStatus === "live",
  };
}