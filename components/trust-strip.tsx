"use client";

import { motion } from "framer-motion";
import { Anchor, Waves, Calendar, ShoppingBag, MapPin, Users } from "lucide-react";

const trust = [
  {
    icon: Anchor,
    label: "Boat Rentals",
    sub: "Detroit River & Lake St Clair",
  },
  {
    icon: Waves,
    label: "Jet Ski Rentals",
    sub: "Metro Detroit waterways",
  },
  {
    icon: Calendar,
    label: "Boating Events",
    sub: "Pier Pressure & Splash Bash",
  },
  {
    icon: Users,
    label: "Community Hub",
    sub: "Michigan's boating scene",
  },
  {
    icon: MapPin,
    label: "Metro Detroit",
    sub: "Local, active, established",
  },
  {
    icon: ShoppingBag,
    label: "Branded Merch",
    sub: "Gear for life on the water",
  },
];

export default function TrustStrip() {
  return (
    <section
      className="bg-[#0E1D2B] border-y border-white/10"
      aria-label="Our services overview"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px bg-white/5 rounded-2xl overflow-hidden">
          {trust.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="flex flex-col items-center text-center gap-2 px-4 py-6 bg-[#0E1D2B] hover:bg-[#13283B] transition-colors duration-200"
              >
                <div className="w-9 h-9 rounded-lg bg-[#2EA7FF]/10 flex items-center justify-center">
                  <Icon size={18} className="text-[#2EA7FF]" />
                </div>
                <div>
                  <div className="text-white font-bold text-sm">{item.label}</div>
                  <div className="text-[#7D8B99] text-xs leading-snug mt-0.5">
                    {item.sub}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
