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

const HERO_IMG = "/assets/images/v2/project-featured-images/Coastal-Haven.webp";

const PDF = {
  brochure: "/project-documents",
  projectDoc: "/project-documents",
  factSheet: "/project-documents",
};

const MORE_DETAILS = "/our-destinations/dubai-islands/";
const CONSTRUCTION_UPDATES = "/construction-updates";

const MAP_EMBED_SRC =
  "https://www.google.com/maps?q=Luxury+Canal+Residences+by+Prestige+Harbour+Dubai+Islands&output=embed";

const COASTAL_HAVEN_WIDE_VIDEO =
  "/assets/images/v2/project-features-videos/Coastal-Haven-by-Prestige-Harbour.mp4";

const amenityVideos: AmenityVideoRow[] = [
  {
    label: "Children's Adventure Park",
    video:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2025/02/24110021/5339572_Coll_wavebreak_Adventure_1280x720.mp4",
    poster: HERO_IMG,
  },
  {
    label: "Jacuzzi",
    video:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/19172606/4911200_Couple_Pool_1280x720.mp4",
    poster: HERO_IMG,
  },
  {
    label: "Prestige Owners' Lounge",
    video:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/25090936/clublounge.mp4",
    poster: HERO_IMG,
  },
  {
    label: "Badminton Court",
    video:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2025/02/24104256/badminton-court.mp4",
    poster: HERO_IMG,
  },
  {
    label: "Prestige Spa",
    video:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/19185604/5586861_Coll_wavebreak_Summertime_1280x720.mp4",
    poster: HERO_IMG,
  },
  {
    label: "Outdoor Cinema",
    video:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2025/02/24105431/7022819_Couples_Love_1280x720.mp4",
    poster: HERO_IMG,
  },
  {
    label: "Infinity Pool",
    video:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/12/25145038/Skyline-Infinity-Pool.mp4",
    poster: HERO_IMG,
  },
  {
    label: "Prestige Fitness Centre",
    video:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2025/02/24103754/Fintess-center.mp4",
    poster: HERO_IMG,
  },
];

const galleryItems: ProjectGalleryItem[] = [
  {
    src: "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2025/02/24113218/04-3-Bedroom-living-dining-scaled.webp",
    caption: "Living Area",
  },
  {
    src: "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2025/02/24114607/06-3-Bedroom-Kitchen-scaled.webp",
    caption: "Kitchen",
  },
  {
    src: "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2025/02/24114641/Bathroom-scaled.webp",
    caption: "Bathroom",
  },
  {
    src: "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2025/02/24115743/01-Game-Room-View-scaled.webp",
    caption: "Game room",
  },
  {
    src: "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2025/02/24120710/03-Gym-scaled.webp",
    caption: "Gym",
  },
  {
    src: "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2025/02/24120736/04-Kids-Play-Area-scaled.webp",
    caption: "Little Explorers' Zone",
  },
];

const interiorGallery = galleryItems.slice(0, 3);
const outdoorGallery = galleryItems.slice(3, 6);
const fullWidthBuilding =
  "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2025/02/24114928/02-Facade-scaled.webp";

const surroundingsPlaces = [
  {
    title: "Al Mamzar Beach Park",
    text: "Pristine beaches and lush parks for family fun.",
    image:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2025/02/24122058/blue-flag-beach-scaled.webp",
  },
  {
    title: "Dubai Islands Mall",
    text: "A premier retail and dining hub with global brands.",
    image:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2025/02/24142034/Deira-mall-scaled.webp",
  },
  {
    title: "Souk Al Marfa",
    text: "A vibrant waterfront market for diverse shopping.",
    image:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2025/02/24142515/Souk-Al-Marfa-scaled.webp",
  },
  {
    title: "Dubai Dolphinarium",
    text: "Interactive dolphin and seal shows for all ages.",
    image:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2025/02/24142507/Dubai-Dolphinarium-scaled.webp",
  },
];

const schools = [
  {
    name: "Dubai International Academy",
    body: "A leading IB curriculum school fostering global excellence.",
  },
  {
    name: "GEMS Wellington Academy",
    body: "Renowned for its academic achievements and holistic education.",
  },
  {
    name: "Deira International School",
    body: "An established K-12 school offering the British curriculum with strong academics and modern campus facilities.",
  },
];

const hospitals = [
  {
    name: "King's College Hospital London",
    body: "World-class healthcare with UK-trained specialists.",
  },
  {
    name: "Mediclinic City Hospital",
    body: "Comprehensive medical services with state-of-the-art technology.",
  },
  {
    name: "Dubai Hospital",
    body: "A major multidisciplinary public hospital in Deira with emergency and specialist services close to Dubai Islands.",
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

function CalendarPdfIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
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

const CoastalHavenProjectPage = () => {
  const [galleryIndex, setGalleryIndex] = useState<number | null>(null);

  return (
    <>
      <SiteHeader />

      <section className="po-project-page-hero">
        <div className="po-project-page-hero-media">
          <img src={HERO_IMG} alt="Coastal Haven" />
          <div className="po-project-page-hero-overlay" />
        </div>
        <div className="po-project-page-hero-content">
          <p className="po-project-page-hero-eyebrow">
            <Link href="/projects">Projects</Link>
          </p>
          <h1>Coastal Haven</h1>
          <p className="po-project-page-hero-lead">
            Refined waterfront residences inspired by the rhythm of island life.
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
            <div className="po-project-page-resource-link" aria-label="Completion date">
              <CalendarPdfIcon className="po-project-page-resource-icon" />
              <span className="po-project-page-resource-copy">
                <span className="po-project-page-resource-kicker">Completion</span>
                <span className="po-project-page-resource-value">November 2027</span>
              </span>
            </div>
            <a href={MORE_DETAILS} target="_blank" rel="noopener noreferrer" className="po-project-page-resource-link">
              <ResourceExternalIcon className="po-project-page-resource-icon" />
              <span className="po-project-page-resource-copy">
                <span className="po-project-page-resource-kicker">Location</span>
                <span className="po-project-page-resource-value">Dubai Islands, Dubai</span>
              </span>
            </a>
          </div>
        </div>
      </section>

      <section id="signature" className="po-project-page-signature">
        <div className="container">
          <h2 className="po-project-page-signature-title">THE ERA OF COASTAL LIVING</h2>
          <p className="po-project-page-signature-text">
            Coastal Haven by Prestige Harbour is where the art of coastal living reaches new heights. With sweeping views of
            the shimmering harbour, this G+2P+12 masterpiece is an example of modern luxury living. Every residence is crafted
            to celebrate the serene beauty of the Gulf, offering a life that flows as effortlessly as the tides.
          </p>
        </div>
      </section>

      <section className="po-project-page-amenities" aria-labelledby="coastal-haven-amenities-heading">
        <div className="container po-project-page-amenities-intro">
          <p className="po-project-page-section-kicker">Coastal Haven</p>
          <h2 id="coastal-haven-amenities-heading" className="po-project-page-section-title">
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

      <section className="po-project-page-gallery-section" aria-labelledby="coastal-haven-interior-heading">
        <div className="container">
          <h2 id="coastal-haven-interior-heading" className="po-project-page-gallery-title">
            Luxury by the Coast
          </h2>
          <p className="po-project-page-gallery-lead">Internal features - refined layouts and premium finishes.</p>
          <div className="po-project-page-gallery-grid">
            {interiorGallery.map((item, i) => (
              <ProjectGalleryImageCard key={item.src} item={item} index={i} onOpen={setGalleryIndex} />
            ))}
          </div>
        </div>
      </section>

      <section className="po-project-page-building-wide" aria-label="Coastal Haven - building exterior">
        <img src={fullWidthBuilding} alt="Coastal Haven - building" className="po-project-page-building-wide-img" loading="lazy" />
      </section>

      <section className="po-project-page-gallery-section po-project-page-gallery-section--compact" aria-labelledby="coastal-haven-outdoor-heading">
        <div className="container">
          <h2 id="coastal-haven-outdoor-heading" className="po-project-page-gallery-title po-project-page-gallery-title--sm">
            Outdoor living
          </h2>
          <p className="po-project-page-gallery-lead">Game room, gym, and little explorers&apos; zone.</p>
          <div className="po-project-page-gallery-grid">
            {outdoorGallery.map((item, i) => (
              <ProjectGalleryImageCard key={item.src} item={item} index={i + 3} onOpen={setGalleryIndex} />
            ))}
          </div>
        </div>
      </section>

      <ProjectImageGalleryLightbox
        items={galleryItems}
        activeIndex={galleryIndex}
        onClose={() => setGalleryIndex(null)}
        onGoTo={setGalleryIndex}
      />

      <section className="po-project-page-wide-video" aria-label="Coastal Haven video">
        <div className="container">
          <video
            className="po-project-page-wide-video-el"
            poster={HERO_IMG}
            muted
            loop
            playsInline
            autoPlay
            preload="metadata"
          >
            <source src={COASTAL_HAVEN_WIDE_VIDEO} type="video/mp4" />
          </video>
        </div>
      </section>

      <section className="po-project-page-surroundings-intro" aria-labelledby="coastal-haven-surroundings-heading">
        <div className="container">
          <h2 id="coastal-haven-surroundings-heading" className="po-project-page-surroundings-intro-title">
            THE EPITOME OF ISLAND LUXURY
          </h2>
          <p className="po-project-page-surroundings-intro-text">
            Dubai Islands is the crown jewel of coastal living, an interconnected oasis of five islands where golden beaches,
            lush landscapes, and world-class amenities meet. Designed as part of Dubai&apos;s 2040 Urban Master Plan, this
            destination offers a seamless blend of tranquility and vibrancy, making it the ultimate coastal retreat.
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

      <section className="po-project-page-map" aria-label="Map: Coastal Haven by Prestige Harbour">
        <iframe
          src={MAP_EMBED_SRC}
          title="Coastal Haven by Prestige Harbour"
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
          <FinalContactForm defaultProject="Coastal Haven" />
        </div>
      </section>

      <SiteFooterBlock />
    </>
  );
};

export default CoastalHavenProjectPage;

