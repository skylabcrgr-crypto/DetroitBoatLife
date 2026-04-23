# Boat Life Detroit

**Michigan's Boating Hub** — boat rentals, jet ski rentals, boating events, and community on the Detroit River and Lake St Clair.

---

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animation:** Framer Motion
- **Icons:** lucide-react

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Site Routes

| Route | Page |
|-------|------|
| `/` | Homepage |
| `/rentals` | Boat, Jet Ski & Event Rentals |
| `/events` | Boating Events Hub |
| `/merch` | Merchandise |
| `/about` | About Boat Life Detroit |
| `/contact` | Contact & Request Info |

---

## Updating Site Content

All editable content lives in the `/data/` directory:

| File | What to Edit |
|------|-------------|
| `data/site.ts` | Contact info, social links, nav, geography |
| `data/events.ts` | Add/edit/remove events |
| `data/rentals.ts` | Update rental descriptions |
| `data/faqs.ts` | Add/edit FAQ items |
| `data/merch.ts` | Update merch categories and products |

### Adding a New Event

Open `data/events.ts` and add a new object to the `events` array:

```typescript
{
  id: "my-new-event",
  name: "My New Event",
  slug: "my-new-event",
  tagline: "Short tagline",
  description: "Full description of the event...",
  date: "June 20, 2025",
  dateISO: "2025-06-20",
  location: "Detroit River",
  waterway: "Detroit River",
  status: "upcoming",   // "upcoming" | "featured" | "recurring" | "past"
  category: "party",    // "party" | "community" | "competition" | "social"
  image: "/images/events/my-new-event-01.jpg",
  ctaLabel: "Get Event Info",
  featured: false,
}
```

---

## Adding Images

Place images in the `public/images/` directory following this structure:

```
public/images/
  logo/       — Logo files
  hero/       — Hero section backgrounds
  events/     — Event photos
  gallery/    — Gallery grid photos
  merch/      — Merch product photos
  rentals/    — Rental photos
```

Images are referenced by their path from `public/`, e.g.:  
`/images/hero/detroit-river-boat-sunset.jpg`

---

## Build for Production

```bash
npm run build
npm run start
```

---

## Business Info

- **Phone:** (248) 747-2523
- **Email:** boatlifedetroitllc@gmail.com
- **Instagram:** [@boatlifedetroit313](https://www.instagram.com/boatlifedetroit313/)
- **Merch Store:** [moq1.com/team84/boatlife](https://www.moq1.com/team84/boatlife)
