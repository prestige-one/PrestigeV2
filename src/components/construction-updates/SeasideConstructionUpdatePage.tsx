"use client";

import { useMemo, useState } from "react";
import SiteHeader from "@/layouts/SiteHeader";
import SiteFooterBlock from "@/layouts/SiteFooterBlock";

type GalleryMonth = {
  month: string;
  images: string[];
};

const HERO_IMAGE = "/assets/img/v2/project-featured-images/seaside-featured-image.webp";

function ProjectIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden>
      <path d="M4 20V8l8-4 8 4v12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 20v-5h6v5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden>
      <path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="10" r="2.7" fill="none" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function DocumentIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden>
      <path d="M7 3h7l5 5v13H7z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 3v6h5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 15h6M10 18h4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden>
      <rect x="4" y="6" width="16" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8 3v4M16 3v4M4 10h16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function ProcessPlanningIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden>
      <path d="M5 7h14M5 12h10M5 17h8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="m16 16 2 2 4-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ProcessDesignIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden>
      <path d="M4 20h16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="m7 16 5-10 5 10" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="11" r="1.4" fill="currentColor" />
    </svg>
  );
}

function ProcessConstructionIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden>
      <path d="M3 20h18M6 20V9h12v11" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 13h2M13 13h2M9 16h2M13 16h2" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function ProcessInspectionIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden>
      <rect x="6" y="4" width="12" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="m9 12 2 2 4-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const SEASIDE_GALLERY: GalleryMonth[] = [
  {
    month: "March 2026",
    images: [
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2026/03/18165627/seaside-construction-updates-mar-2026-2.webp",
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2026/03/18165617/seaside-construction-updates-mar-2026-4.webp",
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2026/03/18165622/seaside-construction-updates-mar-2026-3.webp",
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2026/03/18165611/seaside-construction-updates-mar-2026-5.webp",
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2026/03/18165633/seaside-construction-updates-mar-2026-1.webp",
    ],
  },
  {
    month: "February 2026",
    images: [
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2025/02/17144522/seaside-construction-updates-feb-2026-1.webp",
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2025/02/17144517/seaside-construction-updates-feb-2026-2.webp",
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2025/02/17144513/seaside-construction-updates-feb-2026-3.webp",
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2025/02/17144510/seaside-construction-updates-feb-2026-4.webp",
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2025/02/17144505/seaside-construction-updates-feb-2026-5.webp",
    ],
  },
  {
    month: "December 2025",
    images: [
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2025/02/17153437/SEASIDE2.webp",
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2025/02/17153445/SEASIDE1.webp",
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2025/02/17153427/SEASIDE3.webp",
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2025/02/17153456/SEASIDE0.webp",
    ],
  },
  {
    month: "September 2025",
    images: [
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2025/02/17150057/seaside-construction-updates-sep-2025-2.webp",
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2025/02/17150113/seaside-construction-updates-sep-2025-1.webp",
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2025/02/17150051/seaside-construction-updates-sep-2025-3.webp",
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2025/02/17150044/seaside-construction-updates-sep-2025-4.webp",
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2025/02/17150037/seaside-construction-updates-sep-2025-5.webp",
    ],
  },
  {
    month: "August 2025",
    images: [
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2025/02/19173616/Construction-Update-Seaside-12-scaled.webp",
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2025/02/29212026/2K6A6161-HDR.webp",
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2025/02/29211948/2K6A6155-HDR.webp",
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2025/02/29211850/2K6A6143-HDR.webp",
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2025/02/19173555/Construction-Update-Seaside-1-scaled.webp",
    ],
  },
  {
    month: "April 2025",
    images: [
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2025/02/15165930/2K6A7033-HDR-scaled.webp",
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2025/02/15165924/2K6A7013-HDR-scaled.webp",
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2025/02/15165918/2K6A6990-HDR-scaled.webp",
    ],
  },
  {
    month: "December 2024",
    images: [
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2025/02/15165844/PONE1298-HDR-scaled.webp",
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2025/02/15165824/PONE1284-HDR-scaled.webp",
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2025/02/15165813/PONE1277-HDR-scaled.webp",
    ],
  },
];

const TECH_SPEC_COLUMNS: string[][] = [
  [
    "Planned Concrete Utilization: 6 Olympic-sized pools (~15,000 m3)",
    "Planned Glass Panel Weight: 400,000 kg (~ weight of a Boeing 747)",
    "Workforce Nationalities Represented: Minimum 15",
    "Projected Building Weight: 3,300 tons",
    "Estimated Total Man-Hours: 296,512",
    "Number of Elevators: 3 -> 14.4 km daily travel",
  ],
  [
    "Estimated Electrical Cable Installation: 225 km (enough to go Dubai -> Abu Dhabi -> Dubai)",
    "Projected Brickwork Area: 25,600 m2 (stacked height 70 km - 8 x Mount Everest)",
    "Estimated Rebar Length: 1,600 km (Dubai -> Cairo)",
    "Rooftop Track Distance (Upon Completion): 170 m = 45 laps (full marathon = 105.5 laps)",
    "Planned Landscaped Area: 1,100 m2 (5 mini forests)",
  ],
];

const CONSTRUCTION_PROCESS = [
  {
    step: "Step_01",
    title: "Planning & Consultation",
    description:
      "We align timelines, budget strategy, design intent, and construction priorities with all stakeholders before on-site execution begins.",
    Icon: ProcessPlanningIcon,
  },
  {
    step: "Step_02",
    title: "Design & Engineering",
    description:
      "Architectural and engineering teams coordinate layouts, systems, and technical details to ensure buildability, safety, and long-term performance.",
    Icon: ProcessDesignIcon,
  },
  {
    step: "Step_03",
    title: "Construction Execution",
    description:
      "Core structure, MEP systems, and finishes are delivered through controlled site management, quality checks, and milestone-based progress tracking.",
    Icon: ProcessConstructionIcon,
  },
  {
    step: "Step_04",
    title: "Inspection & Handover",
    description:
      "Final inspections, compliance reviews, and snag resolution are completed before handover, ensuring each home is ready to occupy with confidence.",
    Icon: ProcessInspectionIcon,
  },
] as const;

export default function SeasideConstructionUpdatePage() {
  const [activeMonth, setActiveMonth] = useState(SEASIDE_GALLERY[0].month);
  const activeGallery = useMemo(
    () => SEASIDE_GALLERY.find((item) => item.month === activeMonth) ?? SEASIDE_GALLERY[0],
    [activeMonth],
  );
  const [openedImageIndex, setOpenedImageIndex] = useState<number | null>(null);
  const openedImage = openedImageIndex !== null ? activeGallery.images[openedImageIndex] : null;

  const openImageAt = (idx: number) => setOpenedImageIndex(idx);
  const closeLightbox = () => setOpenedImageIndex(null);
  const nextImage = () =>
    setOpenedImageIndex((prev) => (prev === null ? 0 : (prev + 1) % activeGallery.images.length));
  const prevImage = () =>
    setOpenedImageIndex((prev) =>
      prev === null ? 0 : (prev - 1 + activeGallery.images.length) % activeGallery.images.length,
    );

  return (
    <>
      <SiteHeader />
      <main>
        <section className="po-destination-hero po-destination-hero--with-contact-rail po-cu-hero" aria-labelledby="construction-update-title">
          <div
            className="po-destination-hero-media"
            style={{ backgroundImage: `url(${HERO_IMAGE})` }}
            role="img"
            aria-label="Construction Update: Seaside by Prestige One"
          />
          <div className="po-destination-hero-overlay" aria-hidden="true" />
          <div className="po-destination-hero-frame">
            <div className="container po-cu-hero-title-wrap">
              <p className="po-cu-hero-kicker">Construction Updates</p>
              <h1 id="construction-update-title" className="po-destination-hero-title po-cu-hero-title">
                Construction Update: Seaside by Prestige One
              </h1>
            </div>
          </div>
          <div className="po-cu-hero-bottom-rail">
            <div className="container">
              <div className="po-cu-hero-meta-grid">
                <article className="po-cu-hero-meta-card">
                  <span className="po-cu-hero-meta-icon"><ProjectIcon /></span>
                  <div className="po-cu-hero-meta-content">
                    <h3>Project</h3>
                    <p>Seaside by Prestige One</p>
                  </div>
                </article>
                <article className="po-cu-hero-meta-card">
                  <span className="po-cu-hero-meta-icon"><LocationIcon /></span>
                  <div className="po-cu-hero-meta-content">
                    <h3>Location</h3>
                    <p>Dubai Island</p>
                  </div>
                </article>
                <article className="po-cu-hero-meta-card">
                  <span className="po-cu-hero-meta-icon"><DocumentIcon /></span>
                  <div className="po-cu-hero-meta-content">
                    <h3>Project Document</h3>
                    <p>
                      <a href="https://prestigeone.ae/project-documents/seaside-spa-tcs/" target="_blank" rel="noopener noreferrer">
                        View SPA T&amp;Cs
                      </a>
                    </p>
                  </div>
                </article>
                <article className="po-cu-hero-meta-card">
                  <span className="po-cu-hero-meta-icon"><CalendarIcon /></span>
                  <div className="po-cu-hero-meta-content">
                    <h3>Completion Date</h3>
                    <p>December 25, 2026</p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="po-cu-detail-section pb-4">
          <div className="container">
            <section className="po-cu-techspec" aria-labelledby="po-cu-techspec-title">
              <h2 id="po-cu-techspec-title">Technical Specifications</h2>
              <div className="po-cu-techspec-grid">
                {TECH_SPEC_COLUMNS.map((items, colIndex) => (
                  <ul key={colIndex} className="po-cu-techspec-list">
                    {items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ))}
              </div>
            </section>

            <div className="po-cu-month-cover-grid" aria-label="Construction update months">
              {SEASIDE_GALLERY.map((month) => (
                <button
                  key={month.month}
                  type="button"
                  className={`po-cu-month-cover ${activeMonth === month.month ? "is-active" : ""}`}
                  onClick={() => {
                    setActiveMonth(month.month);
                    setOpenedImageIndex(0);
                  }}
                  aria-label={`Open ${month.month} gallery`}
                >
                  <img src={month.images[0]} alt={`${month.month} cover`} loading="lazy" />
                  <span className="po-cu-month-cover-label">{month.month}</span>
                </button>
              ))}
            </div>
          </div>
        </section>


      <section className="po-cu-detail-section mt-0 pt-0">
        <div className="container-fluid">
            <section className="po-cu-process" aria-labelledby="po-cu-process-title">
              <div className="po-cu-process-head">
                <p className="po-cu-process-kicker">Work Process</p>
                <h2 id="po-cu-process-title">Our Construction Work Process</h2>
                <p className="po-cu-process-subtitle">
                  Track how each construction stage progresses from planning to final handover.
                </p>
              </div>
              <div className="po-cu-process-grid">
                {CONSTRUCTION_PROCESS.map(({ step, title, description, Icon }) => (
                  <article key={title} className="po-cu-process-card">
                    <p className="po-cu-process-step">{step}</p>
                    <span className="po-cu-process-icon">
                      <Icon />
                    </span>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </article>
                ))}
              </div>
            </section>
         </div>
      </section>



      </main>

      {openedImage ? (
        <div className="po-cu-lightbox" onClick={closeLightbox}>
          <div className="po-cu-lightbox-dialog" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="po-cu-lightbox-close" onClick={closeLightbox}>
              x
            </button>
            <p className="po-cu-lightbox-month">{activeGallery.month}</p>
            <button type="button" className="po-cu-lightbox-nav po-cu-lightbox-prev" onClick={prevImage}>
              {"<"}
            </button>
            <button type="button" className="po-cu-lightbox-nav po-cu-lightbox-next" onClick={nextImage}>
              {">"}
            </button>
            <img src={openedImage} alt="Construction update enlarged preview" />
            <div className="po-cu-lightbox-thumbs" aria-label={`${activeGallery.month} thumbnails`}>
              {activeGallery.images.map((src, idx) => (
                <button
                  key={src}
                  type="button"
                  className={`po-cu-lightbox-thumb ${openedImageIndex === idx ? "is-active" : ""}`}
                  onClick={() => openImageAt(idx)}
                  aria-label={`View image ${idx + 1}`}
                >
                  <img src={src} alt={`${activeGallery.month} thumbnail ${idx + 1}`} loading="lazy" />
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : null}

      <SiteFooterBlock />
    </>
  );
}
