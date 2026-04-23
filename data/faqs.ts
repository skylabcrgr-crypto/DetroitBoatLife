// ============================================================
// FAQ DATA — EDIT TO ADD, REMOVE, OR UPDATE FAQ ITEMS
// ============================================================

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  page?: string[]; // which pages this FAQ appears on, or omit for global
}

export const faqs: FAQ[] = [
  {
    id: "how-to-request",
    question: "How do I request rental information?",
    answer:
      "It's simple — fill out our Request Info form on the website with your name, contact details, inquiry type, and any relevant dates. Our team will follow up directly to discuss availability and options. You can also call or text us at (248) 747-2523.",
    page: ["home", "rentals", "contact"],
  },
  {
    id: "events-posting",
    question: "Do you post upcoming boating events?",
    answer:
      "Yes! Boat Life Detroit is the go-to source for Metro Detroit boating events. We promote, host, and coordinate boating events across the Detroit River and Lake St Clair. Check our Events page regularly and follow us on Instagram @boatlifedetroit313 for real-time updates.",
    page: ["home", "events", "contact"],
  },
  {
    id: "jetski-availability",
    question: "Do you offer jet ski rentals?",
    answer:
      "Yes, jet ski rentals are available. Whether you're a first-timer or an experienced rider, we can set you up with the right experience on Metro Detroit's best waterways. Submit an inquiry and we'll get back to you with availability details.",
    page: ["home", "rentals", "contact"],
  },
  {
    id: "event-locations",
    question: "Where do your events take place?",
    answer:
      "Our events happen across Metro Detroit's waterways — primarily on the Detroit River and Lake St Clair. Some events are dockside, some are on the water, and some are both. We'll always share detailed location information with registrants and followers.",
    page: ["home", "events", "contact"],
  },
  {
    id: "merch-available",
    question: "Do you sell Boat Life Detroit merchandise?",
    answer:
      "Yes! We have a full line of branded apparel and lifestyle gear — hoodies, tees, hats, drinkware, and more. Visit our Merch page and shop the collection at our online store.",
    page: ["home", "merch", "contact"],
  },
  {
    id: "how-to-contact",
    question: "How do I contact Boat Life Detroit?",
    answer:
      "You can reach us by phone at (248) 747-2523, by email at boatlifedetroitllc@gmail.com, or through the Request Info form on our Contact page. We're also active on Instagram at @boatlifedetroit313.",
    page: ["home", "contact"],
  },
  {
    id: "group-size",
    question: "What group sizes do you accommodate?",
    answer:
      "We work with a wide range of group sizes — from couples and small groups to large parties and corporate events. When you submit your inquiry, include your estimated group size and we'll match you with the right rental or experience.",
    page: ["rentals", "contact"],
  },
  {
    id: "experience-needed",
    question: "Do I need boating experience to rent?",
    answer:
      "It depends on the rental type. Some options require a valid boating license, while others come with support for beginners. When you submit an inquiry, let us know your experience level and we'll recommend the best fit.",
    page: ["rentals"],
  },
];

export const homepageFaqs = faqs.filter((f) => f.page?.includes("home"));
export const rentalFaqs = faqs.filter((f) => f.page?.includes("rentals"));
export const eventFaqs = faqs.filter((f) => f.page?.includes("events"));
export const contactFaqs = faqs.filter((f) => f.page?.includes("contact"));
