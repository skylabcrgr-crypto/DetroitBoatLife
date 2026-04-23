"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, ExternalLink } from "lucide-react";
import { siteConfig } from "@/data/site";

interface CTABandProps {
  title: string;
  subtitle?: string;
  primaryLabel: string;
  primaryHref: string;
  primaryExternal?: boolean;
  secondaryLabel?: string;
  secondaryHref?: string;
  secondaryExternal?: boolean;
  tertiaryLabel?: string;
  tertiaryHref?: string;
  tertiaryExternal?: boolean;
  variant?: "default" | "dark" | "accent";
}

export default function CTABand({
  title,
  subtitle,
  primaryLabel,
  primaryHref,
  primaryExternal = false,
  secondaryLabel,
  secondaryHref,
  secondaryExternal = false,
  tertiaryLabel,
  tertiaryHref,
  tertiaryExternal = false,
  variant = "default",
}: CTABandProps) {
  const bg =
    variant === "dark"
      ? "bg-[#07131F]"
      : variant === "accent"
      ? "bg-gradient-to-br from-[#0E1D2B] via-[#13283B] to-[#0E1D2B]"
      : "bg-[#0E1D2B]";

  const PrimaryEl = primaryExternal ? "a" : Link;
  const SecondaryEl = secondaryExternal ? "a" : Link;
  const TertiaryEl = tertiaryExternal ? "a" : Link;

  const primaryProps = primaryExternal
    ? { href: primaryHref, target: "_blank", rel: "noopener noreferrer" }
    : { href: primaryHref };

  const secondaryProps =
    secondaryHref && secondaryExternal
      ? { href: secondaryHref, target: "_blank", rel: "noopener noreferrer" }
      : { href: secondaryHref || "#" };

  const tertiaryProps =
    tertiaryHref && tertiaryExternal
      ? { href: tertiaryHref, target: "_blank", rel: "noopener noreferrer" }
      : { href: tertiaryHref || "#" };

  return (
    <section className={`${bg} border-t border-white/10`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.05] tracking-tight mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-[#B7C5D3] text-lg leading-relaxed mb-10">
              {subtitle}
            </p>
          )}

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <PrimaryEl
              {...(primaryProps as any)}
              className="flex items-center gap-2 px-8 py-4 bg-[#2EA7FF] hover:bg-[#59D0FF] text-[#07131F] font-black text-sm uppercase tracking-wide rounded-xl transition-all duration-200 shadow-[0_0_30px_rgba(46,167,255,0.35)] hover:shadow-[0_0_40px_rgba(89,208,255,0.45)] w-full sm:w-auto justify-center"
            >
              {primaryLabel}
              <ChevronRight size={16} />
            </PrimaryEl>

            {secondaryLabel && secondaryHref && (
              <SecondaryEl
                {...(secondaryProps as any)}
                className="flex items-center gap-2 px-8 py-4 border border-white/20 hover:border-white/40 text-white hover:text-white font-bold text-sm uppercase tracking-wide rounded-xl transition-all duration-200 hover:bg-white/5 w-full sm:w-auto justify-center"
              >
                {secondaryLabel}
                {secondaryExternal && <ExternalLink size={14} />}
              </SecondaryEl>
            )}

            {tertiaryLabel && tertiaryHref && (
              <TertiaryEl
                {...(tertiaryProps as any)}
                className="flex items-center gap-2 px-8 py-4 border border-[#2EA7FF]/30 hover:border-[#2EA7FF]/60 text-[#2EA7FF] hover:text-[#59D0FF] font-bold text-sm uppercase tracking-wide rounded-xl transition-all duration-200 hover:bg-[#2EA7FF]/5 w-full sm:w-auto justify-center"
              >
                {tertiaryLabel}
                {tertiaryExternal && <ExternalLink size={14} />}
              </TertiaryEl>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
