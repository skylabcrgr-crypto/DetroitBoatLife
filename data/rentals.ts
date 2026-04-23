// ============================================================
// RENTALS DATA — EDIT TO UPDATE RENTAL DESCRIPTIONS & INFO
// ============================================================

export type RentalCategory = "boat" | "jetski" | "event";

export interface Rental {
  id: string;
  category: RentalCategory;
  title: string;
  tagline: string;
  description: string;
  idealFor: string[];
  features: string[];
  image: string;
  ctaLabel: string;
}

export const rentals: Rental[] = [
  {
    id: "boat-rental",
    category: "boat",
    title: "Boat Rentals",
    tagline: "Hit the Water Your Way",
    description:
      "Take the helm and explore Detroit's most iconic waterways on your own terms. Our boat rentals are perfect for a day on the Detroit River, cruising Lake St Clair, or gathering the crew for a summer afternoon on the water. No captain required — just a love of the water.",
    idealFor: [
      "Day trips on the Detroit River",
      "Lake St Clair cruises",
      "Group outings and celebrations",
      "Sunset cruises",
      "Family lake days",
      "Birthday and special occasions",
    ],
    features: [
      "Detroit River & Lake St Clair access",
      "Multiple vessel types available",
      "Flexible rental windows",
      "Local waterway expertise",
      "Easy inquiry process",
    ],
    image: "/images/rentals/boat-rental-detroit-river.jpg",
    ctaLabel: "Inquire About Boat Rentals",
  },
  {
    id: "jetski-rental",
    category: "jetski",
    title: "Jet Ski Rentals",
    tagline: "Pure Adrenaline on Metro Detroit Water",
    description:
      "Feel the rush of Detroit's open water on a jet ski. Whether you're a seasoned rider or getting on the water for the first time, jet ski rentals through Boat Life Detroit put you right where the action is — with the Detroit River and Lake St Clair as your playground.",
    idealFor: [
      "Adrenaline seekers",
      "Solo riders and pairs",
      "Summer group activities",
      "Bachelor/bachelorette parties",
      "Corporate and team outings",
      "Anyone who loves speed on the water",
    ],
    features: [
      "Modern, maintained watercraft",
      "Accessible for beginners and experienced riders",
      "Detroit River & Lake St Clair routes",
      "Safety orientation included",
      "Quick and easy booking inquiry",
    ],
    image: "/images/rentals/jet-ski-lake-st-clair.jpg",
    ctaLabel: "Inquire About Jet Ski Rentals",
  },
  {
    id: "event-rental",
    category: "event",
    title: "Event & Group Experiences",
    tagline: "Make Your Event Unforgettable on the Water",
    description:
      "From private group cruises to fully branded event experiences, Boat Life Detroit can build the right water-based experience for your crew. Perfect for birthdays, brand events, company outings, parties, and anything in between. If you want your event to stand out, take it on the water.",
    idealFor: [
      "Private group celebrations",
      "Corporate team building",
      "Brand activations on the water",
      "Birthdays and milestone events",
      "Bachelorette and bachelor parties",
      "Community events and activations",
    ],
    features: [
      "Tailored group experiences",
      "Event planning support",
      "Detroit River and Lake St Clair venues",
      "Flexible group sizes",
      "Branded experience capability",
      "Custom inquiry support",
    ],
    image: "/images/rentals/event-group-boating-detroit.jpg",
    ctaLabel: "Inquire About Event Rentals",
  },
];
