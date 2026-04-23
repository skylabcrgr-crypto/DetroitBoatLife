import type { Metadata } from "next";
import Link from "next/link";
import { events } from "@/data/events";
import { siteConfig } from "@/data/site";
import EventCard from "@/components/event-card";
import CTABand from "@/components/cta-band";
import SectionHeading from "@/components/section-heading";
import { Calendar, MapPin, Waves, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Boating Events Detroit — Pier Pressure, Splash Bash & More | Boat Life Detroit",
  description:
    "Detroit boating events — Pier Pressure, Splash Bash, Detroit River cruises, and more. Boat Life Detroit is Metro Detroit's hub for summer water events. Stay updated.",
};

const featuredEvents = events.filter((e) => e.featured);
const recurringEvents = events.filter((e) => e.status === "recurring");

const waterways = [
  {
    name: "Detroit River",
    description:
      "The beating heart of Detroit's water culture. Bridges, international views, and iconic skylines set the backdrop for some of Michigan's best boating events.",
    icon: Waves,
  },
  {
    name: "Lake St Clair",
    description:
      "Metro Detroit's prized freshwater gem. Lake St Clair is where summer boating reaches its peak — open water, warm weekends, and non-stop boat life energy.",
    icon: Waves,
  },
];

export default function EventsPage() {
  return (
    <>
      {/* Page Hero */}
      <section
        className="relative bg-[#07131F] pt-32 pb-20 overflow-hidden"
        aria-label="Events page hero"
      >
        <div
          className="absolute top-0 right-0 w-[500px] h-[400px] opacity-[0.05] blur-3xl rounded-full"
          style={{ background: "radial-gradient(#59D0FF, transparent 70%)" }}
          aria-hidden="true"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-6 h-px bg-[#2EA7FF]" aria-hidden="true" />
              <span className="text-[#2EA7FF] text-xs font-black uppercase tracking-widest">
                Events
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.02] tracking-tight mb-6">
              What&apos;s Happening
              <br />
              <span className="text-[#59D0FF]">on the Water.</span>
            </h1>
            <p className="text-[#B7C5D3] text-xl leading-relaxed mb-8">
              Boat Life Detroit is your source for Metro Detroit&apos;s boating
              event scene. From Pier Pressure to Splash Bash, community cruises
              to waterfront meetups — if it&apos;s happening on the Detroit
              River or Lake St Clair, you&apos;ll find it here.
            </p>
            <div className="flex flex-wrap gap-3 mb-3">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#7D8B99] bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
                <MapPin size={11} className="text-[#2EA7FF]" />
                Detroit River
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#7D8B99] bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
                <MapPin size={11} className="text-[#2EA7FF]" />
                Lake St Clair
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#7D8B99] bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
                <Calendar size={11} className="text-[#2EA7FF]" />
                Updated Regularly
              </span>
            </div>
            <div className="flex flex-wrap gap-4 mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#2EA7FF] hover:bg-[#59D0FF] text-[#07131F] font-black text-sm uppercase tracking-wide rounded-xl transition-all shadow-[0_0_24px_rgba(46,167,255,0.3)]"
              >
                Get Event Info
                <ChevronRight size={16} />
              </Link>
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 hover:border-white/40 text-white font-bold text-sm uppercase tracking-wide rounded-xl transition-all hover:bg-white/5"
              >
                Follow on Instagram ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section
        className="bg-[#0E1D2B] py-20 lg:py-28"
        aria-labelledby="featured-events-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Featured Events"
            title="The Big Ones"
            subtitle="These are the anchor events of the Boat Life Detroit calendar. Don't miss them."
          />
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
            {featuredEvents.map((event, i) => (
              <EventCard key={event.id} event={event} index={i} size="large" />
            ))}
          </div>
        </div>
      </section>

      {/* Community / Recurring Events */}
      {recurringEvents.length > 0 && (
        <section
          className="bg-[#07131F] py-20 lg:py-28"
          aria-labelledby="community-events-heading"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Community Events"
              title="Recurring & Community Happenings"
              subtitle="Not one-off events — these are the regular community gatherings that make Boat Life Detroit more than just a season."
            />
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
              {recurringEvents.map((event, i) => (
                <EventCard key={event.id} event={event} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Where Events Happen */}
      <section
        className="bg-[#0E1D2B] py-20 lg:py-24"
        aria-labelledby="where-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <SectionHeading
              eyebrow="The Waterways"
              title="Where Detroit Boats"
              subtitle="Two of Michigan's most iconic bodies of water — home to Boat Life Detroit's events all summer long."
              align="center"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {waterways.map((place) => {
              const Icon = place.icon;
              return (
                <div
                  key={place.name}
                  className="bg-[#07131F] rounded-2xl border border-white/10 p-8 hover:border-[#2EA7FF]/20 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#2EA7FF]/10 flex items-center justify-center mb-5">
                    <Icon size={20} className="text-[#2EA7FF]" />
                  </div>
                  <h3 className="text-2xl font-black text-white mb-3">
                    {place.name}
                  </h3>
                  <p className="text-[#B7C5D3] leading-relaxed">
                    {place.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stay Updated */}
      <section
        className="bg-[#07131F] py-16 border-y border-white/10"
        aria-label="Stay updated on events"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl font-black text-white mb-2">
                Stay in the Loop
              </h2>
              <p className="text-[#B7C5D3]">
                Follow us on Instagram for real-time event updates, announcements,
                and behind-the-scenes boat life content.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#2EA7FF] to-[#59D0FF] text-[#07131F] font-black text-sm uppercase tracking-wide rounded-xl transition-all shadow-[0_0_20px_rgba(46,167,255,0.3)]"
              >
                Follow @boatlifedetroit313 ↗
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-white/20 hover:border-white/40 text-white font-bold text-sm uppercase tracking-wide rounded-xl transition-all hover:bg-white/5"
              >
                Request Event Info
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABand
        title="Planning Something on the Water?"
        subtitle="Whether you want to attend an event or create your own experience, reach out and we'll make it happen."
        primaryLabel="Request Event Info"
        primaryHref="/contact"
        secondaryLabel="View Rentals"
        secondaryHref="/rentals"
        variant="dark"
      />
    </>
  );
}
