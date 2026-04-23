"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Rental } from "@/data/rentals";
import { ChevronRight, Anchor, Waves, Star } from "lucide-react";

interface RentalCardProps {
  rental: Rental;
  index?: number;
}

const categoryIcons = {
  boat: Anchor,
  jetski: Waves,
  event: Star,
};

const categoryColors = {
  boat: "#2EA7FF",
  jetski: "#59D0FF",
  event: "#7D8B99",
};

export default function RentalCard({ rental, index = 0 }: RentalCardProps) {
  const Icon = categoryIcons[rental.category];
  const color = categoryColors[rental.category];

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-[#0E1D2B] rounded-2xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
    >
      {/* Image Block */}
      <div className="relative aspect-[16/9] bg-[#13283B] overflow-hidden">
        <div
          className="absolute inset-0 flex items-center justify-center"
          aria-hidden="true"
        >
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center opacity-20"
            style={{ backgroundColor: color }}
          >
            <Icon size={36} style={{ color }} />
          </div>
        </div>
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(ellipse at center, ${color}15 0%, transparent 70%)`,
          }}
        />
        {/* Image placeholder label */}
        <div className="absolute bottom-3 left-3">
          <span className="text-[10px] text-white/30 bg-black/30 px-2 py-0.5 rounded-full">
            {rental.image.split("/").pop()?.replace(".jpg", "")}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <div
            className="w-7 h-7 rounded-lg flex items-center justify-center"
            style={{ backgroundColor: `${color}20` }}
          >
            <Icon size={14} style={{ color }} />
          </div>
          <span
            className="text-xs font-bold uppercase tracking-widest"
            style={{ color }}
          >
            {rental.category === "jetski"
              ? "Jet Ski"
              : rental.category === "event"
              ? "Event"
              : "Boat"}{" "}
            Rental
          </span>
        </div>

        <h3 className="text-xl font-black text-white mb-1 leading-tight">
          {rental.title}
        </h3>
        <p className="text-[#2EA7FF] text-sm font-semibold mb-3">
          {rental.tagline}
        </p>
        <p className="text-[#B7C5D3] text-sm leading-relaxed mb-5 line-clamp-3">
          {rental.description}
        </p>

        {/* Ideal For */}
        <div className="mb-5">
          <p className="text-[10px] text-[#7D8B99] uppercase tracking-widest font-bold mb-2">
            Ideal For
          </p>
          <div className="flex flex-wrap gap-1.5">
            {rental.idealFor.slice(0, 3).map((item) => (
              <span
                key={item}
                className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-[#B7C5D3] border border-white/10"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <Link
          href="/contact"
          className="flex items-center justify-between w-full px-4 py-3 rounded-xl font-bold text-sm uppercase tracking-wide transition-all duration-200 group/btn"
          style={{
            backgroundColor: `${color}15`,
            color,
            border: `1px solid ${color}30`,
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.backgroundColor = color;
            (e.currentTarget as HTMLElement).style.color = "#07131F";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.backgroundColor = `${color}15`;
            (e.currentTarget as HTMLElement).style.color = color;
          }}
        >
          <span>{rental.ctaLabel}</span>
          <ChevronRight size={16} />
        </Link>
      </div>
    </motion.div>
  );
}
