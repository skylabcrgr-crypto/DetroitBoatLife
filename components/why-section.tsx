"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/site";
import { Anchor, Waves, Calendar, ShoppingBag, Users, Star } from "lucide-react";

const pillars = [
  {
    icon: Anchor,
    title: "Boat & Jet Ski Rentals",
    description:
      "Get on the water without owning a boat. Our rentals cover everything from solo jet ski runs to full-crew cruises on the Detroit River and Lake St Clair.",
  },
  {
    icon: Calendar,
    title: "The Hub for Boating Events",
    description:
      "Pier Pressure. Splash Bash. Community cruises. If it's happening on the water in Metro Detroit, you'll find it here first. We host, promote, and coordinate the best summer water events Michigan has to offer.",
  },
  {
    icon: Users,
    title: "Detroit Boating Community",
    description:
      "We're not just a rental company. We're a community of boaters, riders, and waterfront enthusiasts who love what Metro Detroit has to offer on the water.",
  },
  {
    icon: ShoppingBag,
    title: "Boat Life Merch",
    description:
      "From hoodies to hats, our branded gear is made for people who live the boat life. Rep the culture on and off the water.",
  },
  {
    icon: Star,
    title: "Trusted Since 2016",
    description:
      "Built local. Stayed local. Nearly a decade of connecting Metro Detroit to unforgettable experiences on the water. Boat Life Detroit is the real deal.",
  },
  {
    icon: Waves,
    title: "Detroit River & Lake St Clair",
    description:
      "We operate where the water is most iconic — the Detroit River and Lake St Clair. Two of Michigan's most dynamic waterways, right in your backyard.",
  },
];

export default function WhySection() {
  return (
    <section
      className="bg-[#07131F] py-20 lg:py-28 relative overflow-hidden"
      aria-labelledby="why-heading"
    >
      {/* Background shine */}
      <div
        className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 opacity-[0.04] rounded-full blur-3xl"
        style={{ background: "radial-gradient(#2EA7FF, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Heading */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-6 h-px bg-[#2EA7FF]" aria-hidden="true" />
              <span className="text-[#2EA7FF] text-xs font-black uppercase tracking-widest">
                Why Boat Life Detroit
              </span>
            </div>
            <h2
              id="why-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.05] tracking-tight mb-6"
            >
              More Than a
              <br />
              Rental Company.
              <br />
              <span className="text-[#2EA7FF]">A Movement.</span>
            </h2>
            <p className="text-[#B7C5D3] text-lg leading-relaxed mb-8">
              Boat Life Detroit is where Metro Detroit gets on the water. We
              connect boaters, host events, provide rentals, and build a
              community that loves Michigan summers as much as you do. This is
              the boating hub — and it&apos;s right here.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/about"
                className="px-6 py-3 border border-white/20 hover:border-white/40 rounded-xl text-sm font-bold text-[#B7C5D3] hover:text-white uppercase tracking-wide transition-all hover:bg-white/5"
              >
                Our Story
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 bg-[#2EA7FF]/10 hover:bg-[#2EA7FF] border border-[#2EA7FF]/30 hover:border-[#2EA7FF] rounded-xl text-sm font-bold text-[#2EA7FF] hover:text-[#07131F] uppercase tracking-wide transition-all"
              >
                Get Involved
              </Link>
            </div>
          </motion.div>

          {/* Right: Pillar cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="bg-[#0E1D2B] rounded-xl border border-white/8 p-5 hover:border-[#2EA7FF]/20 transition-colors duration-300"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#2EA7FF]/10 flex items-center justify-center mb-3">
                    <Icon size={16} className="text-[#2EA7FF]" />
                  </div>
                  <h3 className="text-white font-bold text-sm mb-1.5">
                    {pillar.title}
                  </h3>
                  <p className="text-[#7D8B99] text-xs leading-relaxed">
                    {pillar.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
