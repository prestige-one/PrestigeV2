export type GalleryMonth = {
  month: string;
  images: string[];
};

export const CONSTRUCTION_META_ICON_PATHS = {
  project: "/assets/img/v2/projectIcon.svg",
  location: "/assets/img/v2/locationIcon.svg",
  document: "/assets/img/v2/documentIcon.svg",
  calendar: "/assets/img/v2/calendarIcon.svg",
} as const;

export type ConstructionProcessItem = {
  step: string;
  title: string;
  description: string;
  iconSrc: string;
};

export const CONSTRUCTION_PROCESS: ConstructionProcessItem[] = [
  {
    step: "Step_01",
    title: "Planning & Consultation",
    description:
      "We align timelines, budget strategy, design intent, and construction priorities with all stakeholders before on-site execution begins.",
    iconSrc: "/assets/img/v2/planingIcon.svg",
  },
  {
    step: "Step_02",
    title: "Design & Engineering",
    description:
      "Architectural and engineering teams coordinate layouts, systems, and technical details to ensure buildability, safety, and long-term performance.",
    iconSrc: "/assets/img/v2/designingIcon.svg",
  },
  {
    step: "Step_03",
    title: "Construction Execution",
    description:
      "Core structure, MEP systems, and finishes are delivered through controlled site management, quality checks, and milestone-based progress tracking.",
    iconSrc: "/assets/img/v2/constructionIcon.svg",
  },
  {
    step: "Step_04",
    title: "Inspection & Handover",
    description:
      "Final inspections, compliance reviews, and snag resolution are completed before handover, ensuring each home is ready to occupy with confidence.",
    iconSrc: "/assets/img/v2/handoverIcon.svg",
  },
];
