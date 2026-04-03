"use client";

import Link from "next/link";
import { useCallback, useRef } from "react";
import HeaderOne from "@/layouts/headers/HeaderOne";
import FooterOne from "@/layouts/footers/FooterOne";
import FinalContactForm from "@/components/homes/home/FinalContactForm";

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

/** Short prestigeone.ae clips for motion; posters keep Hilton / project visuals. */
const amenityMasonry: {
  label: string;
  video: string;
  poster: string;
  size: "tall" | "wide" | "std";
}[] = [
  {
    label: "Outdoor Cinema",
    video:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2026/03/16133840/sanctuary-teaserx.mp4",
    poster: HERO_IMG,
    size: "tall",
  },
  {
    label: "Infinity Skyline Pool",
    video:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2026/03/24175446/waterway-by-prestige-one.mp4",
    poster: HERO_IMG_ALT,
    size: "std",
  },
  {
    label: "Multi-Sports Court",
    video:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2025/02/24154314/The-Boulevard-Marketing-Video.mp4",
    poster:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2025/02/24094547/harbour-1.webp",
    size: "std",
  },
  {
    label: "Prestige Fitness Center",
    video:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/11/20110936/HD_Size_Parkway_Event_Launch-2.mp4",
    poster:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/27164232/Front-Exterior-3-scaled.webp",
    size: "tall",
  },
  {
    label: "Running Track",
    video:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2026/03/24175733/The-Place-by-prestige-optimized.mp4",
    poster: HERO_IMG,
    size: "wide",
  },
  {
    label: "Outdoor Kids’ Play Area",
    video:
      "https://s3.me-central-1.amazonaws.com/files/prestigeone.ae/wp-content/uploads/2026/03/24175459/SEASIDE_by-prestige.mp4",
    poster:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2025/02/24094547/harbour-1.webp",
    size: "std",
  },
  {
    label: "BBQ Deck",
    video:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/11/20125930/The-One-Compressed-1.mp4",
    poster: HERO_IMG_ALT,
    size: "std",
  },
  {
    label: "City View",
    video:
      "https://s3.me-central-1.amazonaws.com/files/prestigeone.ae/wp-content/uploads/2024/09/25091708/cleanend_1920x1080_P1_VISTA-Property-Video.mp4",
    poster:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2026/03/14144431/HILTON-NIGHT-VIEW-1.webp",
    size: "std",
  },
];

const featureTrio = [
  {
    title: "Outdoor Lounge",
    image: HERO_IMG,
  },
  {
    title: "Fitness Center",
    image:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/27164232/Front-Exterior-3-scaled.webp",
  },
  {
    title: "Infinity Outdoor Pool",
    image:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2025/02/24094547/harbour-1.webp",
  },
];

const interiorGallery = [
  {
    title: "Duplex Master Bedroom",
    image:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2026/03/12140403/HILTON-NIGHT-VIEW-900.webp",
  },
  {
    title: "Living Dining Kitchen Area",
    image: HERO_IMG,
  },
  {
    title: "Bathroom",
    image:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2025/03/08085032/04-Facade-scaled.webp",
  },
];

const advantages = [
  {
    title: "Mall of the Emirates",
    text: "Just 15 minutes away, this iconic shopping mall features a mix of luxury retail, fine dining, and Ski Dubai.",
  },
  {
    title: "Dubai International Airport (DXB)",
    text: "~ 10–15 minutes away.",
  },
  {
    title: "Downtown Dubai",
    text: "~ 5–10 minutes away.",
  },
  {
    title: "Jumeirah Beach Residence (JBR)",
    text: "A 10–15 minute drive takes you to JBR, a popular beachfront area with cafés, shopping, and family-friendly activities.",
  },
];

const schools = [
  {
    name: "Jumeira Baccalaureate School",
    body: "International Baccalaureate school on Al Wasl Rd (Jumeirah 1), a short drive from DMC; strong continuum from PYP to DP.",
  },
  {
    name: "St. Mary’s Catholic High School (UK curriculum, Oud Metha)",
    body: "Established in 1968; long-standing British curriculum school in Oud Metha / Bur Dubai, within easy reach of DMC.",
  },
  {
    name: "The Indian High School (CBSE, Oud Metha)",
    body: "Flagship CBSE campus beside Oud Metha Metro; popular for K–12 with long track record in Dubai.",
  },
  {
    name: "Dubai Gem Private School",
    body: "UK National Curriculum from FS to Sixth Form (IGCSEs and A-Levels). Well-established campus in Oud Metha, about a 10–15-minute drive from Dubai Maritime City via Al Mina / Sheikh Rashid Rd.",
  },
];

const hospitals = [
  {
    name: "Rashid Hospital (Oud Metha)",
    body: "Major DHA tertiary/trauma hospital serving Dubai; one of the city’s most established facilities, a short drive from DMC.",
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

function MasonryVideoTile({
  label,
  video,
  poster,
  size,
}: {
  label: string;
  video: string;
  poster: string;
  size: "tall" | "wide" | "std";
}) {
  const ref = useRef<HTMLVideoElement>(null);

  const play = useCallback(() => {
    void ref.current?.play();
  }, []);

  const reset = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.pause();
    el.currentTime = 0;
  }, []);

  return (
    <div
      className={`po-hilton-masonry-cell po-hilton-masonry-cell--${size}`}
      tabIndex={0}
      onMouseEnter={play}
      onMouseLeave={reset}
      onFocus={play}
      onBlur={reset}
    >
      <video
        ref={ref}
        className="po-hilton-masonry-video"
        poster={poster}
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source src={video} type="video/mp4" />
      </video>
      <div className="po-hilton-masonry-scrim" aria-hidden="true" />
      <p className="po-hilton-masonry-label">{label}</p>
    </div>
  );
}

const HiltonProjectPage = () => {
  return (
    <>
      <HeaderOne />

      <section className="po-hilton-hero">
        <div className="po-hilton-hero-media">
          <img src={HERO_IMG} alt="Hilton Residences Dubai Maritime City" />
          <div className="po-hilton-hero-overlay" />
        </div>
        <div className="po-hilton-hero-content">
          <p className="po-hilton-hero-eyebrow">
            <Link href="/projects">Projects</Link>
          </p>
          <h1>Hilton Residences Dubai Maritime City</h1>
          <p className="po-hilton-hero-lead">
            Life at Hilton Residences by Prestige One is a balance of elegance and ease.
          </p>
          <div className="po-hilton-hero-actions">
            <a className="po-hilton-btn po-hilton-btn--light" href="#register-interest">
              Register Interest
            </a>
            <a className="po-hilton-btn po-hilton-btn--ghost" href="#signature">
              Discover
            </a>
          </div>
        </div>
      </section>

      <section id="signature" className="po-hilton-signature">
        <div className="container">
          <h2 className="po-hilton-signature-title">The Signature of Grace Rising in Dubai Maritime City</h2>
          <p className="po-hilton-signature-text">
            Life at Hilton Residences by Prestige One is a balance of elegance and ease. Each day unfolds against the sea,
            the skyline, and the rhythm of a city alive with possibility. It is a life shaped by impeccable design, enriched
            by thoughtful amenities, and elevated by the trusted Hilton name.
          </p>
          <div className="po-hilton-doc-links">
            <a href={PDF.brochure} target="_blank" rel="noopener noreferrer" className="po-hilton-doc-link">
              <span>Brochure</span>
              <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  d="M12 3v12M8 11l4 4 4-4M5 21h14"
                />
              </svg>
            </a>
            <a href={PDF.projectDoc} target="_blank" rel="noopener noreferrer" className="po-hilton-doc-link">
              <span>Project document</span>
              <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  d="M12 3v12M8 11l4 4 4-4M5 21h14"
                />
              </svg>
            </a>
            <a href={PDF.factSheet} target="_blank" rel="noopener noreferrer" className="po-hilton-doc-link">
              <span>Fact sheet</span>
              <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  d="M12 3v12M8 11l4 4 4-4M5 21h14"
                />
              </svg>
            </a>
            <a href={MORE_DETAILS} target="_blank" rel="noopener noreferrer" className="po-hilton-doc-link po-hilton-doc-link--emphasis">
              <span>More details</span>
              <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  d="M7 17L17 7M17 7H9M17 7V15"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <section className="po-hilton-amenities" aria-labelledby="hilton-amenities-heading">
        <div className="container">
          <p className="po-hilton-section-kicker">Hilton Residences</p>
          <h2 id="hilton-amenities-heading" className="po-hilton-section-title">
            Amenities
          </h2>
          <p className="po-hilton-section-sub">
            A curated collection of spaces — hover tiles to preview motion. Designed for wellness, leisure, and everyday
            luxury.
          </p>
          <div className="po-hilton-masonry">
            {amenityMasonry.map((item) => (
              <MasonryVideoTile key={item.label} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="po-hilton-feature-trio" aria-label="Signature amenity highlights">
        <div className="container">
          <div className="po-hilton-trio-grid">
            {featureTrio.map((item) => (
              <article key={item.title} className="po-hilton-trio-card">
                <div className="po-hilton-trio-media">
                  <img src={item.image} alt="" />
                </div>
                <h3>{item.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="po-hilton-interior" aria-labelledby="hilton-interior-heading">
        <div className="container">
          <h2 id="hilton-interior-heading" className="po-hilton-interior-title">
            Quietly Placed, Clearly Considered
          </h2>
          <div className="po-hilton-interior-grid">
            {interiorGallery.map((item) => (
              <figure key={item.title} className="po-hilton-interior-figure">
                <div className="po-hilton-interior-img-wrap">
                  <img src={item.image} alt={item.title} />
                </div>
                <figcaption>{item.title}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="po-hilton-surroundings">
        <div className="container">
          <h2 className="po-hilton-surroundings-title">Surroundings That Echo the Quiet Within</h2>
          <p className="po-hilton-surroundings-text">
            Prestige One is shaping one of the most defining landmarks in Dubai Maritime City — our largest and most ambitious
            waterfront development to date. Designed with precision, elevated hospitality, and a vision that matches the
            district&apos;s future, this project stands as a statement of progress and a new benchmark for luxury coastal living
            in Dubai.
          </p>
        </div>
      </section>

      <section className="po-hilton-advantages" aria-labelledby="hilton-advantages-heading">
        <div className="container">
          <p className="po-hilton-section-kicker">Advantages</p>
          <h2 id="hilton-advantages-heading" className="po-hilton-section-title">
            Connected living
          </h2>
          <div className="po-hilton-advantages-grid">
            {advantages.map((item) => (
              <article key={item.title} className="po-hilton-advantage-card">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="po-hilton-sh" aria-labelledby="schools-heading">
        <div className="container">
          <h2 id="schools-heading" className="po-hilton-sh-title">
            Schools
          </h2>
          <div className="po-hilton-sh-grid">
            {schools.map((item) => (
              <article key={item.name} className="po-hilton-sh-card">
                <h3>{item.name}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="po-hilton-sh po-hilton-sh--hospitals" aria-labelledby="hospitals-heading">
        <div className="container">
          <h2 id="hospitals-heading" className="po-hilton-sh-title">
            Hospitals
          </h2>
          <div className="po-hilton-sh-grid po-hilton-sh-grid--3">
            {hospitals.map((item) => (
              <article key={item.name} className="po-hilton-sh-card">
                <h3>{item.name}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="po-hilton-construction">
        <div className="container po-hilton-construction-inner">
          <div>
            <h2 className="po-hilton-construction-title">Construction updates</h2>
            <p className="po-hilton-construction-meta">February 2026</p>
          </div>
          <a href={CONSTRUCTION_UPDATES} target="_blank" rel="noopener noreferrer" className="po-hilton-btn po-hilton-btn--light">
            More updates
          </a>
        </div>
      </section>

      <section id="register-interest" className="po-hilton-register">
        <div className="container">
          <h2 className="po-hilton-register-title">Have any questions? Let&apos;s connect.</h2>
          <p className="po-hilton-register-lead">Register your interest and our team will get back to you.</p>
          <FinalContactForm defaultProject="Hilton Residences Dubai Maritime City" />
        </div>
      </section>

      <FooterOne />
    </>
  );
};

export default HiltonProjectPage;
