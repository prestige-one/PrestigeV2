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

const HERO_IMG = "/assets/images/v2/project-featured-images/The-Place-Banner.webp";

const PDF = {
  brochure: "/project-documents",
  projectDoc: "/project-documents",
  factSheet: "/project-documents",
};

const CONSTRUCTION_UPDATES = "/construction-update-the-one-by-prestige-one/";
const LOCATION_DESTINATION = "/our-destinations/barsha-heights/";
const MAP_EMBED_SRC = "https://www.google.com/maps?q=The+One+by+Prestige+One+Barsha+Heights&output=embed";

const PROJECT_WIDE_VIDEO = "/assets/images/v2/project-features-videos/Luxury-Canal-Residences-by-Prestige-One.mp4";

const amenityVideos: AmenityVideoRow[] = [
  {
    label: "Reception Cafe",
    video:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/19171429/1111722_Cleaning_Rag_1280x720.mp4",
    poster: HERO_IMG,
  },
  {
    label: "Cafe Area",
    video:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/19171848/1117550_Drink_Drinking_1280x720.mp4",
    poster: HERO_IMG,
  },
  {
    label: "Rooftop Cigar Lounge",
    video:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/19172150/6324180_People_Playing_1280x720.mp4",
    poster: HERO_IMG,
  },
  {
    label: "Fitness Center",
    video: "https://prestigeone.ae/wp-content/uploads/2022/08/4730225_Fitness_Workout_1280x720.mp4",
    poster: HERO_IMG,
  },
  {
    label: "Yoga Area",
    video:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/19171610/5123870_Person_People_1280x720.mp4",
    poster: HERO_IMG,
  },
  {
    label: "Botanical Garden",
    video:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/26072549/5014578_Confident_Businessman_1280x720-1.mp4",
    poster: HERO_IMG,
  },
  {
    label: "Virtual Golf Studio",
    video:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/19172436/6003789_Man_African-American_1280x720.mp4",
    poster: HERO_IMG,
  },
  {
    label: "Wellness Spa",
    video:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/19172606/4911200_Couple_Pool_1280x720.mp4",
    poster: HERO_IMG,
  },
];

const galleryItems: ProjectGalleryItem[] = [
  {
    src: "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/15152456/4.webp",
    caption: "Cafe Area",
  },
  {
    src: "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/15152443/Owners-lounge_Final_4.webp",
    caption: "Owners Lounge",
  },
  {
    src: "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/15152447/9th-Floor-Spa-2.webp",
    caption: "Spa View",
  },
  {
    src: "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/15152558/5.webp",
    caption: "Reception Cafe",
  },
  {
    src: "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/15152435/PRE_ONE_GYM_F1.webp",
    caption: "Gym",
  },
  {
    src: "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/15152440/PRE_ONE_CIGAR_LOUNGE_F2-scaled.webp",
    caption: "Cigar Lounge",
  },
];

const interiorGallery = galleryItems.slice(0, 3);
const outdoorGallery = galleryItems.slice(3, 6);
const fullWidthBuilding = "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/15064222/One_02-scaled.jpg";

const surroundingsPlaces = [
  {
    title: "Dubai Internet City",
    text: "A major tech and media hub located just minutes away.",
    image:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/26060400/dubai-internet-city-scaled.webp",
  },
  {
    title: "Dubai Marina",
    text: "A vibrant waterfront community, perfect for after-work relaxation, reachable in 15 minutes.",
    image:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/26060533/shutterstock_2474900723-scaled.webp",
  },
  {
    title: "Jumeirah Beach",
    text: "A scenic escape, just a 15-minute drive from The One.",
    image:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/26060727/shutterstock_2428390301-scaled.webp",
  },
  {
    title: "Mall of the Emirates",
    text: "A premier shopping destination, located approximately 10 minutes away.",
    image:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2022/08/24071624/mallfoemirates-scaled.webp",
  },
  {
    title: "Dubai Miracle Garden",
    text: "A stunning floral display, about 15 minutes away, showcasing over 150 million flowers in various designs.",
    image:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/24072755/shutterstock_2445800541-scaled.webp",
  },
];

const schools = [
  {
    name: "GEMS Dubai American Academy",
    body: "A leading American curriculum school in Al Barsha with strong university pathways and broad co-curricular programs.",
  },
  {
    name: "GEMS Wellington International School",
    body: "A well-established British curriculum school in Al Sufouh, known for strong academics and modern learning facilities.",
  },
  {
    name: "American School of Dubai",
    body: "An accredited US curriculum school in Al Barsha serving PK-12, recognized for student development and global readiness.",
  },
];

const hospitals = [
  {
    name: "Saudi German Hospital Dubai",
    body: "A major multi-specialty hospital near Barsha Heights, providing 24/7 emergency care and a full range of specialist services.",
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

const TheOneProjectPage = () => {
  const [galleryIndex, setGalleryIndex] = useState<number | null>(null);

  return (
    <>
      <SiteHeader />

      <section className="po-project-page-hero">
        <div className="po-project-page-hero-media">
          <img src={HERO_IMG} alt="The One by Prestige One" />
          <div className="po-project-page-hero-overlay" />
        </div>
        <div className="po-project-page-hero-content">
          <p className="po-project-page-hero-eyebrow">
            <Link href="/projects">Projects</Link>
          </p>
          <h1>The One</h1>
          <p className="po-project-page-hero-lead">
            A modern commercial destination in Barsha Heights designed for ambitious businesses and bold ideas.
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
                <span className="po-project-page-resource-value">TBA</span>
              </span>
            </div>
            <a href={LOCATION_DESTINATION} target="_blank" rel="noopener noreferrer" className="po-project-page-resource-link">
              <ResourceExternalIcon className="po-project-page-resource-icon" />
              <span className="po-project-page-resource-copy">
                <span className="po-project-page-resource-kicker">Location</span>
                <span className="po-project-page-resource-value">Barsha Heights, Dubai</span>
              </span>
            </a>
          </div>
        </div>
      </section>

      <section id="signature" className="po-project-page-signature">
        <div className="container">
          <h2 className="po-project-page-signature-title">Building Legacies in Barsha Heights</h2>
          <p className="po-project-page-signature-text">
            The One by Prestige One introduces a refined commercial environment that blends hospitality-inspired design with
            future-ready workspaces. From premium lounges and wellness amenities to a strategically connected location, this
            address is crafted for professionals and enterprises that value presence, performance, and prestige.
          </p>
        </div>
      </section>

      <section className="po-project-page-amenities" aria-labelledby="the-one-amenities-heading">
        <div className="container po-project-page-amenities-intro">
          <p className="po-project-page-section-kicker">The One</p>
          <h2 id="the-one-amenities-heading" className="po-project-page-section-title">
            Amenities
          </h2>
          <p className="po-project-page-section-sub">Curated spaces to elevate work-life balance for residents and visitors.</p>
        </div>
        <div className="po-project-page-amenities-fullbleed">
          <div className="po-project-page-amenities-masonry">
            {amenityVideos.map((item) => (
              <AmenityVideoTile key={item.label} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="po-project-page-gallery-section" aria-labelledby="the-one-interior-heading">
        <div className="container">
          <h2 id="the-one-interior-heading" className="po-project-page-gallery-title">
            Building Legacies in Barsha Heights
          </h2>
          <p className="po-project-page-gallery-lead">Signature interiors designed for comfort, status, and productivity.</p>
          <div className="po-project-page-gallery-grid">
            {interiorGallery.map((item, i) => (
              <ProjectGalleryImageCard key={item.src} item={item} index={i} onOpen={setGalleryIndex} />
            ))}
          </div>
        </div>
      </section>

      <section className="po-project-page-building-wide" aria-label="The One - building exterior">
        <img src={fullWidthBuilding} alt="The One - building" className="po-project-page-building-wide-img" loading="lazy" />
      </section>

      <section className="po-project-page-gallery-section po-project-page-gallery-section--compact" aria-labelledby="the-one-outdoor-heading">
        <div className="container">
          <h2 id="the-one-outdoor-heading" className="po-project-page-gallery-title po-project-page-gallery-title--sm">
            Distinctive lifestyle spaces
          </h2>
          <p className="po-project-page-gallery-lead">Reception cafe, gym, and cigar lounge.</p>
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

      <section className="po-project-page-wide-video" aria-label="The One video">
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
            <source src={PROJECT_WIDE_VIDEO} type="video/mp4" />
          </video>
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

      <section className="po-project-page-map" aria-label="Map: The One by Prestige One">
        <iframe
          src={MAP_EMBED_SRC}
          title="Google Map - The One by Prestige One"
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
          <FinalContactForm defaultProject="The One" />
        </div>
      </section>

      <SiteFooterBlock />
    </>
  );
};

export default TheOneProjectPage;

