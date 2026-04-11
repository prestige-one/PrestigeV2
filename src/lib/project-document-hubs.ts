/**
 * Individual project document hub pages under `/project-documents/[slug]/`.
 * Add or update `pdfHref` when a PDF is placed in `public/` (path is site-root relative).
 */
export type ProjectDocumentHub = {
  /** H1 and browser tab title (via metadata). */
  pageTitle: string;
  /** Public URL to the PDF, e.g. `/assets/documents/file.pdf`, or null until the file exists. */
  pdfHref: string | null;
  /** Optional; defaults to a generic description. */
  metaDescription?: string;
};

export const projectDocumentHubs: Record<string, ProjectDocumentHub> = {
  "vista-spa-tcs": {
    pageTitle: "Vista SPA T&Cs",
    pdfHref: "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/24111926/Vista-By-Prestige-One-Interim-Disclosure-Statement.pdf",
  },
  "the-residence-spa-tcs": {
    pageTitle: "The Residence SPA T&Cs",
    pdfHref: "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/24111931/The-Residence-By-Prestige-One-Interim-Disclosure-Statement.pdf",
  },
  "seaside-spa-tcs": {
    pageTitle: "Seaside SPA T&Cs",
    pdfHref: "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/24111930/Seaside-By-Prestige-One-Interim-Disclosure-Statement-_31-July-2024-1.pdf",
  },
  "the-place-spa-tcs": {
    pageTitle: "Place SPA T&Cs",
    pdfHref: "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2025/08/06124325/The-Place-By-Prestige-One-Interim-Disclosure-Statement-_06.08.2025.pdf",
  },
  "the-waterway-spa-tcs": {
    pageTitle: "The Waterway SPA T&Cs",
    pdfHref: "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/10/22122031/Waterway-by-Prestige-One-Interim-Disclosure-Statement.pdf",
  },
  "parkway-spa-tcs": {
    pageTitle: "Parkway SPA T&Cs",
    pdfHref: "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/11/08115546/Parkway-by-Prestige-One-Interim-Disclosure-Statement.pdf",
  },
  "the-one-spa-tcs": {
    pageTitle: "The One SPA T&Cs",
    pdfHref: "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2025/03/21122742/Developer-Interim-Disclosure-Statement__The-One.pdf",
  },
  "the-boulevard-spa-tcs": {
    pageTitle: "The Boulevard SPA T&Cs",
    pdfHref: "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2025/08/06124323/The-Boulevard-Interim-Disclosure-Statement_06.08.2025.pdf",
  },
  "coastal-haven-spa-tcs": {
    pageTitle: "Coastal Haven SPA T&Cs",
    pdfHref: "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2025/02/15160729/Coastal-Haven-by-Prestige-Harbour-Interim-Disclosure-Statement_14.02.2025.pdf",
  },
  "luxury-canal-spa-tcs": {
    pageTitle: "Luxury Canal SPA T&Cs",
    pdfHref: "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2025/02/24153508/Luxury-Canal-Residences_Interim-Disclosure-Statement_24.02.2025_.pdf",
  },
  "berkeley-square-spa-tcs": {
    pageTitle: "Berkeley Square SPA T&Cs",
    pdfHref: "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2025/08/06124319/Berkeley-Square-by-Prestige-One-Interim-Disclosure-Statement-_06.08.2025.pdf",
  },
  "hilton-residences-dubai-maritime-city-spa-tcs": {
    pageTitle: "Hilton Residences Dubai Maritime City SPA T&Cs",
    pdfHref: "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2026/03/14145140/Interim-Disclosure-Statement_Prestige-One-Residences.pdf",
  },
};

export const projectDocumentHubSlugs = Object.keys(projectDocumentHubs);

export function getProjectDocumentHub(slug: string): ProjectDocumentHub | undefined {
  return projectDocumentHubs[slug];
}
