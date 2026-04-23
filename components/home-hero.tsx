"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/site";
import { ChevronRight, MapPin, ExternalLink } from "lucide-react";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function HomeHero() {
  return (
    <section
      className="relative min-h-[100svh] flex flex-col justify-end overflow-hidden"
      aria-label="Hero — Boat Life Detroit"
    >
      {/* Dark layered background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#07131F] via-[#0a1a2a] to-[#07131F]" />

      {/* Decorative water line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[2px] opacity-30"
        style={{
          background:
            "linear-gradient(90deg, transparent, #2EA7FF, #59D0FF, #2EA7FF, transparent)",
        }}
        aria-hidden="true"
      />

      {/* Radial glow behind content */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] opacity-[0.07] rounded-full blur-3xl"
        style={{ background: "radial-gradient(#2EA7FF, transparent 70%)" }}
        aria-hidden="true"
      />

      {/* Large background hero placeholder */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
        <div className="w-full h-full bg-[#0a1520] relative overflow-hidden">
          {/* Simulated waterscape layers */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#07131F] via-[#0c1e30]/60 to-[#07131F]" />
          <div
            className="absolute bottom-0 left-0 right-0 h-1/3 opacity-10"
            style={{
              background:
                "repeating-linear-gradient(transparent, transparent 20px, rgba(46,167,255,0.2) 20px, rgba(46,167,255,0.2) 21px)",
            }}
          />
          {/* Fake horizon line */}
          <div
            className="absolute top-[40%] left-0 right-0 h-px opacity-15"
            style={{ background: "linear-gradient(90deg, transparent, #2EA7FF 40%, #59D0FF 60%, transparent)" }}
          />
          <div className="absolute top-4 right-4 text-[10px] text-white/10 font-mono">
            detroit-river-boat-sunset.jpg
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-32 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="max-w-4xl"
        >
          {/* Eyebrow */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 mb-5"
          >
            <span className="w-6 h-px bg-[#2EA7FF]" aria-hidden="true" />
            <span className="text-[#2EA7FF] text-xs font-black uppercase tracking-widest">
              Est. {siteConfig.estYear} · Metro Detroit
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-[1] tracking-tight mb-5"
          >
            Michigan&apos;s
            <br />
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #2EA7FF, #59D0FF, #2EA7FF)",
              }}
            >
              Boating Hub.
            </span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            variants={itemVariants}
            className="text-[#B7C5D3] text-lg sm:text-xl lg:text-2xl leading-relaxed max-w-2xl mb-8 font-light"
          >
            Boat rentals, jet ski rentals, and the Metro Detroit boating
            community — all in one place. From the Detroit River to Lake St
            Clair, this is where summer lives.
          </motion.p>

          {/* Geography tags */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-2 mb-10"
          >
            {siteConfig.geography.map((geo) => (
              <span
                key={geo}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#7D8B99] bg-white/5 border border-white/10 px-3 py-1.5 rounded-full"
              >
                <MapPin size={11} className="text-[#2EA7FF]" />
                {geo}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-4"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#2EA7FF] hover:bg-[#59D0FF] text-[#07131F] font-black text-sm uppercase tracking-wide rounded-xl transition-all duration-200 shadow-[0_0_30px_rgba(46,167,255,0.40)] hover:shadow-[0_0_50px_rgba(89,208,255,0.50)]"
            >
              Request Info
              <ChevronRight size={16} />
            </Link>
            <Link
              href="/events"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 hover:border-white/40 text-white hover:text-white font-bold text-sm uppercase tracking-wide rounded-xl transition-all duration-200 hover:bg-white/5"
            >
              Explore Events
            </Link>
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#7D8B99] hover:text-[#B7C5D3] text-sm font-medium transition-colors"
              aria-label="Follow Boat Life Detroit on Instagram"
            >
              <span>{siteConfig.instagramHandle}</span>
              <ExternalLink size={13} />
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 right-6 sm:right-10 flex flex-col items-center gap-2"
          aria-hidden="true"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-10 bg-gradient-to-b from-transparent via-[#2EA7FF]/60 to-transparent"
          />
          <span className="text-[10px] text-[#7D8B99] uppercase tracking-widest font-bold rotate-90 origin-center translate-x-3">
            Scroll
          </span>
        </motion.div>
      </div>
    </section>
  );
}
