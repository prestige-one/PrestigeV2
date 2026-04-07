"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import SiteHeader from "@/layouts/SiteHeader";
import SiteFooterBlock from "@/layouts/SiteFooterBlock";
import FinalContactForm from "@/components/common/final-contact/FinalContactForm";
import {
  ProjectGalleryImageCard,
  ProjectImageGalleryLightbox,
  type ProjectGalleryItem,
} from "@/components/projects/project-page/ProjectImageGalleryLightbox";
import { LocaleAmenityCard } from "@/components/projects/project-page/LocaleAmenityCard";

type AmenityVideoRow = {
  label: string;
  video: string;
  poster?: string;
};

const HERO_IMG =
  "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2025/07/07161026/Berkeley-Square-Kids-Area-Night-scaled.webp";
const HILTON_FALLBACK_IMG =
  "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2026/03/14144431/HILTON-NIGHT-VIEW-1.webp";

const PDF = {
  brochure: "/project-documents",
  projectDoc: "/project-documents",
  factSheet: "/project-documents",
};

const MORE_DETAILS = "https://prestigeone.ae/projects/berkeley-square-south/";
const CONSTRUCTION_UPDATES = "/construction-updates";

const MAP_EMBED_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57726.250386632615!2d55.271532549999996!3d25.2742637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f4384740a5241%3A0xe6d78cfd14c6ada3!2sMadinat%20Dubai%20Al%20Melaheyah%20-%20Dubai!5e0!3m2!1sen!2sae!4v1775290787017!5m2!1sen!2sae";

const amenityVideos: AmenityVideoRow[] = [
  {
    label: "Indoor Kids's Play Area",
    video:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2025/07/11153418/indoor-play-area.mp4",
    poster: HERO_IMG,
  },
  {
    label: "Mini Golf",
    video:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/19162717/2311733_Golf_Club_1280x720.mp4",
    poster: HERO_IMG,
  },
  {
    label: "Covered Football Court",
    video:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2025/07/11152602/indoor-football.mp4",
    poster: HERO_IMG,
  },
  {
    label: "Courtyard Pool",
    video:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2025/07/11152928/courtyard-pool.mp4",
    poster: HERO_IMG,
  },
  {
    label: "Padel Court",
    video:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2025/07/10135932/padel-court.mp4",
    poster: HERO_IMG,
  },
  {
    label: "Prestige Fitness Center",
    video:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2025/02/24103754/Fintess-center.mp4",
    poster: HERO_IMG,
  },
  {
    label: "Outdoor Cinema",
    video:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2025/02/24105431/7022819_Couples_Love_1280x720.mp4",
    poster: HERO_IMG,
  },
  {
    label: "Prestige One Clubhouse",
    video:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/25090936/clublounge.mp4",
    poster: HERO_IMG,
  },
];

const berkeleyGalleryItems: ProjectGalleryItem[] = [
  {
    src: "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2025/07/08093454/Berkeley-Square-2BR-Living-Room-02-scaled.webp",
    caption: "Living Area",
  },
  {
    src: "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2025/07/08093254/Berkeley-Square-kitchen.webp",
    caption: "Kitchen",
  },
  {
    src: "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2025/07/08093231/Berkeley-Square-3BR-Bathroom-scaled.webp",
    caption: "Bathroom",
  },
  {
    src: "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2025/07/08093300/Berkeley-Square-Podcast-Room-scaled.webp",
    caption: "Podcast",
  },
  {
    src: "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2025/07/08093312/Gym-4-scaled.webp",
    caption: "Gym",
  },
  {
    src: "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2025/07/08093318/Kids-play-area-1-scaled.webp",
    caption: "Little Explorers' Zone",
  },
];

const berkeleyInteriorGallery = berkeleyGalleryItems.slice(0, 3);
const berkeleyOutdoorGallery = berkeleyGalleryItems.slice(3, 6);
const berkeleyFullWidthBuilding =
  "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2025/07/08093239/Berkeley-Square-Birds-Eye-View-scaled.webp";

const surroundingsPlaces = [
  {
    title: "Circle Mall",
    text: "Moments away, offering fine grocers, dining options, and retail with ease.",
    image: "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2025/07/08094043/about.png",
  },
  {
    title: "Cinepolis Cinema",
    text: "A premium theatre experience is just around the corner, with plush seating and curated film selection.",
    image:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2025/07/08095101/1698216352131Circla-Mall-Deluxe-1120x400-1.jpg",
  },
];

const schools = [
  {
    name: "JSS International School",
    body: "A well-established Indian curriculum school offering CBSE education just minutes away.",
  },
  {
    name: "Sunmarke School",
    body: "A British curriculum school known for academic excellence and innovative learning.",
  },
  {
    name: "Nord Anglia International School",
    body: "Globally recognized with a premium British curriculum, located a short drive from JVC.",
  },
];

const hospitals = [
  {
    name: "Emirates Hospital Day Surgery & Medical Center",
    body: "Specialist-led healthcare with a focus on outpatient procedures and family wellness.",
  },
  {
    name: "Right Health Karama Medical Centre",
    body: "Affordable, quality healthcare is located within easy reach of Berkeley Square.",
  },
  {
    name: "Aster Clinic",
    body: "Reliable and accessible medical services are available within the neighbourhood.",
  },
];

function ResourcePdfIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" width="26" height="26" aria-hidden>
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        d="M8.5 3.5h7l3 3V20a1 1 0 01-1 1h-9a1 1 0 01-1-1v-16a1 1 0 011-1z"
      />
      <path d="M8.5 3.5v4H14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path
        d="M12 11v6m0 0l-2.5-2.5M12 17l2.5-2.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ResourceExternalIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" width="26" height="26" aria-hidden>
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7 17L17 7M17 7H9M17 7v8"
      />
    </svg>
  );
}

function AmenityVideoTile({ label, video, poster }: AmenityVideoRow) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.muted = true;
    void el.play().catch(() => {});
  }, [video]);

  return (
    <article className="po-project-page-amenity-tile">
      <span className="po-project-page-amenity-top-label">{label}</span>
      <div className="po-project-page-amenity-tile-media">
        <video ref={ref} className="po-project-page-amenity-tile-video" poster={poster} muted loop playsInline autoPlay preload="auto">
          <source src={video} type="video/mp4" />
        </video>
        <div className="po-project-page-amenity-tile-scrim" aria-hidden="true" />
      </div>
    </article>
  );
}

const BerkeleySquareSouthProjectPage = () => {
  const [galleryIndex, setGalleryIndex] = useState<number | null>(null);

  return (
    <>
      <SiteHeader />

      <section className="po-project-page-hero">
        <div className="po-project-page-hero-media">
          <img src={HERO_IMG} alt="Berkeley Square South" />
          <div className="po-project-page-hero-overlay" />
        </div>
        <div className="po-project-page-hero-content">
          <p className="po-project-page-hero-eyebrow">
            <Link href="/projects">Projects</Link>
          </p>
          <h1>Berkeley Square South</h1>
          <p className="po-project-page-hero-lead">
            Designed for modern living with exceptional amenities, refined interiors, and seamless neighborhood access.
          </p>
          <div className="po-project-page-hero-actions">
            <a className="po-project-page-btn po-project-page-btn--light" href="#register-interest">
              Register Interest
            </a>
            <a className="po-project-page-btn po-project-page-btn--ghost" href="#signature">
              Discover
            </a>
          </div>
        </div>
      </section>

      <section className="po-project-page-resource-strip" aria-label="Project resources">
        <div className="container">
          <div className="po-project-page-resource-grid" role="group">
            <a href={PDF.brochure} className="po-project-page-resource-link">
              <ResourcePdfIcon className="po-project-page-resource-icon" />
              <span className="po-project-page-resource-copy">
                <span className="po-project-page-resource-kicker">Download</span>
                <span className="po-project-page-resource-value">Brochure</span>
              </span>
            </a>
            <a href={PDF.projectDoc} className="po-project-page-resource-link">
              <ResourcePdfIcon className="po-project-page-resource-icon" />
              <span className="po-project-page-resource-copy">
                <span className="po-project-page-resource-kicker">Download</span>
                <span className="po-project-page-resource-value">Project document</span>
              </span>
            </a>
            <a href={PDF.factSheet} className="po-project-page-resource-link">
              <ResourcePdfIcon className="po-project-page-resource-icon" />
              <span className="po-project-page-resource-copy">
                <span className="po-project-page-resource-kicker">Download</span>
                <span className="po-project-page-resource-value">Fact sheet</span>
              </span>
            </a>
            <a href={MORE_DETAILS} target="_blank" rel="noopener noreferrer" className="po-project-page-resource-link">
              <ResourceExternalIcon className="po-project-page-resource-icon" />
              <span className="po-project-page-resource-copy">
                <span className="po-project-page-resource-kicker">Visit</span>
                <span className="po-project-page-resource-value">More details</span>
              </span>
            </a>
          </div>
        </div>
      </section>

      <section id="signature" className="po-project-page-signature">
        <div className="container">
          <h2 className="po-project-page-signature-title">Not Just Well-Placed, Well-Chosen</h2>
          <p className="po-project-page-signature-text">
            Berkeley Square South brings together thoughtful architecture, lifestyle amenities, and a connected setting in one
            refined address. Every detail is considered to support modern routines while elevating everyday living.
          </p>
        </div>
      </section>

      <section className="po-project-page-amenities" aria-labelledby="berkeley-amenities-heading">
        <div className="container po-project-page-amenities-intro">
          <p className="po-project-page-section-kicker">Berkeley Square South</p>
          <h2 id="berkeley-amenities-heading" className="po-project-page-section-title">
            Amenities
          </h2>
          <p className="po-project-page-section-sub">A curated collection of spaces for wellness, play, and social living.</p>
        </div>
        <div className="po-project-page-amenities-fullbleed">
          <div className="po-project-page-amenities-masonry">
            {amenityVideos.map((item) => (
              <AmenityVideoTile key={item.label} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="po-project-page-gallery-section" aria-labelledby="berkeley-interior-heading">
        <div className="container">
          <h2 id="berkeley-interior-heading" className="po-project-page-gallery-title">
            Quietly Placed, Clearly Considered
          </h2>
          <p className="po-project-page-gallery-lead">Internal features - refined layouts and premium finishes.</p>
          <div className="po-project-page-gallery-grid">
            {berkeleyInteriorGallery.map((item, i) => (
              <ProjectGalleryImageCard key={item.src} item={item} index={i} onOpen={setGalleryIndex} />
            ))}
          </div>
        </div>
      </section>

      <section className="po-project-page-building-wide" aria-label="Berkeley Square South - building exterior">
        <img src={berkeleyFullWidthBuilding} alt="Berkeley Square South - building" className="po-project-page-building-wide-img" loading="lazy" />
      </section>

      <section className="po-project-page-gallery-section po-project-page-gallery-section--compact" aria-labelledby="berkeley-outdoor-heading">
        <div className="container">
          <h2 id="berkeley-outdoor-heading" className="po-project-page-gallery-title po-project-page-gallery-title--sm">
            Outdoor living
          </h2>
          <p className="po-project-page-gallery-lead">Podcast room, gym, and little explorers' zone.</p>
          <div className="po-project-page-gallery-grid">
            {berkeleyOutdoorGallery.map((item, i) => (
              <ProjectGalleryImageCard key={item.src} item={item} index={i + 3} onOpen={setGalleryIndex} />
            ))}
          </div>
        </div>
      </section>

      <ProjectImageGalleryLightbox
        items={berkeleyGalleryItems}
        activeIndex={galleryIndex}
        onClose={() => setGalleryIndex(null)}
        onGoTo={setGalleryIndex}
      />

      <section className="po-project-page-surroundings-intro" aria-labelledby="berkeley-surroundings-heading">
        <div className="container">
          <h2 id="berkeley-surroundings-heading" className="po-project-page-surroundings-intro-title">
            Surroundings That Echo the Quiet Within
          </h2>
          <p className="po-project-page-surroundings-intro-text">
            Positioned in a well-connected neighborhood, Berkeley Square South places everyday essentials and leisure moments
            within easy reach while preserving the calm and character of premium residential living.
          </p>
        </div>
      </section>

      {surroundingsPlaces.map((place, index) => (
        <section
          key={place.title}
          className={`po-project-page-place-strip ${index % 2 === 0 ? "po-project-page-place-strip--text-left" : "po-project-page-place-strip--text-right"}`}
          style={{ backgroundImage: `url(${place.image})` }}
          aria-label={place.title}
        >
          <div className="po-project-page-place-strip-gradient" aria-hidden="true" />
          <div className="container po-project-page-place-strip-inner">
            <div className="po-project-page-place-copy">
              <h3>{place.title}</h3>
              <p>{place.text}</p>
            </div>
          </div>
        </section>
      ))}

      <section className="po-project-page-nearby" aria-labelledby="schools-heading">
        <div className="container">
          <div className="po-project-page-nearby-block">
            <h2 id="schools-heading" className="po-project-page-nearby-title">
              Schools
            </h2>
            <div className="po-project-page-nearby-grid">
              {schools.map((item, i) => (
                <LocaleAmenityCard key={item.name} index={i + 1} title={item.name} body={item.body} kind="school" />
              ))}
            </div>
          </div>
          <div className="po-project-page-nearby-block po-project-page-nearby-block--follow" aria-labelledby="hospitals-heading">
            <h2 id="hospitals-heading" className="po-project-page-nearby-title">
              Hospitals
            </h2>
            <div className="po-project-page-nearby-grid">
              {hospitals.map((item, i) => (
                <LocaleAmenityCard key={item.name} index={i + 1} title={item.name} body={item.body} kind="hospital" />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="po-project-page-map" aria-label="Map: JVC, Dubai">
        <iframe
          src={MAP_EMBED_SRC}
          title="Google Map - JVC, Dubai"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>

      <section className="po-project-page-construction" aria-labelledby="construction-cta-heading">
        <div className="container po-project-page-construction-inner">
          <h2 id="construction-cta-heading" className="po-project-page-construction-title">
            Stay updated with our construction progress
          </h2>
          <a href={CONSTRUCTION_UPDATES} className="po-project-page-construction-cta">
            More updates
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path
                d="M5 11L11 5M11 5H6M11 5V10"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </section>

      <section id="register-interest" className="po-project-page-register">
        <div className="container">
          <h2 className="po-project-page-register-title">Have any questions? Let&apos;s connect.</h2>
          <p className="po-project-page-register-lead">Register your interest and our team will get back to you.</p>
          <FinalContactForm defaultProject="Berkeley Square South" />
        </div>
      </section>

      <SiteFooterBlock />
    </>
  );
};

export default BerkeleySquareSouthProjectPage;
