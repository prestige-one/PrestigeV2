import type { BrokerRegistrationSlug } from "./broker-registration";

/** Edit labels, placeholders, and sections here to match your specification documents. */
export type BrokerFormField =
  | {
      kind: "text" | "email" | "tel" | "date" | "url" | "number";
      name: string;
      label: string;
      required?: boolean;
      placeholder?: string;
      /** Span full width on desktop grid */
      wide?: boolean;
    }
  | {
      kind: "textarea";
      name: string;
      label: string;
      required?: boolean;
      placeholder?: string;
      rows?: number;
    }
  | {
      kind: "select";
      name: string;
      label: string;
      required?: boolean;
      options: readonly { value: string; label: string }[];
      placeholderOption?: string;
    }
  | {
      kind: "file";
      name: string;
      label: string;
      required?: boolean;
      accept?: string;
    }
  | {
      kind: "checkbox";
      name: string;
      label: string;
      required?: boolean;
    };

export type BrokerFormBlock = {
  title: string;
  fields: readonly BrokerFormField[];
};

export type BrokerFormDefinition = {
  submitLabel: string;
  blocks: readonly BrokerFormBlock[];
};

const emirates: readonly { value: string; label: string }[] = [
  { value: "dubai", label: "Dubai" },
  { value: "abu-dhabi", label: "Abu Dhabi" },
  { value: "sharjah", label: "Sharjah" },
  { value: "ajman", label: "Ajman" },
  { value: "rak", label: "Ras Al Khaimah" },
  { value: "fujairah", label: "Fujairah" },
  { value: "uaq", label: "Umm Al Quwain" },
];

export const BROKER_REGISTRATION_FORMS: Record<BrokerRegistrationSlug, BrokerFormDefinition> = {
  "uae-company": {
    submitLabel: "Submit registration",
    blocks: [
      {
        title: "Company details",
        fields: [
          { kind: "text", name: "companyNameEn", label: "Company name (English)", required: true },
          { kind: "text", name: "companyNameAr", label: "Company name (Arabic)", placeholder: "If applicable" },
          { kind: "text", name: "tradeLicenceNo", label: "Trade licence number", required: true },
          { kind: "text", name: "licenceAuthority", label: "Issuing authority", required: true },
          { kind: "date", name: "licenceExpiry", label: "Licence expiry date", required: true },
          { kind: "text", name: "reraOrn", label: "RERA / ORN (if applicable)", placeholder: "Registration number" },
          { kind: "text", name: "vatTrn", label: "VAT TRN", placeholder: "If registered" },
          { kind: "url", name: "website", label: "Company website", placeholder: "https://" },
          { kind: "email", name: "companyEmail", label: "General company email", required: true },
          { kind: "tel", name: "companyPhone", label: "Company phone", required: true },
        ],
      },
      {
        title: "Registered office (UAE)",
        fields: [
          {
            kind: "textarea",
            name: "officeAddress",
            label: "Office address",
            required: true,
            rows: 3,
            placeholder: "Building, street, area",
          },
          { kind: "text", name: "city", label: "City", required: true },
          {
            kind: "select",
            name: "emirate",
            label: "Emirate",
            required: true,
            options: emirates,
            placeholderOption: "Select emirate",
          },
          { kind: "text", name: "poBox", label: "P.O. Box", placeholder: "If applicable" },
        ],
      },
      {
        title: "Authorised signatory",
        fields: [
          { kind: "text", name: "signatoryName", label: "Full name", required: true },
          { kind: "text", name: "signatoryTitle", label: "Job title", required: true },
          { kind: "email", name: "signatoryEmail", label: "Email", required: true },
          { kind: "tel", name: "signatoryMobile", label: "Mobile", required: true },
        ],
      },
      {
        title: "Documents (upload)",
        fields: [
          {
            kind: "file",
            name: "fileTradeLicence",
            label: "Trade licence copy",
            required: true,
            accept: ".pdf,.jpg,.jpeg,.png",
          },
          { kind: "file", name: "fileRera", label: "RERA / broker registration proof", accept: ".pdf,.jpg,.jpeg,.png" },
          { kind: "file", name: "fileVat", label: "VAT certificate", accept: ".pdf,.jpg,.jpeg,.png" },
          { kind: "file", name: "fileSignatoryId", label: "Signatory Emirates ID or passport", required: true, accept: ".pdf,.jpg,.jpeg,.png" },
        ],
      },
      {
        title: "Declaration",
        fields: [
          {
            kind: "checkbox",
            name: "declareAccurate",
            label: "I confirm that the information provided is true and accurate to the best of my knowledge.",
            required: true,
          },
          {
            kind: "checkbox",
            name: "declareAuthority",
            label: "I confirm I am authorised to submit this registration on behalf of the company.",
            required: true,
          },
        ],
      },
    ],
  },

  "uae-individual": {
    submitLabel: "Submit registration",
    blocks: [
      {
        title: "Personal details",
        fields: [
          { kind: "text", name: "fullName", label: "Full name (as per ID)", required: true },
          { kind: "text", name: "nationality", label: "Nationality", required: true },
          { kind: "text", name: "emiratesId", label: "Emirates ID number", required: true },
          { kind: "text", name: "passportNo", label: "Passport number", required: true },
          { kind: "date", name: "passportExpiry", label: "Passport expiry", required: true },
          { kind: "email", name: "email", label: "Email address", required: true },
          { kind: "tel", name: "mobile", label: "Mobile number", required: true },
        ],
      },
      {
        title: "Professional details",
        fields: [
          { kind: "text", name: "reraBrokerNo", label: "RERA broker / permit number", required: true },
          {
            kind: "select",
            name: "yearsExperience",
            label: "Years in UAE real estate",
            required: true,
            options: [
              { value: "", label: "Select" },
              { value: "0-2", label: "0–2 years" },
              { value: "3-5", label: "3–5 years" },
              { value: "6-10", label: "6–10 years" },
              { value: "10+", label: "10+ years" },
            ],
          },
          {
            kind: "select",
            name: "affiliation",
            label: "Current status",
            required: true,
            options: [
              { value: "", label: "Select" },
              { value: "independent", label: "Independent / freelance" },
              { value: "agency", label: "Employed by agency" },
              { value: "other", label: "Other" },
            ],
          },
          { kind: "text", name: "agencyName", label: "Agency name", placeholder: "If employed by agency" },
        ],
      },
      {
        title: "Documents (upload)",
        fields: [
          { kind: "file", name: "fileEid", label: "Emirates ID copy", required: true, accept: ".pdf,.jpg,.jpeg,.png" },
          { kind: "file", name: "filePassport", label: "Passport copy", required: true, accept: ".pdf,.jpg,.jpeg,.png" },
          { kind: "file", name: "fileReraCard", label: "RERA card / permit copy", required: true, accept: ".pdf,.jpg,.jpeg,.png" },
          { kind: "file", name: "fileCv", label: "CV / profile (optional)", accept: ".pdf,.doc,.docx" },
        ],
      },
      {
        title: "Declaration",
        fields: [
          {
            kind: "checkbox",
            name: "declareAccurate",
            label: "I confirm that the information provided is true and accurate.",
            required: true,
          },
        ],
      },
    ],
  },

  "international-company": {
    submitLabel: "Submit registration",
    blocks: [
      {
        title: "Company details",
        fields: [
          { kind: "text", name: "companyLegalName", label: "Legal company name", required: true },
          { kind: "text", name: "countryIncorporation", label: "Country of incorporation", required: true },
          { kind: "text", name: "regNumber", label: "Company registration number", required: true },
          { kind: "number", name: "yearEstablished", label: "Year established", placeholder: "YYYY", required: true },
          { kind: "url", name: "website", label: "Website", placeholder: "https://" },
          { kind: "email", name: "companyEmail", label: "Company email", required: true },
          { kind: "tel", name: "companyPhone", label: "Company phone (incl. country code)", required: true },
        ],
      },
      {
        title: "Registered address",
        fields: [
          {
            kind: "textarea",
            name: "registeredAddress",
            label: "Full registered address",
            required: true,
            rows: 4,
          },
        ],
      },
      {
        title: "Primary contact",
        fields: [
          { kind: "text", name: "contactName", label: "Contact name", required: true },
          { kind: "text", name: "contactTitle", label: "Job title", required: true },
          { kind: "email", name: "contactEmail", label: "Email", required: true },
          { kind: "tel", name: "contactPhone", label: "Direct phone / WhatsApp", required: true },
        ],
      },
      {
        title: "Business profile",
        fields: [
          {
            kind: "select",
            name: "marketsServed",
            label: "Primary markets served",
            required: true,
            options: [
              { value: "", label: "Select" },
              { value: "mena", label: "Middle East & Africa" },
              { value: "europe", label: "Europe" },
              { value: "asia", label: "Asia" },
              { value: "americas", label: "Americas" },
              { value: "global", label: "Global / multiple" },
            ],
          },
          {
            kind: "select",
            name: "referralInterest",
            label: "Interested in",
            required: true,
            options: [
              { value: "", label: "Select" },
              { value: "referral", label: "Buyer referrals" },
              { value: "marketing", label: "Marketing materials" },
              { value: "both", label: "Both" },
            ],
          },
          {
            kind: "textarea",
            name: "companyProfile",
            label: "Brief company profile",
            placeholder: "Services, team size, key markets",
            rows: 4,
          },
        ],
      },
      {
        title: "Documents (upload)",
        fields: [
          {
            kind: "file",
            name: "fileIncorporation",
            label: "Certificate of incorporation / registration",
            required: true,
            accept: ".pdf,.jpg,.jpeg,.png",
          },
          {
            kind: "file",
            name: "fileAuth",
            label: "Board resolution or authorisation letter",
            accept: ".pdf,.jpg,.jpeg,.png",
          },
          { kind: "file", name: "fileSignatoryPassport", label: "Passport of authorised signatory", required: true, accept: ".pdf,.jpg,.jpeg,.png" },
        ],
      },
      {
        title: "Declaration",
        fields: [
          {
            kind: "checkbox",
            name: "declareAccurate",
            label: "I confirm that the information provided is true and accurate.",
            required: true,
          },
          {
            kind: "checkbox",
            name: "declareAuthority",
            label: "I confirm I am authorised to register on behalf of this company.",
            required: true,
          },
        ],
      },
    ],
  },

  "international-individual": {
    submitLabel: "Submit registration",
    blocks: [
      {
        title: "Personal details",
        fields: [
          { kind: "text", name: "fullName", label: "Full name", required: true },
          { kind: "text", name: "nationality", label: "Nationality", required: true },
          { kind: "text", name: "countryResidence", label: "Country of residence", required: true },
          { kind: "text", name: "passportNo", label: "Passport number", required: true },
          { kind: "date", name: "passportExpiry", label: "Passport expiry", required: true },
          { kind: "email", name: "email", label: "Professional email", required: true },
          { kind: "tel", name: "phone", label: "Phone / WhatsApp (incl. country code)", required: true },
        ],
      },
      {
        title: "Professional background",
        fields: [
          { kind: "text", name: "linkedCompany", label: "Agency or company name", placeholder: "If applicable" },
          {
            kind: "select",
            name: "yearsExperience",
            label: "Years in real estate",
            required: true,
            options: [
              { value: "", label: "Select" },
              { value: "0-2", label: "0–2 years" },
              { value: "3-5", label: "3–5 years" },
              { value: "6-10", label: "6–10 years" },
              { value: "10+", label: "10+ years" },
            ],
          },
          {
            kind: "select",
            name: "heardAbout",
            label: "How did you hear about Prestige One?",
            required: false,
            options: [
              { value: "", label: "Select" },
              { value: "referral", label: "Referral" },
              { value: "event", label: "Event / roadshow" },
              { value: "online", label: "Online / social" },
              { value: "other", label: "Other" },
            ],
          },
          {
            kind: "textarea",
            name: "experienceSummary",
            label: "Brief summary of experience & client base",
            rows: 4,
            placeholder: "Markets you cover, typical buyer profile, etc.",
          },
        ],
      },
      {
        title: "Documents (upload)",
        fields: [
          { kind: "file", name: "filePassport", label: "Passport copy", required: true, accept: ".pdf,.jpg,.jpeg,.png" },
          { kind: "file", name: "fileProfile", label: "Professional profile / CV (optional)", accept: ".pdf,.doc,.docx" },
        ],
      },
      {
        title: "Declaration",
        fields: [
          {
            kind: "checkbox",
            name: "declareAccurate",
            label: "I confirm that the information provided is true and accurate.",
            required: true,
          },
        ],
      },
    ],
  },
};
