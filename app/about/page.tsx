import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { merchStoreUrl } from "@/data/merch";
import CTABand from "@/components/cta-band";
import SectionHeading from "@/components/section-heading";
import { Anchor, MapPin, Users, Calendar, ShoppingBag, Waves } from "lucide-react";

export const metadata: Metadata = {
  title: "About Boat Life Detroit — Michigan's Boating Community Hub",
  description:
    "Learn about Boat Life Detroit — Michigan's boating hub since 2016. Our story, our community, and why we exist on the Detroit River and Lake St Clair.",
};

const values = [
  {
    icon: Anchor,
    title: "Rooted in Detroit",
    description:
      "We didn't borrow this from a coastal scene. Boat Life Detroit was built here, for here — by people who love the Detroit River, Lake St Clair, and everything Michigan water has to offer.",
  },
  {
    icon: Users,
    title: "Community First",
    description:
      "The events, the rentals, the merch — it all serves one mission: building a stronger, more connected boating community in Metro Detroit. We're a movement, not just a business.",
  },
  {
    icon: Calendar,
    title: "Event-Driven",
    description:
      "Pier Pressure, Splash Bash, community cruises — we live on the event calendar. If something noteworthy is happening on Metro Detroit water, Boat Life Detroit is part of it.",
  },
  {
    icon: Waves,
    title: "Access for Everyone",
    description:
      "You shouldn't need to own a boat to love the water. Our rentals and events make the Detroit River and Lake St Clair accessible to anyone who wants to experience them.",
  },
];

const timeline = [
  {
    year: "2016",
    label: "Founded",
    description:
      "Boat Life Detroit is established in Metro Detroit with a singular focus: connect people to the water and build a real local boating community.",
  },
  {
    year: "Early Years",
    label: "Building the Community",
    description:
      "Word spreads through the Metro Detroit boating scene. Events grow. The brand becomes known as the go-to source for water culture in Michigan.",
  },
  {
    year: "Pier Pressure",
    label: "Signature Event Born",
    description:
      "Pier Pressure becomes one of the most recognized boating events in Michigan — and a signature moment on the Boat Life Detroit calendar every summer.",
  },
  {
    year: "Splash Bash",
    label: "Lake St Clair Takes Center Stage",
    description:
      "Splash Bash launches on Lake St Clair and quickly earns its spot as a summer staple — a gathering point for Metro Detroit's best boat life energy.",
  },
  {
    year: "Today",
    label: "The Hub Grows",
    description:
      "Boat rentals, jet ski rentals, events, merch, and an active online community — Boat Life Detroit is Michigan's most active boating hub.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section
        className="relative bg-[#07131F] pt-32 pb-20 overflow-hidden"
        aria-label="About page hero"
      >
        <div
          className="absolute top-0 right-1/4 w-[600px] h-[400px] opacity-[0.05] blur-3xl rounded-full"
          style={{ background: "radial-gradient(#2EA7FF, transparent 70%)" }}
          aria-hidden="true"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-6 h-px bg-[#2EA7FF]" aria-hidden="true" />
              <span className="text-[#2EA7FF] text-xs font-black uppercase tracking-widest">
                Our Story
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.02] tracking-tight mb-6">
              This is
              <br />
              <span className="text-[#2EA7FF]">Boat Life Detroit.</span>
            </h1>
            <p className="text-[#B7C5D3] text-xl leading-relaxed mb-4">
              Founded in 2016, Boat Life Detroit started with a simple belief:
              Metro Detroit has some of the most incredible water in the country,
              and not enough people are out there experiencing it. We set out to
              change that.
            </p>
            <p className="text-[#B7C5D3] text-xl leading-relaxed mb-8">
              Today, we&apos;re Michigan&apos;s boating hub — running events,
              coordinating rentals, building community, and making the Detroit
              River and Lake St Clair more accessible to everyone who calls
              Michigan home.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2EA7FF] bg-[#2EA7FF]/10 border border-[#2EA7FF]/20 px-3 py-1.5 rounded-full uppercase tracking-widest">
                Est. {siteConfig.estYear}
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#7D8B99] bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
                <MapPin size={11} className="text-[#2EA7FF]" />
                Metro Detroit, Michigan
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#7D8B99] bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
                <Waves size={11} className="text-[#2EA7FF]" />
                Detroit River + Lake St Clair
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section
        className="bg-[#0E1D2B] py-20 lg:py-24 border-y border-white/10"
        aria-label="Mission statement"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-[1.2] tracking-tight">
            "Boat Life Detroit exists to be the home base for Michigan&apos;s
            boating community — connecting people to the water, to the events,
            and to each other, one summer at a time."
          </p>
        </div>
      </section>

      {/* Values */}
      <section
        className="bg-[#07131F] py-20 lg:py-28"
        aria-labelledby="values-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <SectionHeading
              eyebrow="What We Stand For"
              title="What Makes Us Different"
              subtitle="We're not a marina. We're not a yacht club. We're a community-first boating brand built for Metro Detroit's real boat culture."
              align="center"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="bg-[#0E1D2B] rounded-2xl border border-white/10 p-6 hover:border-[#2EA7FF]/20 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#2EA7FF]/10 flex items-center justify-center mb-5">
                    <Icon size={20} className="text-[#2EA7FF]" />
                  </div>
                  <h3 className="text-white font-bold text-base mb-2">
                    {value.title}
                  </h3>
                  <p className="text-[#7D8B99] text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section
        className="bg-[#0E1D2B] py-20 lg:py-28"
        aria-labelledby="timeline-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <SectionHeading
              eyebrow="Our History"
              title="Built Over Years,\nNot Overnight"
              subtitle="Boat Life Detroit's story is a Metro Detroit story — built step by step, summer by summer."
            />
          </div>
          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#2EA7FF]/40 via-[#2EA7FF]/20 to-transparent"
              aria-hidden="true"
            />
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <div key={i} className="flex gap-8 items-start">
                  <div className="shrink-0 w-12 sm:w-16 flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-[#2EA7FF] border-2 border-[#0E1D2B] ring-2 ring-[#2EA7FF]/30 relative z-10" />
                  </div>
                  <div className="flex-1 pb-8">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-[#2EA7FF] font-black text-sm uppercase tracking-widest">
                        {item.year}
                      </span>
                      <span className="text-xs text-[#7D8B99] font-semibold uppercase tracking-wide bg-white/5 px-2 py-0.5 rounded-full">
                        {item.label}
                      </span>
                    </div>
                    <p className="text-[#B7C5D3] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Waterway identity section */}
      <section
        className="bg-[#07131F] py-16 border-y border-white/10"
        aria-label="Our waterways"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-black text-[#2EA7FF] mb-2">
                {siteConfig.estYear}
              </div>
              <div className="text-white font-bold text-sm mb-1">
                Year Founded
              </div>
              <div className="text-[#7D8B99] text-xs">
                Detroit&apos;s OG boating hub
              </div>
            </div>
            <div>
              <div className="text-4xl font-black text-[#2EA7FF] mb-2">2+</div>
              <div className="text-white font-bold text-sm mb-1">
                Signature Events
              </div>
              <div className="text-[#7D8B99] text-xs">
                Pier Pressure + Splash Bash
              </div>
            </div>
            <div>
              <div className="text-4xl font-black text-[#2EA7FF] mb-2">1</div>
              <div className="text-white font-bold text-sm mb-1">
                Michigan&apos;s Boating Hub
              </div>
              <div className="text-[#7D8B99] text-xs">
                Detroit River · Lake St Clair
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Connect section */}
      <section
        className="bg-[#0E1D2B] py-20 lg:py-24"
        aria-labelledby="connect-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <SectionHeading
              eyebrow="Get Connected"
              title="Join the Boat Life Community"
              subtitle="Follow us on Instagram, request info about rentals or events, and grab your gear from the BLD store. This is where boat life lives in Michigan."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-5 bg-[#07131F] rounded-xl border border-white/10 hover:border-[#2EA7FF]/30 transition-colors group"
                aria-label="Follow Boat Life Detroit on Instagram"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#833AB4]/20 to-[#FD1D1D]/20 flex items-center justify-center shrink-0">
                  <span className="text-xl">📸</span>
                </div>
                <div>
                  <div className="text-white font-bold text-sm">Instagram</div>
                  <div className="text-[#7D8B99] text-xs">
                    {siteConfig.instagramHandle}
                  </div>
                </div>
              </a>
              <Link
                href="/events"
                className="flex items-center gap-3 p-5 bg-[#07131F] rounded-xl border border-white/10 hover:border-[#2EA7FF]/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-[#2EA7FF]/10 flex items-center justify-center shrink-0">
                  <Calendar size={18} className="text-[#2EA7FF]" />
                </div>
                <div>
                  <div className="text-white font-bold text-sm">Events</div>
                  <div className="text-[#7D8B99] text-xs">
                    Pier Pressure + more
                  </div>
                </div>
              </Link>
              <Link
                href="/rentals"
                className="flex items-center gap-3 p-5 bg-[#07131F] rounded-xl border border-white/10 hover:border-[#2EA7FF]/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-[#2EA7FF]/10 flex items-center justify-center shrink-0">
                  <Anchor size={18} className="text-[#2EA7FF]" />
                </div>
                <div>
                  <div className="text-white font-bold text-sm">Rentals</div>
                  <div className="text-[#7D8B99] text-xs">
                    Boats + jet skis
                  </div>
                </div>
              </Link>
              <a
                href={merchStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-5 bg-[#07131F] rounded-xl border border-white/10 hover:border-[#2EA7FF]/30 transition-colors"
                aria-label="Shop Boat Life Detroit merchandise"
              >
                <div className="w-10 h-10 rounded-lg bg-[#2EA7FF]/10 flex items-center justify-center shrink-0">
                  <ShoppingBag size={18} className="text-[#2EA7FF]" />
                </div>
                <div>
                  <div className="text-white font-bold text-sm">Merch</div>
                  <div className="text-[#7D8B99] text-xs">Shop the store ↗</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Ready to Be Part of It?"
        subtitle="Whether you're renting a boat, attending an event, or just repping the brand — Boat Life Detroit has a place for you."
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
