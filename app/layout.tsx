import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import { siteConfig } from "@/data/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} — Michigan's Boating Hub`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "boat rentals Detroit",
    "jet ski rentals Detroit",
    "boating events Detroit",
    "Detroit River boat events",
    "Lake St Clair boating events",
    "Michigan boating community",
    "boat life Detroit",
    "Pier Pressure Detroit",
    "Splash Bash Detroit",
    "Metro Detroit boating",
  ],
  authors: [{ name: "Boat Life Detroit" }],
  creator: "Boat Life Detroit",
  publisher: "Boat Life Detroit LLC",
  metadataBase: new URL("https://boatlifedetroit.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://boatlifedetroit.com",
    siteName: siteConfig.name,
    title: `${siteConfig.name} — Michigan's Boating Hub`,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — Michigan's Boating Hub`,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Boat Life Detroit",
  description: siteConfig.description,
  url: "https://boatlifedetroit.com",
  telephone: siteConfig.phone,
  email: siteConfig.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Detroit",
    addressRegion: "MI",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 42.3314,
    longitude: -83.0458,
  },
  areaServed: [
    "Detroit River",
    "Lake St Clair",
    "Metro Detroit",
    "Michigan",
  ],
  sameAs: [siteConfig.instagram],
  foundingDate: String(siteConfig.estYear),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-[#07131F] text-white">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#2EA7FF] focus:text-[#07131F] focus:rounded-lg focus:font-bold"
        >
          Skip to main content
        </a>
        <SiteHeader />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
