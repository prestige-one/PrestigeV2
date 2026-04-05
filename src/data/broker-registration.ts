export type BrokerRegistrationSlug =
  | "uae-company"
  | "uae-individual"
  | "international-company"
  | "international-individual";

export const BROKER_REGISTRATION_SLUGS: readonly BrokerRegistrationSlug[] = [
  "uae-company",
  "uae-individual",
  "international-company",
  "international-individual",
] as const;

export type BrokerRegistrationCard = {
  slug: BrokerRegistrationSlug;
  title: string;
  icon: "building" | "person";
};

export const BROKER_REGISTRATION_CARDS: readonly BrokerRegistrationCard[] = [
  { slug: "uae-company", title: "UAE company", icon: "building" },
  { slug: "uae-individual", title: "UAE individual", icon: "person" },
  { slug: "international-company", title: "International company", icon: "building" },
  { slug: "international-individual", title: "International individual", icon: "person" },
];

export type BrokerRegistrationPageContent = {
  /** Shown in hero as main heading (title case for readability; styled uppercase in CSS). */
  heroTitle: string;
  heroIntro: string;
  sections: readonly {
    heading: string;
    paragraphs: readonly string[];
  }[];
};

export const BROKER_REGISTRATION_PAGE_CONTENT: Record<
  BrokerRegistrationSlug,
  BrokerRegistrationPageContent
> = {
  "uae-company": {
    heroTitle: "UAE company registration",
    heroIntro:
      "For licensed UAE corporate entities partnering with Prestige One. Review the summary below, then complete and submit the registration form.",
    sections: [
      {
        heading: "Who should register",
        paragraphs: [
          "UAE-registered companies with a valid trade licence seeking to represent Prestige One developments and access broker tools and incentives.",
        ],
      },
      {
        heading: "Before you start",
        paragraphs: [
          "Have trade licence, RERA or ORN details (if applicable), VAT certificate if registered, and authorised signatory identification ready to upload. Fields marked * are required.",
        ],
      },
    ],
  },
  "uae-individual": {
    heroTitle: "UAE individual registration",
    heroIntro:
      "For individual brokers based in the UAE. Review the notes below, then complete the form with your credentials and supporting documents.",
    sections: [
      {
        heading: "Eligibility",
        paragraphs: [
          "Individuals with valid UAE residency and relevant real estate broker credentials as required by local regulations.",
        ],
      },
      {
        heading: "Before you start",
        paragraphs: [
          "Prepare Emirates ID, passport, RERA permit or broker card, and any agency affiliation details. Fields marked * are required.",
        ],
      },
    ],
  },
  "international-company": {
    heroTitle: "International company registration",
    heroIntro:
      "For corporate agencies outside the UAE collaborating on Dubai projects. Review the overview, then submit the company registration form.",
    sections: [
      {
        heading: "Overview",
        paragraphs: [
          "International entities may register for buyer referrals, marketing materials (where approved), and coordination through our partnerships desk.",
        ],
      },
      {
        heading: "Compliance",
        paragraphs: [
          "Additional documents such as incorporation extracts, signatory ID, or AML questionnaires may be requested after initial review.",
        ],
      },
    ],
  },
  "international-individual": {
    heroTitle: "International individual registration",
    heroIntro:
      "For independent agents or consultants outside the UAE who introduce qualified buyers to Prestige One developments.",
    sections: [
      {
        heading: "Scope",
        paragraphs: [
          "This route is for non-UAE resident individuals with an established professional profile and verifiable client network.",
        ],
      },
      {
        heading: "After submission",
        paragraphs: [
          "Our team will confirm receipt and share next steps, including access guidelines and a contact for deal registration where applicable.",
        ],
      },
    ],
  },
};

export function isBrokerRegistrationSlug(s: string): s is BrokerRegistrationSlug {
  return (BROKER_REGISTRATION_SLUGS as readonly string[]).includes(s);
}
