"use client";

import { motion } from "framer-motion";

interface GalleryItem {
  src: string;
  alt: string;
  span?: "normal" | "wide" | "tall";
}

interface GalleryGridProps {
  items: GalleryItem[];
}

export default function GalleryGrid({ items }: GalleryGridProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 auto-rows-[200px]">
      {items.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.4, delay: i * 0.06 }}
          className={`relative bg-[#13283B] rounded-xl overflow-hidden group cursor-default border border-white/5 hover:border-[#2EA7FF]/20 transition-colors duration-300 ${
            item.span === "wide" ? "col-span-2" : ""
          } ${item.span === "tall" ? "row-span-2" : ""}`}
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center opacity-20 hover:opacity-40 transition-opacity">
            <div className="w-12 h-12 rounded-full bg-[#2EA7FF]/20 mb-2" />
            <div className="w-16 h-1 bg-[#2EA7FF]/30 rounded" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#07131F]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute bottom-0 left-0 right-0 p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <p className="text-white text-xs font-medium leading-tight">
              {item.alt}
            </p>
          </div>
          {/* Filename indicator for placeholder */}
          <div className="absolute top-2 right-2">
            <span className="text-[9px] text-white/20 bg-black/30 px-1.5 py-0.5 rounded-full">
              {item.src.split("/").pop()?.replace(".jpg", "")}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
