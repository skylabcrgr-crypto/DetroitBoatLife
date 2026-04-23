// ============================================================
// MERCH DATA — EDIT TO UPDATE PRODUCT CATEGORIES & ITEMS
// ============================================================

export type MerchCategory =
  | "tees"
  | "hoodies"
  | "hats"
  | "drinkware"
  | "outerwear"
  | "accessories";

export interface MerchItem {
  id: string;
  name: string;
  category: MerchCategory;
  description: string;
  image: string;
  storeUrl: string; // Always points to external store
  featured: boolean;
}

export interface MerchCategoryInfo {
  id: MerchCategory;
  label: string;
  description: string;
  icon: string;
}

export const merchStoreUrl = "https://www.moq1.com/team84/boatlife";

export const merchCategories: MerchCategoryInfo[] = [
  {
    id: "hoodies",
    label: "Hoodies",
    description: "Premium heavyweight hoodies with the Boat Life Detroit mark.",
    icon: "🧥",
  },
  {
    id: "tees",
    label: "Tees",
    description: "Classic and premium graphic tees made for life on the water.",
    icon: "👕",
  },
  {
    id: "hats",
    label: "Hats",
    description: "Snapbacks, dad hats, and fitted caps — rocking the BLD brand.",
    icon: "🧢",
  },
  {
    id: "drinkware",
    label: "Drinkware",
    description: "Tumblers, bottles, and cups for every trip on the water.",
    icon: "🥤",
  },
  {
    id: "outerwear",
    label: "Outerwear",
    description: "Jackets and layering pieces built for Michigan seasons.",
    icon: "🧣",
  },
  {
    id: "accessories",
    label: "Accessories",
    description: "Bags, lanyards, and branded gear to complete the look.",
    icon: "🎽",
  },
];

export const merchItems: MerchItem[] = [
  {
    id: "bld-signature-hoodie",
    name: "BLD Signature Hoodie",
    category: "hoodies",
    description:
      "The signature Boat Life Detroit hoodie. Heavy cotton blend, graphic logo, made for Michigan weather on and off the water.",
    image: "/images/merch/boat-life-hoodie-01.jpg",
    storeUrl: "https://www.moq1.com/team84/boatlife",
    featured: true,
  },
  {
    id: "bld-logo-tee",
    name: "BLD Logo Tee",
    category: "tees",
    description:
      "Clean, minimal Boat Life Detroit graphic tee. The classic. Available in multiple colorways.",
    image: "/images/merch/boat-life-tee-01.jpg",
    storeUrl: "https://www.moq1.com/team84/boatlife",
    featured: true,
  },
  {
    id: "bld-snapback",
    name: "BLD Snapback Cap",
    category: "hats",
    description:
      "Structured snapback with embroidered Boat Life Detroit logo. Wear it on the boat, on the dock, or in the city.",
    image: "/images/merch/boat-life-hat-01.jpg",
    storeUrl: "https://www.moq1.com/team84/boatlife",
    featured: true,
  },
  {
    id: "bld-dad-hat",
    name: "BLD Dad Hat",
    category: "hats",
    description:
      "Relaxed fit dad hat with the Boat Life Detroit wordmark. Low-key and effortless.",
    image: "/images/merch/boat-life-dad-hat-01.jpg",
    storeUrl: "https://www.moq1.com/team84/boatlife",
    featured: false,
  },
  {
    id: "bld-detroit-tee",
    name: "Detroit Waterfront Tee",
    category: "tees",
    description:
      "A Detroit-first graphic tee celebrating the Detroit River and Lake St Clair. Local pride, water culture.",
    image: "/images/merch/boat-life-detroit-tee-01.jpg",
    storeUrl: "https://www.moq1.com/team84/boatlife",
    featured: true,
  },
  {
    id: "bld-tumbler",
    name: "BLD Tumbler",
    category: "drinkware",
    description:
      "Insulated tumbler with Boat Life Detroit branding. Keeps your drinks cold from launch to last dock.",
    image: "/images/merch/boat-life-tumbler-01.jpg",
    storeUrl: "https://www.moq1.com/team84/boatlife",
    featured: false,
  },
  {
    id: "bld-zip-hoodie",
    name: "BLD Zip-Up Hoodie",
    category: "hoodies",
    description:
      "Full-zip hoodie with Boat Life Detroit chest logo. Great layering piece for early morning and late evening on the water.",
    image: "/images/merch/boat-life-zip-hoodie-01.jpg",
    storeUrl: "https://www.moq1.com/team84/boatlife",
    featured: false,
  },
  {
    id: "bld-jacket",
    name: "BLD Water-Resistant Jacket",
    category: "outerwear",
    description:
      "Light water-resistant jacket with the BLD logo. Built for Michigan and built for the water.",
    image: "/images/merch/boat-life-jacket-01.jpg",
    storeUrl: "https://www.moq1.com/team84/boatlife",
    featured: true,
  },
];

export const featuredMerch = merchItems.filter((m) => m.featured);
