import Link from "next/link";
import { siteConfig } from "@/data/site";
import { Phone, Mail, MapPin, ExternalLink } from "lucide-react";
import { InstagramIcon } from "@/components/icons";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#07131F] border-t border-white/10" role="contentinfo">
      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b border-white/10">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#2EA7FF]/20 border border-[#2EA7FF]/30 flex items-center justify-center text-[#2EA7FF] font-black text-sm">
                BLD
              </div>
              <div>
                <div className="text-white font-black text-sm leading-tight tracking-wide uppercase">
                  Boat Life Detroit
                </div>
                <div className="text-[#2EA7FF] font-bold text-xs leading-tight tracking-widest uppercase">
                  Est. {siteConfig.estYear}
                </div>
              </div>
            </div>
            <p className="text-[#7D8B99] text-sm leading-relaxed mb-5">
              Michigan&apos;s boating HUB. Boat rentals, jet ski rentals,
              boating events, and community — all on the Detroit River and Lake
              St Clair.
            </p>
            <div className="flex items-center gap-2">
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-[#B7C5D3] hover:text-white hover:bg-white/10 transition-colors text-sm font-medium"
                aria-label="Follow Boat Life Detroit on Instagram"
              >
                <InstagramIcon size={15} />
                <span>{siteConfig.instagramHandle}</span>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-bold text-xs uppercase tracking-widest mb-5">
              Navigate
            </h3>
            <ul className="space-y-3">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[#7D8B99] hover:text-white text-sm transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-xs uppercase tracking-widest mb-5">
              Services
            </h3>
            <ul className="space-y-3 text-sm text-[#7D8B99]">
              <li>
                <Link
                  href="/rentals"
                  className="hover:text-white transition-colors"
                >
                  Boat Rentals
                </Link>
              </li>
              <li>
                <Link
                  href="/rentals"
                  className="hover:text-white transition-colors"
                >
                  Jet Ski Rentals
                </Link>
              </li>
              <li>
                <Link
                  href="/rentals"
                  className="hover:text-white transition-colors"
                >
                  Event Rentals
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="hover:text-white transition-colors"
                >
                  Boating Events
                </Link>
              </li>
              <li>
                <a
                  href={siteConfig.merchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  Merchandise <ExternalLink size={11} />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-xs uppercase tracking-widest mb-5">
              Contact
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={siteConfig.phoneHref}
                  className="flex items-start gap-3 group"
                  aria-label={`Call ${siteConfig.phone}`}
                >
                  <Phone
                    size={15}
                    className="text-[#2EA7FF] mt-0.5 shrink-0"
                  />
                  <span className="text-[#7D8B99] group-hover:text-white text-sm transition-colors">
                    {siteConfig.phone}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.emailHref}
                  className="flex items-start gap-3 group"
                  aria-label={`Email ${siteConfig.email}`}
                >
                  <Mail size={15} className="text-[#2EA7FF] mt-0.5 shrink-0" />
                  <span className="text-[#7D8B99] group-hover:text-white text-sm transition-colors break-all">
                    {siteConfig.email}
                  </span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <MapPin
                    size={15}
                    className="text-[#2EA7FF] mt-0.5 shrink-0"
                  />
                  <div className="text-[#7D8B99] text-sm space-y-0.5">
                    <div>Detroit River</div>
                    <div>Lake St Clair</div>
                    <div>Metro Detroit, MI</div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-[#7D8B99] text-sm text-center sm:text-left">
            © {year} Boat Life Detroit LLC. All rights reserved.{" "}
            <span className="text-[#2EA7FF]/60">
              Michigan&apos;s Boating Hub — Detroit River · Lake St Clair ·
              Metro Detroit
            </span>
          </p>
          <div className="flex items-center gap-4 text-xs text-[#7D8B99]">
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Instagram
            </a>
            <span>·</span>
            <a
              href={siteConfig.merchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Shop Merch
            </a>
            <span>·</span>
            <Link
              href="/contact"
              className="hover:text-white transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
