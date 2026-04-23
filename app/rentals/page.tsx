import type { Metadata } from "next";
import Link from "next/link";
import { rentals } from "@/data/rentals";
import { rentalFaqs } from "@/data/faqs";
import { siteConfig } from "@/data/site";
import RentalCard from "@/components/rental-card";
import FAQList from "@/components/faq-list";
import RequestForm from "@/components/request-form";
import CTABand from "@/components/cta-band";
import SectionHeading from "@/components/section-heading";
import { CheckCircle, Phone, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Boat & Jet Ski Rentals Detroit — Boat Life Detroit",
  description:
    "Boat rentals, jet ski rentals, and group event experiences on the Detroit River and Lake St Clair. Metro Detroit's best on-water experiences. Inquire today.",
};

const howItWorks = [
  {
    step: "01",
    title: "Submit Your Inquiry",
    description:
      "Fill out our quick request form with your name, contact info, preferred dates, group size, and what you're looking for. Takes two minutes.",
  },
  {
    step: "02",
    title: "We Follow Up",
    description:
      "Our team reviews your request and reaches out with availability, options, and everything you need to know to plan your experience.",
  },
  {
    step: "03",
    title: "Confirm and Get Ready",
    description:
      "Once you're all set, we'll confirm your booking details and prepare everything for your day on the water. All you need to do is show up.",
  },
  {
    step: "04",
    title: "Get on the Water",
    description:
      "Arrive, launch, and enjoy one of Metro Detroit's best waterways. Whether it's a solo jet ski run or a full crew cruise — it's your day on the water.",
  },
];

const rentalFeatures = [
  "Detroit River & Lake St Clair experiences",
  "Flexible rental windows",
  "Groups of all sizes welcome",
  "Local waterway expertise",
  "Boat and jet ski options",
  "Event and celebration experiences",
  "Easy, low-friction inquiry process",
  "Quick response turnaround",
];

export default function RentalsPage() {
  return (
    <>
      {/* Page Hero */}
      <section
        className="relative bg-[#07131F] pt-32 pb-20 overflow-hidden"
        aria-label="Rentals page hero"
      >
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-[0.06] blur-3xl rounded-full"
          style={{ background: "radial-gradient(#2EA7FF, transparent 70%)" }}
          aria-hidden="true"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-6 h-px bg-[#2EA7FF]" aria-hidden="true" />
              <span className="text-[#2EA7FF] text-xs font-black uppercase tracking-widest">
                Rentals
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.02] tracking-tight mb-6">
              Get on the Water
              <br />
              <span className="text-[#2EA7FF]">Your Way.</span>
            </h1>
            <p className="text-[#B7C5D3] text-xl leading-relaxed mb-8">
              Boat rentals, jet ski rentals, and group boating experiences on
              Metro Detroit&apos;s most iconic waterways. Inquiry-first — no
              hidden fees, no pressure, just a fast and easy path to your best
              day on the water.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#request-info"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#2EA7FF] hover:bg-[#59D0FF] text-[#07131F] font-black text-sm uppercase tracking-wide rounded-xl transition-all shadow-[0_0_24px_rgba(46,167,255,0.3)]"
              >
                Request Info
                <ChevronRight size={16} />
              </Link>
              <a
                href={siteConfig.phoneHref}
                className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 hover:border-white/40 text-white font-bold text-sm uppercase tracking-wide rounded-xl transition-all hover:bg-white/5"
              >
                <Phone size={16} />
                {siteConfig.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Rental Cards */}
      <section
        className="bg-[#0E1D2B] py-20 lg:py-28"
        aria-labelledby="rental-options-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What We Offer"
            title="Rental Options"
            subtitle="Three ways to get on the water — choose the experience that fits your crew."
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rentals.map((rental, i) => (
              <RentalCard key={rental.id} rental={rental} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section
        className="bg-[#07131F] py-20 lg:py-24"
        aria-labelledby="features-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                eyebrow="What You Get"
                title="Built for Metro Detroit Boaters"
                subtitle="Every rental experience is backed by our local expertise and commitment to making your day on the water seamless."
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {rentalFeatures.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-3 p-4 bg-[#0E1D2B] rounded-xl border border-white/8"
                >
                  <CheckCircle
                    size={16}
                    className="text-[#2EA7FF] mt-0.5 shrink-0"
                  />
                  <span className="text-[#B7C5D3] text-sm font-medium">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section
        className="bg-[#0E1D2B] py-20 lg:py-28"
        aria-labelledby="how-it-works-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <SectionHeading
              eyebrow="The Process"
              title="How Rental Inquiries Work"
              subtitle="Simple, fast, and human. No complicated booking engine — just a direct line to our team."
              align="center"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((step, i) => (
              <div key={step.step} className="relative">
                {i < howItWorks.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-8 left-[calc(100%-0px)] w-full h-px z-0"
                    style={{
                      background:
                        "linear-gradient(90deg, #2EA7FF30, transparent)",
                    }}
                    aria-hidden="true"
                  />
                )}
                <div className="bg-[#07131F] rounded-2xl border border-white/10 p-6 relative z-10">
                  <div className="text-5xl font-black text-[#2EA7FF]/20 mb-3">
                    {step.step}
                  </div>
                  <h3 className="text-white font-bold text-base mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[#7D8B99] text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Request Info */}
      <section
        className="bg-[#07131F] py-20 lg:py-28"
        id="request-info"
        aria-labelledby="request-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-2">
              <SectionHeading
                eyebrow="Ready to Book?"
                title="Request Rental Info"
                subtitle="Tell us what you're looking for and when — we'll get back to you fast with everything you need."
              />
              <div className="mt-8 p-5 bg-[#0E1D2B] rounded-2xl border border-white/10 space-y-4">
                <div>
                  <p className="text-xs text-[#7D8B99] uppercase tracking-widest font-bold mb-1">
                    Call or Text
                  </p>
                  <a
                    href={siteConfig.phoneHref}
                    className="text-[#2EA7FF] font-bold text-lg hover:text-[#59D0FF] transition-colors"
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
                    className="text-[#B7C5D3] text-sm hover:text-white transition-colors break-all"
                  >
                    {siteConfig.email}
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

      {/* FAQ */}
      <section className="bg-[#0E1D2B] py-20 lg:py-24" aria-labelledby="faq-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <SectionHeading
              eyebrow="FAQ"
              title="Rental Questions Answered"
              subtitle="Everything you want to know before you inquire."
              align="center"
            />
          </div>
          <FAQList faqs={rentalFaqs} />
        </div>
      </section>

      {/* CTA */}
      <CTABand
        title="Your Next Boat Day Starts Here"
        subtitle="Submit a quick inquiry and we'll get your experience on the water set up."
        primaryLabel="Request Info Now"
        primaryHref="/contact"
        secondaryLabel="View Events"
        secondaryHref="/events"
        variant="dark"
      />
    </>
  );
}
