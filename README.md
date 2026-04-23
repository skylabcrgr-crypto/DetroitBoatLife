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

Place images in the `public/images/` directory. Each folder holds a placeholder `.gitkeep` file that you can delete once real photos are added.

### Required Photo Files

**Social / SEO (drop in `public/images/`):**

| File | Size | Purpose |
|------|------|---------|
| `og-image.jpg` | 1200 × 630 px | Google, Facebook & Twitter share preview |

**Logo (drop in `public/images/logo/`):**

> The header currently displays a styled text badge. To use a real logo, drop it here and update `components/site-header.tsx` — find the `{/* Logo */}` comment and replace the `<div>` badge with `<Image src="/images/logo/boat-life-detroit-logo.png" ... />`.

| File | Size | Notes |
|------|------|-------|
| `boat-life-detroit-logo.png` | 200 × 200 px | Transparent background preferred |

**Events (drop in `public/images/events/`):**

| File | Event |
|------|-------|
| `pier-pressure-event-01.jpg` | Pier Pressure |
| `splash-bash-event-01.jpg` | Splash Bash |
| `detroit-river-cruise-01.jpg` | Detroit River Cruise |
| `lake-st-clair-meetup-01.jpg` | Lake St Clair Meetup |

**Rentals (drop in `public/images/rentals/`):**

| File | Rental |
|------|--------|
| `boat-rental-detroit-river.jpg` | Full Boat Rental |
| `jet-ski-lake-st-clair.jpg` | Jet Ski Rental |
| `event-group-boating-detroit.jpg` | Event Group Rental |

**Merch (drop in `public/images/merch/`):**

| File | Product |
|------|---------|
| `boat-life-hoodie-01.jpg` | Classic Hoodie |
| `boat-life-tee-01.jpg` | Signature Tee |
| `boat-life-hat-01.jpg` | Snapback Hat |
| `boat-life-dad-hat-01.jpg` | Dad Hat |
| `boat-life-detroit-tee-01.jpg` | Detroit Tee |
| `boat-life-tumbler-01.jpg` | Tumbler |
| `boat-life-zip-hoodie-01.jpg` | Zip Hoodie |
| `boat-life-jacket-01.jpg` | Performance Jacket |

**Gallery (drop in `public/images/gallery/`):**

| File | Subject |
|------|---------|
| `boat-life-crowd-riverfront-01.jpg` | Crowd at riverfront |
| `jet-ski-lifestyle-01.jpg` | Jet ski action |
| `detroit-skyline-boat-01.jpg` | Detroit skyline from water |
| `lake-st-clair-sunset-01.jpg` | Lake St Clair sunset |
| `boat-dock-social-01.jpg` | Dock social scene |
| `pier-pressure-aerial-01.jpg` | Pier Pressure aerial |
| `detroit-river-cruise-01.jpg` | River cruise |
| `splash-bash-crowd-01.jpg` | Splash Bash crowd |

> **Tip:** All images are rendered via `<img>` tags with Tailwind's `object-cover` class, so exact dimensions are flexible — aim for landscape 4:3 or 3:2 ratios for events/rentals/gallery, square or portrait for merch.

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
