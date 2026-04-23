import type { Metadata } from "next";
import Link from "next/link";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/site";
import { events } from "@/data/events";
import { rentals } from "@/data/rentals";
import { homepageFaqs } from "@/data/faqs";
import { featuredMerch, merchStoreUrl } from "@/data/merch";
import TrustStrip from "@/components/trust-strip";
import RentalCard from "@/components/rental-card";
import EventCard from "@/components/event-card";
import GalleryGrid from "@/components/gallery-grid";
import MerchCard from "@/components/merch-card";
import RequestForm from "@/components/request-form";
import FAQList from "@/components/faq-list";
import CTABand from "@/components/cta-band";
import SectionHeading from "@/components/section-heading";
import HomeHero from "@/components/home-hero";
import WhySection from "@/components/why-section";

export const metadata: Metadata = {
  title: "Boat Life Detroit — Michigan's Boating Hub",
  description:
    "Boat Life Detroit is Michigan's boating hub. Boat rentals, jet ski rentals, and boating events on the Detroit River and Lake St Clair. Request info today.",
};

const galleryItems = [
  {
    src: "/images/gallery/boat-life-crowd-riverfront-01.jpg",
    alt: "Boat Life Detroit riverfront crowd event",
    span: "wide" as const,
  },
  {
    src: "/images/gallery/jet-ski-lifestyle-01.jpg",
    alt: "Jet ski action on Lake St Clair",
  },
  {
    src: "/images/gallery/detroit-skyline-boat-01.jpg",
    alt: "Boat cruising past Detroit skyline",
  },
  {
    src: "/images/gallery/lake-st-clair-sunset-01.jpg",
    alt: "Lake St Clair golden hour",
    span: "wide" as const,
  },
  {
    src: "/images/gallery/boat-dock-social-01.jpg",
    alt: "Friends gathering at the dock",
  },
  {
    src: "/images/gallery/pier-pressure-aerial-01.jpg",
    alt: "Pier Pressure aerial event view",
  },
  {
    src: "/images/gallery/detroit-river-cruise-01.jpg",
    alt: "Detroit River community cruise",
  },
  {
    src: "/images/gallery/splash-bash-crowd-01.jpg",
    alt: "Splash Bash crowd on the water",
    span: "wide" as const,
  },
];

export default function HomePage() {
  const featuredEvents = events.filter((e) => e.featured);

  return (
    <>
      {/* [1] HERO */}
      <HomeHero />

      {/* [2] TRUST STRIP */}
      <TrustStrip />

      {/* [3] FEATURED RENTALS */}
      <section
        className="bg-[#07131F] py-20 lg:py-28"
        aria-labelledby="rentals-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
            <SectionHeading
              eyebrow="Rentals"
              title="Hit the Water This Season"
              subtitle="Boat rentals, jet ski rentals, and group event experiences on Michigan's most iconic waterways."
            />
            <Link
              href="/rentals"
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3 border border-white/20 hover:border-white/40 rounded-xl text-sm font-bold text-[#B7C5D3] hover:text-white uppercase tracking-wide transition-all"
            >
              View All Rentals
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rentals.map((rental, i) => (
              <RentalCard key={rental.id} rental={rental} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* [4] UPCOMING EVENTS */}
      <section
        className="bg-[#0E1D2B] py-20 lg:py-28"
        aria-labelledby="events-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
            <SectionHeading
              eyebrow="Events"
              title="What's Happening on the Water"
              subtitle="From Pier Pressure to Splash Bash — Boat Life Detroit is your source for Metro Detroit's best boating events."
            />
            <Link
              href="/events"
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3 border border-[#2EA7FF]/30 hover:border-[#2EA7FF]/60 rounded-xl text-sm font-bold text-[#2EA7FF] hover:text-[#59D0FF] uppercase tracking-wide transition-all"
            >
              All Events
            </Link>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {featuredEvents.map((event, i) => (
              <EventCard key={event.id} event={event} index={i} size="large" />
            ))}
          </div>
        </div>
      </section>

      {/* [5] WHY BOAT LIFE DETROIT */}
      <WhySection />

      {/* [6] GALLERY */}
      <section
        className="bg-[#0E1D2B] py-20 lg:py-28"
        aria-labelledby="gallery-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <SectionHeading
              eyebrow="Life on the Water"
              title="Detroit Boating Culture"
              subtitle="From the Detroit River to Lake St Clair — this is what Boat Life looks like in Metro Detroit."
              align="center"
            />
          </div>
          <GalleryGrid items={galleryItems} />
        </div>
      </section>

      {/* [7] MERCH PROMO */}
      <section
        className="bg-[#07131F] py-20 lg:py-28"
        aria-labelledby="merch-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
            <SectionHeading
              eyebrow="Merchandise"
              title="Rep the Boat Life Brand"
              subtitle="Hoodies, tees, hats, and gear built for life on Michigan's water. Wear it on the dock, on the boat, or in the city."
            />
            <a
              href={merchStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-[#2EA7FF] hover:bg-[#59D0FF] rounded-xl text-sm font-black text-[#07131F] uppercase tracking-wide transition-all shadow-[0_0_20px_rgba(46,167,255,0.3)]"
            >
              Shop All Merch ↗
            </a>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {featuredMerch.slice(0, 4).map((item, i) => (
              <MerchCard key={item.id} item={item} index={i} storeUrl={merchStoreUrl} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/merch"
              className="inline-flex items-center gap-2 text-[#2EA7FF] hover:text-[#59D0FF] font-semibold text-sm transition-colors"
            >
              Browse the full collection →
            </Link>
          </div>
        </div>
      </section>

      {/* [8] REQUEST INFO */}
      <section
        className="bg-[#0E1D2B] py-20 lg:py-28"
        aria-labelledby="request-heading"
        id="request-info"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-2">
              <SectionHeading
                eyebrow="Get in Touch"
                title="Ready to Hit the Water?"
                subtitle="Fill out the form and our team will follow up with everything you need to book your experience or get your questions answered."
              />
              <div className="mt-8 space-y-4">
                <div>
                  <p className="text-xs text-[#7D8B99] uppercase tracking-widest font-bold mb-1">
                    Phone / Text
                  </p>
                  <a
                    href={siteConfig.phoneHref}
                    className="text-[#2EA7FF] hover:text-[#59D0FF] font-semibold text-lg transition-colors"
                  >
                    {siteConfig.phone}
                  </a>
                </div>
                <div>
                  <p className="text-xs text-[#7D8B99] uppercase tracking-widest font-bold mb-1">
                    Email
                  </p>
                  <a
                    href={siteConfig.emailHref}
                    className="text-[#B7C5D3] hover:text-white transition-colors text-sm break-all"
                  >
                    {siteConfig.email}
                  </a>
                </div>
                <div>
                  <p className="text-xs text-[#7D8B99] uppercase tracking-widest font-bold mb-1">
                    Instagram
                  </p>
                  <a
                    href={siteConfig.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#B7C5D3] hover:text-white transition-colors text-sm"
                  >
                    {siteConfig.instagramHandle}
                  </a>
                </div>
              </div>
            </div>
            <div className="lg:col-span-3">
              <RequestForm />
            </div>
          </div>
        </div>
      </section>

      {/* [9] FAQ PREVIEW */}
      <section
        className="bg-[#07131F] py-20 lg:py-24"
        aria-labelledby="faq-heading"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <SectionHeading
              eyebrow="FAQ"
              title="Common Questions"
              subtitle="Quick answers to what people ask most about Boat Life Detroit."
              align="center"
            />
          </div>
          <FAQList faqs={homepageFaqs} />
          <div className="text-center mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-[#2EA7FF] hover:text-[#59D0FF] font-semibold text-sm transition-colors"
            >
              More questions? Contact us →
            </Link>
          </div>
        </div>
      </section>

      {/* [10] FINAL CTA */}
      <CTABand
        title="Detroit's Water Is Calling. Are You?"
        subtitle="Rent a boat, join the community, hit the next event, or grab your gear. Boat Life Detroit brings it all together."
        primaryLabel="Request Info"
        primaryHref="/contact"
        secondaryLabel="View Events"
        secondaryHref="/events"
        tertiaryLabel="Shop Merch"
        tertiaryHref={merchStoreUrl}
        tertiaryExternal
        variant="accent"
      />
    </>
  );
}
