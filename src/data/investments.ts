export type InvestmentItem = {
  title: string;
  details: string;
  image: string;
};

/**
 * Content source: https://prestigeone.ae/investments/
 * Image paths are temporary project visuals for now.
 */
export const INVESTMENT_ITEMS: readonly InvestmentItem[] = [
  {
    title: "The Embankment in JLT",
    details:
      "Prestige One announces investment in The Embankment, a signature development in the heart of Dubai's Jumeirah Lake Towers (JLT).",
    image: "/assets/images/v2/locations/Prestige-One-Invest-in-Embankment.webp",
  },
  {
    title: "Offices in Marina Plaza",
    details:
      "Prestige One Developments celebrates growth and success with the expansion of offices in Marina Plaza.",
    image: "/assets/images/v2/locations/marina-plaza-investments-1jpg-2.webp",
  },
  {
    title: "Land Acquisitions in Dubai Freehold Communities",
    details:
      "Prestige One bolsters its portfolio and fortifies investment stability with strategic land acquisitions in Dubai's freehold communities.",
    image: "/assets/images/v2/locations/downtown.webp",
  },
  {
    title: "Dorra Bay in Dubai Marina",
    details:
      "Prestige One invests in Dorra Bay, a luxurious residential development in Dubai Marina.",
    image: "/assets/images/v2/locations/Prestige-One-Invest-in-Dorra-Bay.webp",
  },
  {
    title: "Residential Freehold Units in Dubai (AED 1B+)",
    details:
      "Prestige One cements its presence in Dubai with an impressive AED 1 Billion+ investment in residential freehold units.",
    image:
      "/assets/images/v2/locations/dubai.webp",
  },
  {
    title: "Various Stalled Projects in JVC/Dubai Sports City (AED 300M+)",
    details:
      "Prestige One diversifies with over AED 300 Million investment in JVC and Dubai Sports City.",
    image: "/assets/images/v2/locations/jvc.webp",
  },
  {
    title: "Palm Jumeirah (AED 200M+)",
    details:
      "Prestige One enhances its luxury portfolio with an AED 200 Million+ infusion into Palm Jumeirah's elite residential units.",
    image: "/assets/images/v2/locations/palm-jumeira.webp",
  },
  {
    title: "Downtown Dubai (AED 150M+)",
    details:
      "Prestige One elevates its presence with an AED 150 Million+ investment in Downtown Dubai's luxury residential scene.",
    image: "/assets/images/v2/locations/dubai-2.webp",
  },
  {
    title: "Dubai Marina (AED 100M+)",
    details:
      "Prestige One marks a milestone with over AED 100 Million invested in the prestigious Dubai Marina.",
    image: "/assets/images/v2/locations/marina.webp",
  },
  {
    title: "Prestige Real Estate",
    details:
      "Prestige Real Estate was launched in 2007 and has since built a reputation based on exceptional service and extensive market experience.",
    image:
      "/assets/images/v2/locations/marina-plaza-investments-1jpg-2.webp",
  },
  {
    title: "Land Acquisitions in Palm Jumeirah",
    details:
      "Prestige One expands its investment horizons with prime land acquisitions in the iconic Palm Jumeirah.",
    image: "/assets/images/v2/project-featured-images/Palm-Jumierah-Villa.webp",
  },
  {
    title: "Land Acquisitions in Meydan",
    details:
      "Prestige One enhances its property portfolio through strategic land purchases in the prestigious Meydan area.",
    image: "/assets/images/v2/locations/Meydan.webp",
  },
] as const;

