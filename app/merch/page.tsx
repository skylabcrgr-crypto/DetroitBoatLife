import type { Metadata } from "next";
import { merchItems, featuredMerch, merchCategories, merchStoreUrl } from "@/data/merch";
import MerchCard from "@/components/merch-card";
import CTABand from "@/components/cta-band";
import SectionHeading from "@/components/section-heading";
import { ExternalLink, ShoppingBag } from "lucide-react";

export const metadata: Metadata = {
  title: "Boat Life Detroit Merchandise — Hoodies, Tees, Hats & More",
  description:
    "Shop Boat Life Detroit branded merch — hoodies, tees, hats, drinkware, and lifestyle gear. Rep Michigan's boating culture on and off the water.",
};

export default function MerchPage() {
  return (
    <>
      {/* Page Hero */}
      <section
        className="relative bg-[#07131F] pt-32 pb-20 overflow-hidden"
        aria-label="Merch page hero"
      >
        <div
          className="absolute bottom-0 left-0 w-[500px] h-[400px] opacity-[0.06] blur-3xl rounded-full"
          style={{ background: "radial-gradient(#2EA7FF, transparent 70%)" }}
          aria-hidden="true"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-6 h-px bg-[#2EA7FF]" aria-hidden="true" />
              <span className="text-[#2EA7FF] text-xs font-black uppercase tracking-widest">
                Merchandise
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.02] tracking-tight mb-6">
              Rep the
              <br />
              <span className="text-[#2EA7FF]">Boat Life Brand.</span>
            </h1>
            <p className="text-[#B7C5D3] text-xl leading-relaxed mb-8">
              Hoodies, tees, hats, drinkware, and gear built for the Michigan
              water lifestyle. Limited drops, bold designs, and local pride
              baked into every piece. The full collection lives in our online
              store.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={merchStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#2EA7FF] hover:bg-[#59D0FF] text-[#07131F] font-black text-sm uppercase tracking-wide rounded-xl transition-all shadow-[0_0_24px_rgba(46,167,255,0.3)]"
                aria-label="Shop all Boat Life Detroit merchandise"
              >
                <ShoppingBag size={16} />
                Shop All Merch ↗
              </a>
            </div>
            <p className="mt-4 text-xs text-[#7D8B99]">
              Full catalog available at our external store.{" "}
              <a
                href={merchStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2EA7FF] hover:underline"
              >
                Visit store →
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section
        className="bg-[#0E1D2B] py-16"
        aria-labelledby="categories-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="categories-heading"
            className="text-xs font-black uppercase tracking-widest text-[#7D8B99] mb-6"
          >
            Browse by Category
          </h2>
          <div className="flex flex-wrap gap-3">
            {merchCategories.map((cat) => (
              <a
                key={cat.id}
                href={merchStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#07131F] border border-white/10 hover:border-[#2EA7FF]/40 hover:bg-[#2EA7FF]/5 rounded-xl text-sm font-semibold text-[#B7C5D3] hover:text-white transition-all"
                aria-label={`Shop ${cat.label} at the Boat Life Detroit store`}
              >
                <span>{cat.icon}</span>
                <span>{cat.label}</span>
                <ExternalLink size={11} className="text-[#7D8B99]" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section
        className="bg-[#07131F] py-20 lg:py-28"
        aria-labelledby="featured-merch-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
            <SectionHeading
              eyebrow="Featured Pieces"
              title="The Collection"
              subtitle="Standout pieces from the Boat Life Detroit lineup. Full catalog in our store."
            />
            <a
              href={merchStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-[#2EA7FF] hover:bg-[#59D0FF] rounded-xl text-sm font-black text-[#07131F] uppercase tracking-wide transition-all shadow-[0_0_20px_rgba(46,167,255,0.3)]"
              aria-label="Shop all Boat Life Detroit merchandise"
            >
              Shop Full Store ↗
            </a>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {featuredMerch.map((item, i) => (
              <MerchCard
                key={item.id}
                item={item}
                index={i}
                storeUrl={merchStoreUrl}
              />
            ))}
          </div>
        </div>
      </section>

      {/* All Items */}
      <section
        className="bg-[#0E1D2B] py-20 lg:py-28"
        aria-labelledby="all-merch-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Full Lineup"
            title="More from the BLD Store"
            subtitle="Every piece in the current catalog. Head to our store to see the full collection, sizing, and availability."
          />
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {merchItems.map((item, i) => (
              <MerchCard
                key={item.id}
                item={item}
                index={i}
                storeUrl={merchStoreUrl}
              />
            ))}
          </div>
          <div className="text-center mt-14">
            <a
              href={merchStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-10 py-5 bg-[#2EA7FF] hover:bg-[#59D0FF] text-[#07131F] font-black text-base uppercase tracking-wide rounded-xl transition-all shadow-[0_0_30px_rgba(46,167,255,0.35)]"
              aria-label="Visit the Boat Life Detroit merchandise store"
            >
              <ShoppingBag size={20} />
              Visit the Full Store ↗
            </a>
            <p className="mt-4 text-sm text-[#7D8B99]">
              Complete catalog, sizing, and secure checkout at{" "}
              <span className="text-[#B7C5D3]">moq1.com</span>
            </p>
          </div>
        </div>
      </section>

      {/* Why Our Merch */}
      <section
        className="bg-[#07131F] py-16 border-y border-white/10"
        aria-label="About the merch"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Born in Detroit",
                description:
                  "Every design is rooted in Metro Detroit boating culture. This isn't generic lifestyle merch — it's local, specific, and authentic.",
              },
              {
                title: "Wear It Year-Round",
                description:
                  "From summer boat days to Michigan winters, our range covers hoodies, tees, outerwear, hats, and more for every season.",
              },
              {
                title: "Support the Community",
                description:
                  "When you buy Boat Life Detroit merch, you're supporting a local brand that's actively building Michigan's boating community.",
              },
            ].map((feature) => (
              <div key={feature.title} className="text-center">
                <h3 className="text-white font-bold text-lg mb-2">
                  {feature.title}
                </h3>
                <p className="text-[#7D8B99] text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title="The Full Store Is Waiting"
        subtitle="Browse the complete Boat Life Detroit collection and find your new go-to gear."
        primaryLabel="Shop All Merch"
        primaryHref={merchStoreUrl}
        primaryExternal
        secondaryLabel="View Events"
        secondaryHref="/events"
        variant="dark"
      />
    </>
  );
}
