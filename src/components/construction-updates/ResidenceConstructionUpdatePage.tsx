"use client";

import { useMemo, useState } from "react";
import SiteHeader from "@/layouts/SiteHeader";
import SiteFooterBlock from "@/layouts/SiteFooterBlock";
import {
  CONSTRUCTION_META_ICON_PATHS,
  CONSTRUCTION_PROCESS,
  type GalleryMonth,
} from "@/data/construction-update-common";

const HERO_IMAGE =
  "assets/images/v2/project-featured-images/THE-RESIDENCE.webp";

const RESIDENCE_GALLERY: GalleryMonth[] = [
  {
    month: "February 2026",
    images: [
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2025/02/17155703/residence-construction-updates-feb-2026-4.webp",
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2025/02/17155709/residence-construction-updates-feb-2026-3.webp",
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2025/02/17155656/residence-construction-updates-feb-2026-5.webp",
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2025/02/17155715/residence-construction-updates-feb-2026-2.webp",
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2025/02/17155722/residence-construction-updates-feb-2026-.webp",
    ],
  },
  {
    month: "August 2025",
    images: [
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2025/02/29211252/2K6A6089-HDR.webp",
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2025/02/29211310/2K6A6092-HDR.webp",
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2025/02/29211217/2K6A6080-HDR.webp",
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2025/02/28212728/2K6A6068-HDR.webp",
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2025/02/28212713/2K6A6074-HDR.webp",
    ],
  },
  {
    month: "March 2025",
    images: [
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/11/10113018/2K6A6859-HDR-scaled.webp",
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/11/10113024/2K6A6876-HDR-scaled.webp",
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/11/10113012/2K6A6849-HDR-scaled.webp",
    ],
  },
  {
    month: "December 2024",
    images: [
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/11/10112259/PONE1189-HDR-scaled.webp",
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/11/10112248/PONE1162-HDR-scaled.webp",
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/11/10112237/PONE1152-HDR-scaled.webp",
    ],
  },
  {
    month: "November 2024",
    images: [
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/11/10111007/2K6A2793-HDR-scaled.webp",
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/11/10111000/2K6A2779-HDR-scaled.webp",
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/11/10110953/2K6A2771-HDR-scaled.webp",
    ],
  },
  {
    month: "October 2024",
    images: [
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/11/22072514/PONE0290-scaled.webp",
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/11/22072455/PONE0289-scaled.webp",
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/11/22072528/PONE0301-scaled.webp",
    ],
  },
  {
    month: "September 2024",
    images: [
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/11/22072138/2K6A9568-scaled.webp",
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/11/22072133/2K6A9564-scaled.webp",
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/11/22072145/2K6A9574-scaled.webp",
    ],
  },
  {
    month: "August 2024",
    images: [
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/11/22071729/2K6A6830-scaled.webp",
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/11/22071648/2K6A6820-scaled.webp",
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/11/22071738/2K6A6834-scaled.webp",
    ],
  },
  {
    month: "July 2024",
    images: [
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/07/18113649/2.webp",
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/07/18113651/3.webp",
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/07/18113647/1.webp",
    ],
  },
  {
    month: "June 2024",
    images: [
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/07/18130541/6.webp",
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/07/18135442/23.webp",
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/07/18135450/24.webp",
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/07/18130533/4.webp",
    ],
  },
  {
    month: "May 2024",
    images: [
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/07/18134234/17.webp",
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/07/18132326/7.webp",
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/07/18134237/18.webp",
    ],
  },
  {
    month: "April 2024",
    images: [
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/07/18133603/14.webp",
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/07/18133557/13.webp",
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/07/18133609/15.webp",
    ],
  },
  {
    month: "March 2024",
    images: [
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/07/18132334/9.webp",
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/07/18134230/16.webp",
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/07/18134237/18.webp",
    ],
  },
  {
    month: "February 2024",
    images: [
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/07/18134832/20.webp",
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/07/18134829/19.webp",
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/07/18134835/21.webp",
    ],
  },
  {
    month: "January 2024",
    images: [
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/07/18135442/23.webp",
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/07/18135429/22.webp",
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/07/18135450/24.webp",
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/07/18130533/4.webp",
    ],
  },
];

const TECH_SPEC_COLUMNS: string[][] = [
  [
    "Average Daily Workforce: 300 workers",
    "Estimated Electrical Cable Installation: 205 km (equivalent to the distance from Dubai to Abu Dhabi)",
    "Projected Brickwork Area: 12,147 m2 (if stacked vertically, would reach 140 km high)",
    "Building Structure & Built-up Area: 1 Basement, 1 Ground, 5 Floors + Roof; Built-up Area: 163,300 sq ft",
    "Estimated Rebar Length: 1,050 km (distance from Dubai to Muscat)",
    "Rooftop Track Distance (Upon Completion): 200 m track = half a marathon after multiple laps",
    "Planned Landscaped Area: 1,200 m2 (equal to six mini forests of 200 m2 each)",
  ],
  [
    "Planned Concrete Utilization: 9,000 m3 (enough to fill 3.5 Olympic-sized swimming pools)",
    "Planned Glass Panel Weight: 192,000 kg (around half the weight of a Boeing 747)",
    "Construction Start Date: 23 March 2024",
    "Workforce Nationalities Represented: Minimum 15",
    "Projected Building Weight: Approx. 1,200 tons (combined structural materials)",
    "Estimated Total Man-Hours: 476,000 hours (equivalent to 1,322 round trips to the moon)",
    "Number of Elevators: 2 (travel a combined 0.6 km daily)",
  ],
];

function LightboxCloseIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 6l12 12M18 6 6 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function LightboxArrowLeftIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M15 6 9 12l6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LightboxArrowRightIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m9 6 6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function ResidenceConstructionUpdatePage() {
  const [activeMonth, setActiveMonth] = useState(RESIDENCE_GALLERY[0].month);
  const activeGallery = useMemo(
    () => RESIDENCE_GALLERY.find((item) => item.month === activeMonth) ?? RESIDENCE_GALLERY[0],
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
            aria-label="Construction Update: The Residence by Prestige One"
          />
          <div className="po-destination-hero-overlay" aria-hidden="true" />
          <div className="po-destination-hero-frame">
            <div className="container po-cu-hero-title-wrap">
              <p className="po-cu-hero-kicker">Construction Updates</p>
              <h1 id="construction-update-title" className="po-destination-hero-title po-cu-hero-title">
                Construction Update: The Residence by Prestige One
              </h1>
            </div>
          </div>
          <div className="po-cu-hero-bottom-rail">
            <div className="container">
              <div className="po-cu-hero-meta-grid">
                <article className="po-cu-hero-meta-card">
                  <span className="po-cu-hero-meta-icon">
                    <img src={CONSTRUCTION_META_ICON_PATHS.project} alt="" aria-hidden="true" />
                  </span>
                  <div className="po-cu-hero-meta-content">
                    <h3>Project</h3>
                    <p>
                      <a href="https://prestigeone.ae/projects/the-residence-by-prestige-one/" target="_blank" rel="noopener noreferrer">
                        View Project
                      </a>
                    </p>
                  </div>
                </article>
                <article className="po-cu-hero-meta-card">
                  <span className="po-cu-hero-meta-icon">
                    <img src={CONSTRUCTION_META_ICON_PATHS.location} alt="" aria-hidden="true" />
                  </span>
                  <div className="po-cu-hero-meta-content">
                    <h3>Location</h3>
                    <p>Dubai, UAE</p>
                  </div>
                </article>
                <article className="po-cu-hero-meta-card">
                  <span className="po-cu-hero-meta-icon">
                    <img src={CONSTRUCTION_META_ICON_PATHS.document} alt="" aria-hidden="true" />
                  </span>
                  <div className="po-cu-hero-meta-content">
                    <h3>Project Document</h3>
                    <p>
                      <a href="/project-documents" target="_blank" rel="noopener noreferrer">
                        View Documents
                      </a>
                    </p>
                  </div>
                </article>
                <article className="po-cu-hero-meta-card">
                  <span className="po-cu-hero-meta-icon">
                    <img src={CONSTRUCTION_META_ICON_PATHS.calendar} alt="" aria-hidden="true" />
                  </span>
                  <div className="po-cu-hero-meta-content">
                    <h3>Completion Date</h3>
                    <p>To be announced</p>
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
              {RESIDENCE_GALLERY.map((month) => (
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
          <div className="container">
            <section className="po-cu-process" aria-labelledby="po-cu-process-title">
              <div className="po-cu-process-head">
                <p className="po-cu-process-kicker">Work Process</p>
                <h2 id="po-cu-process-title">Our Construction Work Process</h2>
                <p className="po-cu-process-subtitle">
                  Track how each construction stage progresses from planning to final handover.
                </p>
              </div>
              <div className="po-cu-process-grid">
                {CONSTRUCTION_PROCESS.map(({ step, title, description, iconSrc }) => (
                  <article key={title} className="po-cu-process-card">
                    <p className="po-cu-process-step">{step}</p>
                    <span className="po-cu-process-icon">
                      <img src={iconSrc} alt="" aria-hidden="true" />
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
            <button type="button" className="po-cu-lightbox-close" onClick={closeLightbox} aria-label="Close gallery">
              <LightboxCloseIcon />
            </button>
            <p className="po-cu-lightbox-month">{activeGallery.month}</p>
            <button type="button" className="po-cu-lightbox-nav po-cu-lightbox-prev" onClick={prevImage} aria-label="Previous image">
              <LightboxArrowLeftIcon />
            </button>
            <button type="button" className="po-cu-lightbox-nav po-cu-lightbox-next" onClick={nextImage} aria-label="Next image">
              <LightboxArrowRightIcon />
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

