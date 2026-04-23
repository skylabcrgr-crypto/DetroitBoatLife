"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { MerchItem } from "@/data/merch";

interface MerchCardProps {
  item: MerchItem;
  index?: number;
  storeUrl: string;
}

export default function MerchCard({ item, index = 0, storeUrl }: MerchCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group bg-[#0E1D2B] rounded-2xl border border-white/10 overflow-hidden hover:border-[#2EA7FF]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,0,0,0.4)]"
    >
      {/* Image */}
      <div className="relative aspect-square bg-[#13283B] overflow-hidden">
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 opacity-30">
          <div className="w-16 h-16 rounded-full bg-[#2EA7FF]/20 flex items-center justify-center">
            <span className="text-2xl">👕</span>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E1D2B]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-[#2EA7FF]/20 text-[#2EA7FF] border border-[#2EA7FF]/20">
            {item.category}
          </span>
        </div>

        {/* Image placeholder label */}
        <div className="absolute bottom-3 right-3">
          <span className="text-[10px] text-white/20 bg-black/30 px-2 py-0.5 rounded-full">
            {item.image.split("/").pop()?.replace(".jpg", "")}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-white font-bold text-base mb-1.5 leading-tight">
          {item.name}
        </h3>
        <p className="text-[#7D8B99] text-sm leading-relaxed mb-4 line-clamp-2">
          {item.description}
        </p>
        <a
          href={item.storeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between w-full px-4 py-3 bg-white/5 hover:bg-[#2EA7FF] border border-white/10 hover:border-[#2EA7FF] rounded-xl text-[#B7C5D3] hover:text-[#07131F] font-bold text-xs uppercase tracking-wide transition-all duration-200"
          aria-label={`Shop ${item.name} at the Boat Life Detroit store`}
        >
          <span>Shop Now</span>
          <ExternalLink size={14} />
        </a>
      </div>
    </motion.div>
  );
}
