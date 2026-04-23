import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { merchStoreUrl } from "@/data/merch";
import { contactFaqs } from "@/data/faqs";
import RequestForm from "@/components/request-form";
import FAQList from "@/components/faq-list";
import CTABand from "@/components/cta-band";
import SectionHeading from "@/components/section-heading";
import { Phone, Mail, MapPin, ShoppingBag, Calendar, Anchor, ChevronRight } from "lucide-react";
import { InstagramIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Contact Boat Life Detroit — Request Info, Rentals & Events",
  description:
    "Contact Boat Life Detroit for boat rentals, jet ski rentals, event inquiries, and more. Call (248) 747-2523 or submit a request online.",
};

const quickActions = [
  {
    icon: Anchor,
    title: "Book a Rental",
    description: "Boat or jet ski rental inquiry",
    href: "#request-form",
    cta: "Inquire Now",
    external: false,
  },
  {
    icon: Calendar,
    title: "Event Info",
    description: "Pier Pressure, Splash Bash & more",
    href: "/events",
    cta: "View Events",
    external: false,
  },
  {
    icon: InstagramIcon,
    title: "Instagram",
    description: siteConfig.instagramHandle,
    href: siteConfig.instagram,
    cta: "Follow Us ↗",
    external: true,
  },
  {
    icon: ShoppingBag,
    title: "Shop Merch",
    description: "Hoodies, tees, hats & more",
    href: merchStoreUrl,
    cta: "Shop Now ↗",
    external: true,
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Page Hero */}
      <section
        className="relative bg-[#07131F] pt-32 pb-20 overflow-hidden"
        aria-label="Contact page hero"
      >
        <div
          className="absolute top-0 left-0 w-[400px] h-[300px] opacity-[0.06] blur-3xl rounded-full"
          style={{ background: "radial-gradient(#2EA7FF, transparent 70%)" }}
          aria-hidden="true"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-6 h-px bg-[#2EA7FF]" aria-hidden="true" />
              <span className="text-[#2EA7FF] text-xs font-black uppercase tracking-widest">
                Contact
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.02] tracking-tight mb-6">
              Let&apos;s Get You
              <br />
              <span className="text-[#2EA7FF]">on the Water.</span>
            </h1>
            <p className="text-[#B7C5D3] text-xl leading-relaxed mb-8">
              Rental inquiry, event question, merchandise, or just want to know
              what&apos;s happening on the Detroit River this summer — reach out
              and we&apos;ll get you sorted. We respond fast.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section
        className="bg-[#0E1D2B] py-16 border-y border-white/10"
        aria-labelledby="contact-methods-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="contact-methods-heading"
            className="sr-only"
          >
            Contact methods
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <a
              href={siteConfig.phoneHref}
              className="group flex items-start gap-4 p-6 bg-[#07131F] rounded-2xl border border-white/10 hover:border-[#2EA7FF]/40 transition-all hover:-translate-y-0.5"
              aria-label={`Call Boat Life Detroit at ${siteConfig.phone}`}
            >
              <div className="w-10 h-10 rounded-xl bg-[#2EA7FF]/10 flex items-center justify-center shrink-0">
                <Phone size={18} className="text-[#2EA7FF]" />
              </div>
              <div>
                <div className="text-xs text-[#7D8B99] uppercase tracking-widest font-bold mb-1">
                  Phone / Text
                </div>
                <div className="text-white font-bold group-hover:text-[#2EA7FF] transition-colors">
                  {siteConfig.phone}
                </div>
                <div className="text-[#7D8B99] text-xs mt-0.5">
                  Call or text anytime
                </div>
              </div>
            </a>

            <a
              href={siteConfig.emailHref}
              className="group flex items-start gap-4 p-6 bg-[#07131F] rounded-2xl border border-white/10 hover:border-[#2EA7FF]/40 transition-all hover:-translate-y-0.5"
              aria-label={`Email Boat Life Detroit at ${siteConfig.email}`}
            >
              <div className="w-10 h-10 rounded-xl bg-[#2EA7FF]/10 flex items-center justify-center shrink-0">
                <Mail size={18} className="text-[#2EA7FF]" />
              </div>
              <div>
                <div className="text-xs text-[#7D8B99] uppercase tracking-widest font-bold mb-1">
                  Email
                </div>
                <div className="text-white font-bold text-sm group-hover:text-[#2EA7FF] transition-colors break-all">
                  {siteConfig.email}
                </div>
                <div className="text-[#7D8B99] text-xs mt-0.5">
                  We respond within 24 hours
                </div>
              </div>
            </a>

            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 p-6 bg-[#07131F] rounded-2xl border border-white/10 hover:border-[#2EA7FF]/40 transition-all hover:-translate-y-0.5"
              aria-label="Follow Boat Life Detroit on Instagram"
            >
              <div className="w-10 h-10 rounded-xl bg-[#2EA7FF]/10 flex items-center justify-center shrink-0">
                <InstagramIcon size={18} className="text-[#2EA7FF]" />
              </div>
              <div>
                <div className="text-xs text-[#7D8B99] uppercase tracking-widest font-bold mb-1">
                  Instagram
                </div>
                <div className="text-white font-bold group-hover:text-[#2EA7FF] transition-colors">
                  {siteConfig.instagramHandle}
                </div>
                <div className="text-[#7D8B99] text-xs mt-0.5">
                  DMs open · active daily ↗
                </div>
              </div>
            </a>
          </div>

          {/* Location */}
          <div className="mt-6 flex items-start gap-4 p-6 bg-[#07131F] rounded-2xl border border-white/10">
            <div className="w-10 h-10 rounded-xl bg-[#2EA7FF]/10 flex items-center justify-center shrink-0">
              <MapPin size={18} className="text-[#2EA7FF]" />
            </div>
            <div>
              <div className="text-xs text-[#7D8B99] uppercase tracking-widest font-bold mb-1">
                Service Area
              </div>
              <div className="text-white font-bold">
                Detroit River · Lake St Clair · Metro Detroit, Michigan
              </div>
              <p className="text-[#7D8B99] text-sm mt-1">
                We operate across Metro Detroit&apos;s most iconic waterways.
                All boating experiences take place on the Detroit River and Lake
                St Clair.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Action Cards */}
      <section
        className="bg-[#07131F] py-16"
        aria-label="Quick actions"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xs font-black uppercase tracking-widest text-[#7D8B99] mb-6">
            What Are You Looking For?
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {quickActions.map((action) => {
              const Icon = action.icon;
              const El = action.external ? "a" : Link;
              const props = action.external
                ? { href: action.href, target: "_blank", rel: "noopener noreferrer" }
                : { href: action.href };
              return (
                <El
                  key={action.title}
                  {...(props as any)}
                  className="group flex flex-col gap-3 p-5 bg-[#0E1D2B] rounded-2xl border border-white/10 hover:border-[#2EA7FF]/30 transition-all hover:-translate-y-0.5"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#2EA7FF]/10 flex items-center justify-center">
                    <Icon size={17} className="text-[#2EA7FF]" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm mb-0.5">
                      {action.title}
                    </div>
                    <div className="text-[#7D8B99] text-xs">{action.description}</div>
                  </div>
                  <div className="inline-flex items-center gap-1 text-[#2EA7FF] text-xs font-bold uppercase tracking-wide mt-auto group-hover:gap-2 transition-all">
                    {action.cta}
                    {!action.external && <ChevronRight size={12} />}
                  </div>
                </El>
              );
            })}
          </div>
        </div>
      </section>

      {/* Request Form */}
      <section
        className="bg-[#0E1D2B] py-20 lg:py-28"
        id="request-form"
        aria-labelledby="request-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-2">
              <SectionHeading
                eyebrow="Request Info"
                title="Tell Us What You Need"
                subtitle="Fill out the form with your details and what you're looking for. Our team will follow up personally — typically within 24 hours."
              />
              <div className="mt-8 space-y-5">
                <div className="p-5 bg-[#07131F] rounded-xl border border-white/10">
                  <p className="text-[#7D8B99] text-xs uppercase tracking-widest font-bold mb-2">
                    What to Include
                  </p>
                  <ul className="space-y-2 text-sm text-[#B7C5D3]">
                    <li className="flex items-start gap-2">
                      <span className="text-[#2EA7FF] mt-0.5">›</span>
                      Your rental or event type
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#2EA7FF] mt-0.5">›</span>
                      Preferred dates
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#2EA7FF] mt-0.5">›</span>
                      Group size estimate
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#2EA7FF] mt-0.5">›</span>
                      Any questions or special requests
                    </li>
                  </ul>
                </div>
                <div className="text-sm text-[#7D8B99]">
                  Prefer to reach out directly?{" "}
                  <a
                    href={siteConfig.phoneHref}
                    className="text-[#2EA7FF] hover:text-[#59D0FF] font-semibold transition-colors"
                  >
                    Call or text {siteConfig.phone}
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
      <section
        className="bg-[#07131F] py-20 lg:py-24"
        aria-labelledby="contact-faq-heading"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <SectionHeading
              eyebrow="FAQ"
              title="Before You Reach Out"
              subtitle="Quick answers to common questions."
              align="center"
            />
          </div>
          <FAQList faqs={contactFaqs} />
        </div>
      </section>

      <CTABand
        title="Michigan's Water Is Out There"
        subtitle="Boat life doesn't wait. Reach out, get on a boat, and make this summer one for the record books."
        primaryLabel="Submit a Request"
        primaryHref="#request-form"
        secondaryLabel="View Events"
        secondaryHref="/events"
        variant="accent"
      />
    </>
  );
}
