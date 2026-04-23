"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/data/site";
import { Menu, X, ChevronRight } from "lucide-react";

export default function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#07131F]/95 backdrop-blur-md border-b border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.4)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 shrink-0"
              aria-label="Boat Life Detroit — Home"
            >
              <div className="relative w-10 h-10 lg:w-12 lg:h-12">
                <div className="w-full h-full rounded-full bg-[#2EA7FF]/20 border border-[#2EA7FF]/30 flex items-center justify-center text-[#2EA7FF] font-black text-sm lg:text-base">
                  BLD
                </div>
              </div>
              <div className="hidden sm:block">
                <div className="text-white font-black text-sm lg:text-base leading-tight tracking-wide uppercase">
                  Boat Life
                </div>
                <div className="text-[#2EA7FF] font-bold text-xs lg:text-sm leading-tight tracking-widest uppercase">
                  Detroit
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav
              className="hidden lg:flex items-center gap-1"
              aria-label="Main navigation"
            >
              {siteConfig.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-4 py-2 text-[#B7C5D3] hover:text-white text-sm font-medium tracking-wide transition-colors duration-200 rounded-lg hover:bg-white/5"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/events"
                className="text-sm font-semibold text-[#2EA7FF] hover:text-[#59D0FF] transition-colors duration-200"
              >
                View Events
              </Link>
              <Link
                href="/contact"
                className="px-5 py-2.5 bg-[#2EA7FF] hover:bg-[#59D0FF] text-[#07131F] text-sm font-black rounded-lg transition-all duration-200 tracking-wide uppercase shadow-[0_0_20px_rgba(46,167,255,0.3)] hover:shadow-[0_0_30px_rgba(89,208,255,0.4)]"
              >
                Request Info
              </Link>
            </div>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg text-white hover:bg-white/10 transition-colors"
              aria-label="Open navigation menu"
              aria-expanded={mobileOpen}
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed right-0 top-0 bottom-0 z-50 w-[min(320px,90vw)] bg-[#0E1D2B] border-l border-white/10 flex flex-col"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
            >
              <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
                <div>
                  <div className="text-white font-black text-sm leading-tight tracking-wide uppercase">
                    Boat Life Detroit
                  </div>
                  <div className="text-[#2EA7FF] font-bold text-xs leading-tight tracking-widest uppercase">
                    Michigan&apos;s Boating Hub
                  </div>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center w-9 h-9 rounded-lg text-[#B7C5D3] hover:text-white hover:bg-white/10 transition-colors"
                  aria-label="Close navigation menu"
                >
                  <X size={20} />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto py-4 px-4" aria-label="Mobile navigation">
                {siteConfig.nav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-between px-4 py-4 rounded-xl text-[#B7C5D3] hover:text-white hover:bg-white/5 font-medium text-base transition-colors"
                  >
                    {item.label}
                    <ChevronRight size={16} className="text-[#7D8B99]" />
                  </Link>
                ))}
              </nav>

              <div className="px-4 pb-6 pt-2 space-y-3 border-t border-white/10">
                <Link
                  href="/events"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center w-full px-5 py-3.5 rounded-xl border border-[#2EA7FF]/40 text-[#2EA7FF] font-bold text-sm uppercase tracking-wide hover:bg-[#2EA7FF]/10 transition-colors"
                >
                  View Events
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center w-full px-5 py-3.5 bg-[#2EA7FF] hover:bg-[#59D0FF] text-[#07131F] font-black text-sm uppercase tracking-wide rounded-xl transition-colors shadow-[0_0_20px_rgba(46,167,255,0.3)]"
                >
                  Request Info
                </Link>
                <a
                  href={siteConfig.merchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full px-5 py-3.5 rounded-xl border border-white/10 text-[#B7C5D3] font-semibold text-sm hover:bg-white/5 transition-colors"
                >
                  Shop Merch ↗
                </a>
              </div>

              <div className="px-6 pb-6 text-center space-y-1">
                <a
                  href={siteConfig.phoneHref}
                  className="block text-sm text-[#7D8B99] hover:text-white transition-colors"
                >
                  {siteConfig.phone}
                </a>
                <a
                  href={siteConfig.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-[#2EA7FF] hover:text-[#59D0FF] transition-colors"
                >
                  {siteConfig.instagramHandle}
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
