"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import HeaderOne from "@/layouts/headers/HeaderOne";
import FooterOne from "@/layouts/footers/FooterOne";
import FinalContactForm from "@/components/homes/home/FinalContactForm";
import {
  parseHiltonAmenityVideosTxt,
  type HiltonAmenityVideoRow,
} from "@/lib/parseHiltonAmenityVideosTxt";

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

function AmenityVideoTile({ label, video, poster, videoWidth, videoHeight }: HiltonAmenityVideoRow) {
  const ref = useRef<HTMLVideoElement>(null);
  const posterSrc = poster || HERO_IMG;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.muted = true;
    void el.play().catch(() => {});
  }, [video]);

  return (
    <article className="po-hilton-amenity-tile">
      <span className="po-hilton-amenity-top-label">{label}</span>
      <div
        className="po-hilton-amenity-tile-media"
        style={{ aspectRatio: `${videoWidth} / ${videoHeight}` }}
      >
        <video
          ref={ref}
          className="po-hilton-amenity-tile-video"
          poster={posterSrc}
          muted
          loop
          playsInline
          autoPlay
          preload="auto"
        >
          <source src={video} type="video/mp4" />
        </video>
        <div className="po-hilton-amenity-tile-scrim" aria-hidden="true" />
      </div>
    </article>
  );
}

const HiltonProjectPage = () => {
  const [amenityVideos, setAmenityVideos] = useState<HiltonAmenityVideoRow[]>(FALLBACK_AMENITY_VIDEOS);

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
          <div className="po-hilton-doc-bar" role="group" aria-label="Project downloads and links">
            <a href={PDF.brochure} target="_blank" rel="noopener noreferrer" className="po-hilton-doc-btn">
              <span className="po-hilton-doc-btn-text">Brochure</span>
              <svg className="po-hilton-doc-btn-icon" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v11m0 0l-4-4m4 4l4-4M5 19h14"
                />
              </svg>
            </a>
            <a href={PDF.projectDoc} target="_blank" rel="noopener noreferrer" className="po-hilton-doc-btn">
              <span className="po-hilton-doc-btn-text">Project document</span>
              <svg className="po-hilton-doc-btn-icon" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v11m0 0l-4-4m4 4l4-4M5 19h14"
                />
              </svg>
            </a>
            <a href={PDF.factSheet} target="_blank" rel="noopener noreferrer" className="po-hilton-doc-btn">
              <span className="po-hilton-doc-btn-text">Fact sheet</span>
              <svg className="po-hilton-doc-btn-icon" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v11m0 0l-4-4m4 4l4-4M5 19h14"
                />
              </svg>
            </a>
            <a
              href={MORE_DETAILS}
              target="_blank"
              rel="noopener noreferrer"
              className="po-hilton-doc-btn po-hilton-doc-btn--muted"
            >
              <span className="po-hilton-doc-btn-text">More details</span>
              <svg className="po-hilton-doc-btn-icon" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 17L17 7M17 7H9M17 7v8"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <section className="po-hilton-amenities" aria-labelledby="hilton-amenities-heading">
        <div className="container po-hilton-amenities-intro">
          <p className="po-hilton-section-kicker">Hilton Residences</p>
          <h2 id="hilton-amenities-heading" className="po-hilton-section-title">
            Amenities
          </h2>
          <p className="po-hilton-section-sub">
            A curated collection of spaces for wellness, leisure, and everyday luxury.
          </p>
        </div>
        <div className="po-hilton-amenities-fullbleed">
          <div className="po-hilton-amenities-masonry">
            {amenityVideos.map((item, index) => (
              <AmenityVideoTile key={`${item.label}-${index}`} {...item} />
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
