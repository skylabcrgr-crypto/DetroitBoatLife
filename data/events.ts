// ============================================================
// EVENTS DATA — EDIT THIS FILE TO ADD, EDIT, OR REMOVE EVENTS
// ============================================================

export type EventStatus = "upcoming" | "featured" | "recurring" | "past";
export type EventCategory = "party" | "community" | "competition" | "social";

export interface BoatEvent {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  date: string; // Display string e.g. "July 4, 2025"
  dateISO?: string; // ISO 8601 for sorting e.g. "2025-07-04"
  location: string;
  waterway: string;
  status: EventStatus;
  category: EventCategory;
  image: string;
  ctaLabel: string;
  featured: boolean;
}

export const events: BoatEvent[] = [
  {
    id: "pier-pressure",
    name: "Pier Pressure",
    slug: "pier-pressure",
    tagline: "Detroit's Premier On-Water Party",
    description:
      "Pier Pressure is one of Metro Detroit's hottest summer boat events. Join hundreds of boaters for a lakeside celebration with music, vibes, and pure Detroit energy. Whether you're on the water or on the dock, this is THE summer event you don't want to miss.",
    date: "Summer 2025 — Date TBA",
    dateISO: "2025-07-01",
    location: "Metro Detroit Waterfront",
    waterway: "Detroit River",
    status: "featured",
    category: "party",
    image: "/images/events/pier-pressure-event-01.jpg",
    ctaLabel: "Get Event Info",
    featured: true,
  },
  {
    id: "splash-bash",
    name: "Splash Bash",
    slug: "splash-bash",
    tagline: "The Ultimate Lake St Clair Summer Throwdown",
    description:
      "Splash Bash brings the best of summer to Lake St Clair. This is a community gathering built for boaters, jet ski riders, and waterfront lovers who know Detroit summers are unmatched. Food, music, sun, and boat life — all in one place.",
    date: "Summer 2025 — Date TBA",
    dateISO: "2025-08-01",
    location: "Lake St Clair",
    waterway: "Lake St Clair",
    status: "featured",
    category: "social",
    image: "/images/events/splash-bash-event-01.jpg",
    ctaLabel: "Get Event Info",
    featured: true,
  },
  {
    id: "detroit-river-cruise",
    name: "Detroit River Cruise",
    slug: "detroit-river-cruise",
    tagline: "Skyline Views. Open Water. Pure Detroit.",
    description:
      "Cruise the iconic Detroit River with fellow boaters and take in one of the most stunning skyline views in the Midwest. A community cruise perfect for all experience levels.",
    date: "Recurring — Multiple Dates",
    dateISO: "2025-06-01",
    location: "Detroit River",
    waterway: "Detroit River",
    status: "recurring",
    category: "community",
    image: "/images/events/detroit-river-cruise-01.jpg",
    ctaLabel: "Request Info",
    featured: false,
  },
  {
    id: "lake-st-clair-meetup",
    name: "Lake St Clair Meetup",
    slug: "lake-st-clair-meetup",
    tagline: "Community. Water. Good Times.",
    description:
      "One of Michigan's most beautiful lakes is the backdrop for this regular community boating meetup. Connect with like-minded boaters, discover new routes, and enjoy Lake St Clair the right way.",
    date: "Recurring — Seasonal",
    dateISO: "2025-06-15",
    location: "Lake St Clair",
    waterway: "Lake St Clair",
    status: "recurring",
    category: "community",
    image: "/images/events/lake-st-clair-meetup-01.jpg",
    ctaLabel: "Request Info",
    featured: false,
  },
];

export const featuredEvents = events.filter((e) => e.featured);
export const upcomingEvents = events.filter(
  (e) => e.status === "upcoming" || e.status === "featured"
);
