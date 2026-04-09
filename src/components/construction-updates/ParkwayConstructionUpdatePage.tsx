"use client";

import { useMemo, useState } from "react";
import SiteHeader from "@/layouts/SiteHeader";
import SiteFooterBlock from "@/layouts/SiteFooterBlock";
import {
  CONSTRUCTION_META_ICON_PATHS,
  CONSTRUCTION_PROCESS,
  type GalleryMonth,
} from "@/data/construction-update-common";

const HERO_IMAGE = "/assets/img/v2/project-featured-images/Front-Exterior-3-scaled.webp";

const PARKWAY_GALLERY: GalleryMonth[] = [
  {
    month: "February 2026",
    images: [
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2026/03/18124145/parkway-construction-updates-feb-2026-36-PM.webp",
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2026/03/18124141/parkway-construction-updates-feb-2026-5.webp",
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2026/03/18124132/parkway-construction-updates-feb-2026-2.webp",
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2026/03/18124128/parkway-construction-updates-feb-2026-.webp",
    ],
  },
  {
    month: "August 2025",
    images: [
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/07/20121136/Parkway-Construction-Update-1.webp",
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/07/20121144/Parkway-Construction-Update-8.webp",
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/07/20121141/Parkway-Construction-Update-4.webp",
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/07/20121139/Parkway-Construction-Update-3.webp",
    ],
  },
  {
    month: "January 2025",
    images: [
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2025/07/22084559/2K6A3923-HDR-scaled.webp",
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2025/07/22084605/2K6A3938-HDR-scaled.webp",
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2025/07/22084553/2K6A3918-HDR-scaled.webp",
    ],
  },
  {
    month: "December 2024",
    images: [
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2025/07/22084612/2K6A3953-HDR-scaled.webp",
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2025/07/22084542/2K6A3897-HDR-scaled.webp",
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2025/07/22084548/2K6A3911-HDR-scaled.webp",
    ],
  },
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

export default function ParkwayConstructionUpdatePage() {
  const [activeMonth, setActiveMonth] = useState(PARKWAY_GALLERY[0].month);
  const activeGallery = useMemo(
    () => PARKWAY_GALLERY.find((item) => item.month === activeMonth) ?? PARKWAY_GALLERY[0],
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
            aria-label="Construction Update: Parkway by Prestige One"
          />
          <div className="po-destination-hero-overlay" aria-hidden="true" />
          <div className="po-destination-hero-frame">
            <div className="container po-cu-hero-title-wrap">
              <p className="po-cu-hero-kicker">Construction Updates</p>
              <h1 id="construction-update-title" className="po-destination-hero-title po-cu-hero-title">
                Construction Update: Parkway by Prestige One
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
                    <p>Parkway by Prestige One</p>
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
            <section className="po-cu-gallery-section" aria-labelledby="po-cu-gallery-title">
              <h2 id="po-cu-gallery-title" className="po-cu-gallery-heading">
                Construction Progress Gallery
              </h2>
            </section>

            <div className="po-cu-month-cover-grid" aria-label="Construction update months">
              {PARKWAY_GALLERY.map((month) => (
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

