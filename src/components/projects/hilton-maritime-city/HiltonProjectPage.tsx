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
import {
  parseHiltonAmenityVideosTxt,
  type HiltonAmenityVideoRow,
} from "@/lib/parseHiltonAmenityVideosTxt";
import { LocaleAmenityCard } from "@/components/projects/project-page/LocaleAmenityCard";

const HERO_IMG =
  "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2026/03/14144431/HILTON-NIGHT-VIEW-1.webp";
const HERO_IMG_ALT =
  "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2026/03/12140403/HILTON-NIGHT-VIEW-900.webp";

const PDF = {
  brochure:
    "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2026/03/14145154/Brochure-Hilton-Residences-Dubai-Maritime-City_compressed.pdf",
  projectDoc:
    "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2026/03/14145140/Interim-Disclosure-Statement_Prestige-One-Residences.pdf",
  factSheet:
    "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2026/03/14145134/Factsheet-Hilton-Residences-Dubai-Maritime-City-1.pdf",
};

const MORE_DETAILS = "https://hiltonresidencesdubaimaritimecity.ae/";
const CONSTRUCTION_UPDATES =
  "https://prestigeone.ae/construction-update-hilton-residences-by-prestige-one/";

const DMC_MAP_EMBED_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57726.250386632615!2d55.271532549999996!3d25.2742637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f4384740a5241%3A0xe6d78cfd14c6ada3!2sMadinat%20Dubai%20Al%20Melaheyah%20-%20Dubai!5e0!3m2!1sen!2sae!4v1775290787017!5m2!1sen!2sae";

/** Default list if `/data/hilton-amenities-videos.txt` is missing or empty. */
const FALLBACK_AMENITY_VIDEOS: HiltonAmenityVideoRow[] = [
  {
    label: "Outdoor Cinema",
    video:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2022/08/26080805/1115750_Cinema_Man_1280x720-1.mp4",
    poster: HERO_IMG,
    videoWidth: 1280,
    videoHeight: 720,
  },
  {
    label: "Outdoor Kids’ Play Area",
    video: "https://prestigeone.ae/wp-content/uploads/2022/08/5080670_Caucasian_Girl_1280x720.mp4",
    poster: HERO_IMG,
    videoWidth: 1280,
    videoHeight: 720,
  },
  {
    label: "BBQ Deck",
    video: "https://prestigeone.ae/wp-content/uploads/2022/08/1104331_1080p_4k_1280x720.mp4",
    poster: HERO_IMG,
    videoWidth: 1280,
    videoHeight: 720,
  },
  {
    label: "Fitness Center",
    video: "https://prestigeone.ae/wp-content/uploads/2022/08/4730225_Fitness_Workout_1280x720.mp4",
    poster: HERO_IMG,
    videoWidth: 1280,
    videoHeight: 720,
  },
  {
    label: "City View",
    video:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2026/03/16103247/city-view.mp4",
    poster: HERO_IMG,
    videoWidth: 1920,
    videoHeight: 1080,
  },
  {
    label: "Infinity Skyline Pool",
    video:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/12/25145038/Skyline-Infinity-Pool.mp4",
    poster: HERO_IMG_ALT,
    videoWidth: 1920,
    videoHeight: 1080,
  },
  {
    label: "Multi-Sports Court",
    video: "https://prestigeone.ae/wp-content/uploads/2022/08/1115557_Hobbies_Tennis_1280x720.mp4",
    poster: HERO_IMG,
    videoWidth: 1280,
    videoHeight: 720,
  },
  {
    label: "Running Track",
    video: "https://prestigeone.ae/wp-content/uploads/2022/08/1115348_Woman_Indoor_1280x720.mp4",
    poster: HERO_IMG,
    videoWidth: 1280,
    videoHeight: 720,
  },
  {
    label: "Indoor Play Area",
    video:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2026/03/16103831/Coworkers_play-ping-pong.mp4",
    poster: HERO_IMG_ALT,
    videoWidth: 1920,
    videoHeight: 1080,
  },
  {
    label: "Transportation",
    video:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2026/03/16111538/transport1.mp4",
    poster: HERO_IMG,
    videoWidth: 1920,
    videoHeight: 1080,
  },
];

/** Local Hilton Renders — place files under public/assets/img/v2/project-featured-images/project-hilton/ */
const HILTON_LOCAL_IMG = "/assets/img/v2/project-featured-images/project-hilton";

const hiltonGalleryItems: ProjectGalleryItem[] = [
  {
    src: `${HILTON_LOCAL_IMG}/2BED_Living-Dining-Kitchen.webp`,
    caption: "2 Bedroom — Living, Dining & Kitchen",
  },
  {
    src: `${HILTON_LOCAL_IMG}/25770800_Prestige_SPL-3BED_M-Bathroom__.webp`,
    caption: "3 Bedroom — Master Bathroom",
  },
  {
    src: `${HILTON_LOCAL_IMG}/Duplex_Master-Bedroom.webp`,
    caption: "Duplex Master Bedroom",
  },
  {
    src: `${HILTON_LOCAL_IMG}/25770800-Prestige_V24_ALFRESCO-LOUNGE_20251113.webp`,
    caption: "Alfresco Lounge",
  },
  {
    src: `${HILTON_LOCAL_IMG}/25770800-Prestige_V26_Outdoor-Gym_20251113-1.webp`,
    caption: "Outdoor Gym",
  },
  {
    src: `${HILTON_LOCAL_IMG}/pool.webp`,
    caption: "Pool",
  },
];

const hiltonInteriorGallery = hiltonGalleryItems.slice(0, 3);
const hiltonOutdoorGallery = hiltonGalleryItems.slice(3, 6);
const hiltonFullWidthBuilding = `${HILTON_LOCAL_IMG}/Prestige_V-07_20251110.webp`;

const surroundingsPlaces = [
  {
    title: "Mall of the Emirates",
    text: "Just 15 minutes away, this iconic shopping mall features a mix of luxury retail, fine dining, and Ski Dubai.",
    image:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2022/08/24071624/mallfoemirates-scaled.webp",
  },
  {
    title: "Dubai International Airport (DXB)",
    text: "~ 10-15 Minutes away",
    image:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2026/03/14142038/dubai-airport-scaled-1.webp",
  },
  {
    title: "Downtown Dubai",
    text: "~ 5-10 Minutes away",
    image:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2026/03/14153946/futuristic-landscape-dubai1.webp",
  },
  {
    title: "Jumeirah Beach Residence (JBR)",
    text: "A 10-15 minute drive takes you to JBR, a popular beachfront area with cafés, shopping, and family-friendly activities.",
    image:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2022/08/20113532/WhatsApp-Image-2024-09-20-at-5.01.04%E2%80%AFPM.jpeg",
  },
];

const schools = [
  {
    name: "Jumeira Baccalaureate School",
    body: "International Baccalaureate school on Al Wasl Rd (Jumeirah 1), a short drive from DMC; strong continuum from PYP to DP.",
  },
  {
    name: "St. Mary's Catholic High School (UK curriculum, Oud Metha)",
    body: "Established in 1968; long-standing British curriculum school in Oud Metha / Bur Dubai, within easy reach of DMC.",
  },
  {
    name: "The Indian High School (CBSE, Oud Metha)",
    body: "Flagship CBSE campus beside Oud Metha Metro; popular for K-12 with long track record in Dubai.",
  }
];

const hospitals = [
  {
    name: "Rashid Hospital (Oud Metha)",
    body: "Major DHA tertiary/trauma hospital serving Dubai; one of the city's most established facilities, a short drive from DMC.",
  },
  {
    name: "Aster Hospital, Mankhool (Bur Dubai)",
    body: "24-hour multispecialty hospital near Sharaf DG, Kuwait Rd, Al Mankhool; convenient access from DMC via Port Rashid.",
  },
  {
    name: "Iranian Hospital (Jumeirah 1)",
    body: "General hospital on Al Wasl Rd (Jumeirah 1), close to DMC and the beachfront.",
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

function AmenityVideoTile({ label, video, poster }: HiltonAmenityVideoRow) {
  const ref = useRef<HTMLVideoElement>(null);
  const posterSrc = poster || HERO_IMG;

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
        <video
          ref={ref}
          className="po-project-page-amenity-tile-video"
          poster={posterSrc}
          muted
          loop
          playsInline
          autoPlay
          preload="auto"
        >
          <source src={video} type="video/mp4" />
        </video>
        <div className="po-project-page-amenity-tile-scrim" aria-hidden="true" />
      </div>
    </article>
  );
}

const HiltonProjectPage = () => {
  const [amenityVideos, setAmenityVideos] = useState<HiltonAmenityVideoRow[]>(FALLBACK_AMENITY_VIDEOS);
  const [galleryIndex, setGalleryIndex] = useState<number | null>(null);

  useEffect(() => {
    let cancelled = false;
    void fetch("/data/hilton-amenities-videos.txt")
      .then((res) => (res.ok ? res.text() : Promise.reject(new Error("no txt"))))
      .then((text) => {
        const parsed = parseHiltonAmenityVideosTxt(text);
        if (!cancelled && parsed.length > 0) setAmenityVideos(parsed);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <>
      <SiteHeader />

      <section className="po-project-page-hero">
        <div className="po-project-page-hero-media">
          <img src={HERO_IMG} alt="Hilton Residences Dubai Maritime City" />
          <div className="po-project-page-hero-overlay" />
        </div>
        <div className="po-project-page-hero-content">
          <p className="po-project-page-hero-eyebrow">
            <Link href="/projects">Projects</Link>
          </p>
          <h1>Hilton Residences Dubai Maritime City</h1>
          <p className="po-project-page-hero-lead">
            Life at Hilton Residences by Prestige One is a balance of elegance and ease.
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
            <a href={PDF.brochure} target="_blank" rel="noopener noreferrer" className="po-project-page-resource-link">
              <ResourcePdfIcon className="po-project-page-resource-icon" />
              <span className="po-project-page-resource-copy">
                <span className="po-project-page-resource-kicker">Download</span>
                <span className="po-project-page-resource-value">Brochure</span>
              </span>
            </a>
            <a href={PDF.projectDoc} target="_blank" rel="noopener noreferrer" className="po-project-page-resource-link">
              <ResourcePdfIcon className="po-project-page-resource-icon" />
              <span className="po-project-page-resource-copy">
                <span className="po-project-page-resource-kicker">Download</span>
                <span className="po-project-page-resource-value">Project document</span>
              </span>
            </a>
            <a href={PDF.factSheet} target="_blank" rel="noopener noreferrer" className="po-project-page-resource-link">
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
          <h2 className="po-project-page-signature-title">The Signature of Grace Rising in Dubai Maritime City</h2>
          <p className="po-project-page-signature-text">
            Life at Hilton Residences by Prestige One is a balance of elegance and ease. Each day unfolds against the sea,
            the skyline, and the rhythm of a city alive with possibility. It is a life shaped by impeccable design, enriched
            by thoughtful amenities, and elevated by the trusted Hilton name.
          </p>
        </div>
      </section>

      <section className="po-project-page-amenities" aria-labelledby="hilton-amenities-heading">
        <div className="container po-project-page-amenities-intro">
          <p className="po-project-page-section-kicker">Hilton Residences</p>
          <h2 id="hilton-amenities-heading" className="po-project-page-section-title">
            Amenities
          </h2>
          <p className="po-project-page-section-sub">
            A curated collection of spaces for wellness, leisure, and everyday luxury.
          </p>
        </div>
        <div className="po-project-page-amenities-fullbleed">
          <div className="po-project-page-amenities-masonry">
            {amenityVideos.map((item, index) => (
              <AmenityVideoTile key={`${item.label}-${index}`} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="po-project-page-gallery-section" aria-labelledby="hilton-interior-heading">
        <div className="container">
          <h2 id="hilton-interior-heading" className="po-project-page-gallery-title">
            Quietly Placed, Clearly Considered
          </h2>
          <p className="po-project-page-gallery-lead">Internal features — refined layouts and premium finishes.</p>
          <div className="po-project-page-gallery-grid">
            {hiltonInteriorGallery.map((item, i) => (
              <ProjectGalleryImageCard key={item.src} item={item} index={i} onOpen={setGalleryIndex} />
            ))}
          </div>
        </div>
      </section>

      <section className="po-project-page-building-wide" aria-label="Hilton Residences building exterior">
        <img
          src={hiltonFullWidthBuilding}
          alt="Hilton Residences Dubai Maritime City — building"
          className="po-project-page-building-wide-img"
          loading="lazy"
        />
      </section>

      <section className="po-project-page-gallery-section po-project-page-gallery-section--compact" aria-labelledby="hilton-outdoor-heading">
        <div className="container">
          <h2 id="hilton-outdoor-heading" className="po-project-page-gallery-title po-project-page-gallery-title--sm">
            Outdoor living
          </h2>
          <p className="po-project-page-gallery-lead">Alfresco lounge, fitness, and pool — designed for the Dubai climate.</p>
          <div className="po-project-page-gallery-grid">
            {hiltonOutdoorGallery.map((item, i) => (
              <ProjectGalleryImageCard key={item.src} item={item} index={i + 3} onOpen={setGalleryIndex} />
            ))}
          </div>
        </div>
      </section>

      <ProjectImageGalleryLightbox
        items={hiltonGalleryItems}
        activeIndex={galleryIndex}
        onClose={() => setGalleryIndex(null)}
        onGoTo={setGalleryIndex}
      />

      <section className="po-project-page-surroundings-intro" aria-labelledby="hilton-surroundings-heading">
        <div className="container">
          <h2 id="hilton-surroundings-heading" className="po-project-page-surroundings-intro-title">
            Surroundings That Echo the Quiet Within
          </h2>
          <p className="po-project-page-surroundings-intro-text">
            Prestige One is shaping one of the most defining landmarks in Dubai Maritime City — our largest and most ambitious
            waterfront development to date. Designed with precision, elevated hospitality, and a vision that matches the
            district&apos;s future, this project stands as a statement of progress and a new benchmark for luxury coastal living
            in Dubai.
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

      <section className="po-project-page-map" aria-label="Map: Madinat Dubai Al Melaheyah, Dubai">
        <iframe
          src={DMC_MAP_EMBED_SRC}
          title="Google Map — Madinat Dubai Al Melaheyah, Dubai"
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
          <a
            href={CONSTRUCTION_UPDATES}
            target="_blank"
            rel="noopener noreferrer"
            className="po-project-page-construction-cta"
          >
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
          <FinalContactForm defaultProject="Hilton Residences Dubai Maritime City" />
        </div>
      </section>

      <SiteFooterBlock />
    </>
  );
};

export default HiltonProjectPage;
