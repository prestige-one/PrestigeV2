"use client";

import { useEffect } from "react";

export type ProjectGalleryItem = {
  src: string;
  caption: string;
};

function EyeIcon() {
  return (
    <svg className="po-project-page-gallery-eye-svg" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2 12s4.2-6 10-6 10 6 10 6-4.2 6-10 6-10-6-10-6Z"
      />
      <circle cx="12" cy="12" r="2.8" fill="none" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function ProjectGalleryImageCard({
  item,
  index,
  onOpen,
}: {
  item: ProjectGalleryItem;
  index: number;
  onOpen: (i: number) => void;
}) {
  return (
    <button
      type="button"
      className="po-project-page-gallery-card"
      onClick={() => onOpen(index)}
      aria-label={`View ${item.caption} in gallery`}
    >
      <div className="po-project-page-gallery-card-inner">
        <img src={item.src} alt="" className="po-project-page-gallery-card-img" loading="lazy" />
        <div className="po-project-page-gallery-caption-bar">
          <span className="po-project-page-gallery-caption-text">{item.caption}</span>
          <span className="po-project-page-gallery-view-btn">
            <EyeIcon />
          </span>
        </div>
      </div>
    </button>
  );
}

type LightboxProps = {
  items: ProjectGalleryItem[];
  activeIndex: number | null;
  onClose: () => void;
  onGoTo: (index: number) => void;
};

export function ProjectImageGalleryLightbox({ items, activeIndex, onClose, onGoTo }: LightboxProps) {
  useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") {
        onGoTo(activeIndex <= 0 ? items.length - 1 : activeIndex - 1);
      }
      if (e.key === "ArrowRight") {
        onGoTo(activeIndex >= items.length - 1 ? 0 : activeIndex + 1);
      }
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [activeIndex, items.length, onClose, onGoTo]);

  if (activeIndex === null || !items[activeIndex]) return null;

  const item = items[activeIndex];

  return (
    <div
      className="po-project-page-lightbox"
      role="dialog"
      aria-modal="true"
      aria-label="Image gallery"
    >
      <button type="button" className="po-project-page-lightbox-backdrop" onClick={onClose} aria-label="Close gallery" />
      <button type="button" className="po-project-page-lightbox-close" onClick={onClose} aria-label="Close">
        ×
      </button>
      <div className="po-project-page-lightbox-inner">
        <button
          type="button"
          className="po-project-page-lightbox-nav po-project-page-lightbox-nav--prev"
          onClick={() => onGoTo(activeIndex <= 0 ? items.length - 1 : activeIndex - 1)}
          aria-label="Previous image"
        >
          ‹
        </button>
        <div className="po-project-page-lightbox-stage">
          <img src={item.src} alt={item.caption} className="po-project-page-lightbox-img" />
          <p className="po-project-page-lightbox-caption">{item.caption}</p>
        </div>
        <button
          type="button"
          className="po-project-page-lightbox-nav po-project-page-lightbox-nav--next"
          onClick={() => onGoTo(activeIndex >= items.length - 1 ? 0 : activeIndex + 1)}
          aria-label="Next image"
        >
          ›
        </button>
      </div>
    </div>
  );
}
