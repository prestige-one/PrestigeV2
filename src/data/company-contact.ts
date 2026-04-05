/** Single source for Prestige One corporate contact (header off-canvas, contact page, etc.). */

export type CompanyOffice = {
  mapUrl: string;
  label: string;
};

export const COMPANY_OFFICES: readonly CompanyOffice[] = [
  {
    mapUrl: "https://maps.app.goo.gl/Nq4NvSZxovG1Uzvp8",
    label: "Office 1602-1604, Marina Plaza, Dubai Marina, Dubai, UAE.",
  },
  {
    mapUrl: "https://maps.app.goo.gl/xEbyjx9bCPJjiwPQ8",
    label: "Office 205, Bay Square 3, Business Bay, Dubai, UAE.",
  },
] as const;

export const COMPANY_CONTACT = {
  intro:
    "Ready to explore premium residences and destinations in Dubai? Reach out — our team is here to help with enquiries, partnerships, and project information.",
  phoneDisplay: "800 PRESTIGE / 800 77378443",
  phoneTel: "tel:80077378443",
  email: "enquiries@prestigeone.ae",
  emailMailto: "mailto:enquiries@prestigeone.ae",
} as const;

export type CompanySocialLink = {
  name: string;
  href: string;
};

export const COMPANY_SOCIAL_LINKS: readonly CompanySocialLink[] = [
  { name: "Facebook", href: "https://www.facebook.com/ByPrestigeOne/" },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/byprestigeone" },
  { name: "Instagram", href: "https://www.instagram.com/byprestigeone/" },
  { name: "YouTube", href: "https://www.youtube.com/@byprestigeone" },
  { name: "X", href: "https://x.com/ByPrestigeOne" },
];
