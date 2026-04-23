"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BoatEvent } from "@/data/events";
import { Calendar, MapPin, ChevronRight, Zap, Users, RotateCcw } from "lucide-react";

interface EventCardProps {
  event: BoatEvent;
  index?: number;
  size?: "default" | "large";
}

const statusConfig = {
  featured: { label: "Featured", color: "#2EA7FF", bg: "#2EA7FF20" },
  upcoming: { label: "Upcoming", color: "#59D0FF", bg: "#59D0FF20" },
  recurring: { label: "Recurring", color: "#7D8B99", bg: "#7D8B9920" },
  past: { label: "Past", color: "#4B5563", bg: "#4B556320" },
};

const categoryIcons = {
  party: Zap,
  community: Users,
  competition: Zap,
  social: Users,
};

export default function EventCard({ event, index = 0, size = "default" }: EventCardProps) {
  const status = statusConfig[event.status];
  const CategoryIcon = categoryIcons[event.category];

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group relative bg-[#0E1D2B] rounded-2xl border border-white/10 overflow-hidden hover:border-[#2EA7FF]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)] ${
        size === "large" ? "flex flex-col lg:flex-row" : "flex flex-col"
      }`}
    >
      {/* Image */}
      <div
        className={`relative bg-[#13283B] overflow-hidden ${
          size === "large"
            ? "aspect-[16/9] lg:aspect-auto lg:w-2/5 lg:shrink-0"
            : "aspect-[16/9]"
        }`}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="opacity-20">
            <CategoryIcon size={48} className="text-[#2EA7FF]" />
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E1D2B]/80 via-transparent to-transparent" />

        {/* Status Badge */}
        <div className="absolute top-3 left-3">
          <span
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full"
            style={{ color: status.color, backgroundColor: status.bg, border: `1px solid ${status.color}40` }}
          >
            {event.status === "recurring" && <RotateCcw size={10} />}
            {status.label}
          </span>
        </div>

        {/* Image placeholder label */}
        <div className="absolute bottom-3 right-3">
          <span className="text-[10px] text-white/20 bg-black/30 px-2 py-0.5 rounded-full">
            {event.image.split("/").pop()?.replace(".jpg", "")}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <div className="flex-1">
          <h3
            className={`font-black text-white leading-tight mb-1 ${
              size === "large" ? "text-2xl lg:text-3xl" : "text-xl"
            }`}
          >
            {event.name}
          </h3>
          <p className="text-[#2EA7FF] font-semibold text-sm mb-4">
            {event.tagline}
          </p>
          <p className="text-[#B7C5D3] text-sm leading-relaxed mb-5">
            {event.description}
          </p>
        </div>

        {/* Meta */}
        <div className="space-y-2 mb-5">
          <div className="flex items-center gap-2 text-sm text-[#7D8B99]">
            <Calendar size={14} className="text-[#2EA7FF] shrink-0" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-[#7D8B99]">
            <MapPin size={14} className="text-[#2EA7FF] shrink-0" />
            <span>
              {event.location} · {event.waterway}
            </span>
          </div>
        </div>

        <Link
          href="/contact"
          className="flex items-center justify-between px-4 py-3 bg-[#2EA7FF]/10 hover:bg-[#2EA7FF] border border-[#2EA7FF]/30 hover:border-[#2EA7FF] rounded-xl text-[#2EA7FF] hover:text-[#07131F] font-bold text-sm uppercase tracking-wide transition-all duration-200 group/btn"
        >
          <span>{event.ctaLabel}</span>
          <ChevronRight size={16} />
        </Link>
      </div>
    </motion.article>
  );
}
