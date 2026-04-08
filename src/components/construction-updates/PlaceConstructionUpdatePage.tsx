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
  "https://prestigeone.ae/wp-content/uploads/2022/08/The-Place-Banenr-Crop-1.png";

const PLACE_GALLERY: GalleryMonth[] = [
  {
    month: "March 2026",
    images: [
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2026/03/18170450/place-construction-updates-mar-2026-6.webp",
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2026/03/18170445/place-construction-updates-mar-2026-7.webp",
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2026/03/18170453/place-construction-updates-mar-2026-5.webp",
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2026/03/18170458/place-construction-updates-mar-2026-4.webp",
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2026/03/18170503/place-construction-updates-mar-2026-3.webp",
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2026/03/18170507/place-construction-updates-mar-2026-2.webp",
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2026/03/18170512/place-construction-updates-mar-2026-1.webp",
    ],
  },
  {
    month: "February 2026",
    images: [
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2026/03/18144727/the-place-construction-updates-feb-2026-4.webp",
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2026/03/18144720/the-place-construction-updates-feb-2026-5.webp",
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2026/03/18144734/the-place-construction-updates-feb-2026-3.webp",
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2026/03/18144749/the-place-construction-updates-feb-2026-1.webp",
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2026/03/18144742/the-place-construction-updates-feb-2026-2.webp",
    ],
  },
  {
    month: "August 2025",
    images: [
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2025/02/20153851/Golf-Place-Construction-Update-2.webp",
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2025/02/20153848/Golf-Place-Construction-Update-1.webp",
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2025/02/20153854/Golf-Place-Construction-Update-3.webp",
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2025/02/20153859/Golf-Place-Construction-Update-6.webp",
    ],
  },
  {
    month: "April 2025",
    images: [
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2025/02/11162445/2K6A6973-HDR-scaled.webp",
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2025/02/11162439/2K6A6966-HDR-scaled.webp",
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2025/02/11162432/2K6A6956-HDR-scaled.webp",
    ],
  },
];

const TECH_SPEC_COLUMNS: string[][] = [
  [
    "Planned Concrete Utilization: Equivalent to 17 Olympic-sized swimming pools",
    "Planned Glass Panel Weight: 837,000 kg (about 2.2 times the weight of a Boeing 747)",
    "Building Structure & Built-up Area: 1 Ground, 3 Podium Levels, 19 Typical Floors + Roof; Built-up Area: 456,655 sq ft",
    "Workforce Nationalities Represented: 15-20",
    "Projected Building Weight: Approx. 5,950 tons (combined structural materials)",
    "Estimated Total Man-Hours: 154,400 hours",
    "Number of Elevators: 5 (travel a combined 74 km daily)",
  ],
  [
    "Estimated Electrical Cable Installation: 757 km (far beyond Dubai to Abu Dhabi)",
    "Projected Brickwork Area: 38,000 m2 (if stacked vertically, would reach 474 km high)",
    "Construction Start Date: 16 January 2025",
    "Estimated Rebar Length: 4,900 km (enough to span the UAE multiple times)",
    "Rooftop Track Distance (Upon Completion): 51 laps = one full marathon",
    "Planned Landscaped Area: 605 m2 (equal to three mini forests of 200 m2 each)",
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

export default function PlaceConstructionUpdatePage() {
  const [activeMonth, setActiveMonth] = useState(PLACE_GALLERY[0].month);
  const activeGallery = useMemo(
    () => PLACE_GALLERY.find((item) => item.month === activeMonth) ?? PLACE_GALLERY[0],
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
            aria-label="Construction Update: Place by Prestige One"
          />
          <div className="po-destination-hero-overlay" aria-hidden="true" />
          <div className="po-destination-hero-frame">
            <div className="container po-cu-hero-title-wrap">
              <p className="po-cu-hero-kicker">Construction Updates</p>
              <h1 id="construction-update-title" className="po-destination-hero-title po-cu-hero-title">
                Construction Update: Place by Prestige One
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
                      <a href="https://prestigeone.ae/projects/place-by-prestige-one/" target="_blank" rel="noopener noreferrer">
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
                    <p>
                      <a href="/our-destinations/dubai-sports-city" target="_blank" rel="noopener noreferrer">
                        Dubai Sports City
                      </a>
                    </p>
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
              {PLACE_GALLERY.map((month) => (
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
