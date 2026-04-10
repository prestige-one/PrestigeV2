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

const HERO_IMG = "/assets/images/v2/project-featured-images/NIGHT-4c-scaled.webp";

const PDF = {
  brochure: "/project-documents",
  projectDoc: "/project-documents",
  factSheet: "/project-documents",
};

const CONSTRUCTION_UPDATES = "/construction-update-the-boluevard-by-prestige-one/";
const LOCATION_DESTINATION = "/our-destinations/mohammed-bin-rashid-city/";

const MAP_EMBED_SRC =
  "https://maps.google.com/?cid=6376237623478448479&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYASAA&hl=en-US&source=embed";

const PROJECT_WIDE_VIDEO = "/assets/images/v2/project-features-videos/Luxury-Canal-Residences-by-Prestige-One.mp4";

const amenityVideos: AmenityVideoRow[] = [
  {
    label: "Creativity Studio",
    video:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/12/25141751/4913709_Adult_Art_1280x720-1.mp4",
    poster: HERO_IMG,
  },
  {
    label: "Gaming Zone",
    video:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/12/25142606/Gaming-Zone.mp4",
    poster: HERO_IMG,
  },
  {
    label: "Podcast Room",
    video:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/12/25144926/Podacast4.mp4",
    poster: HERO_IMG,
  },
  {
    label: "Gym & Yoga",
    video:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/12/25143910/yoga.mp4",
    poster: HERO_IMG,
  },
  {
    label: "Aqua Pool Bar",
    video:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/12/25143332/1104723_1080p_Enjoy_1280x720-1.mp4",
    poster: HERO_IMG,
  },
  {
    label: "Cinema Room",
    video:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/12/25144803/Indoor-Cinema.mp4",
    poster: HERO_IMG,
  },
  {
    label: "Infinity Pool",
    video:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/12/25145038/Skyline-Infinity-Pool.mp4",
    poster: HERO_IMG,
  },
  {
    label: "Kids' Play Area",
    video:
      "https://prestigeone.ae/wp-content/uploads/2022/08/1114155_Pupil_Preschool_1280x720.mp4",
    poster: HERO_IMG,
  },
];

const galleryItems: ProjectGalleryItem[] = [
  {
    src: "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/12/25151500/Living-scaled.webp",
    caption: "Living Area",
  },
  {
    src: "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/12/25151448/Kitchen-scaled.webp",
    caption: "Kitchen",
  },
  {
    src: "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/12/25151434/Bahtrrom-scaled.webp",
    caption: "Bathroom",
  },
  {
    src: "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/12/25151747/Art-room-scaled.webp",
    caption: "Art room",
  },
  {
    src: "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/12/25152120/Gameroom-scaled.webp",
    caption: "Game Room",
  },
  {
    src: "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/12/25152236/K2-scaled.webp",
    caption: "Kids Play Area",
  },
];

const interiorGallery = galleryItems.slice(0, 3);
const outdoorGallery = galleryItems.slice(3, 6);
const fullWidthBuilding =
  "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/12/25151616/6F-scaled.webp";

const surroundingsPlaces = [
  {
    title: "IMG Worlds of Adventure",
    text: "Unleash your inner child at the world's largest indoor theme park.",
    image:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/12/25152829/hfpqyV7B-IMG-Dubai-UAE.webp",
  },
  {
    title: "Global Village",
    text: "Experience a global cultural extravaganza with shopping, dining, and entertainment from around the world.",
    image:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/12/25153142/Global-Village-scaled.webp",
  },
  {
    title: "Dubai Miracle Garden",
    text: "Witness breathtaking floral displays and artistic installations in a stunning garden setting.",
    image:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/12/25153336/Dubai-Miracle-Garden-1-scaled.webp",
  },
  {
    title: "Hamdan Sports Complex",
    text: "A world-class venue hosting various sporting events and activities.",
    image:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/12/25161711/hamdan-sports-complex-poi.webp",
  },
  {
    title: "Meydan Racecourse",
    text: "Experience the thrill of horse racing at this iconic venue, home to the Dubai World Cup.",
    image:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/12/25161854/Meydan-Racecourse-scaled.webp",
  },
];

const schools = [
  {
    name: "GEMS FirstPoint School",
    body: "A reputable international school offering a British curriculum.",
  },
  {
    name: "Repton School Dubai",
    body: "A well-established school known for its academic excellence.",
  },
  {
    name: "The Aquila School",
    body: "A respected British curriculum school in the Dubailand corridor with a strong focus on holistic learning.",
  },
];

const hospitals = [
  {
    name: "Aster Clinic, Arabian Ranches",
    body: "A well-known clinic offering various medical services.",
  },
  {
    name: "Medcare Medical Centre",
    body: "A comprehensive hospital with advanced medical facilities.",
  },
  {
    name: "Fakeeh University Hospital",
    body: "A full-service tertiary hospital near Dubai Silicon Oasis offering specialist care and advanced diagnostics.",
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

const TheBoulevardProjectPage = () => {
  const [galleryIndex, setGalleryIndex] = useState<number | null>(null);

  return (
    <>
      <SiteHeader />

      <section className="po-project-page-hero">
        <div className="po-project-page-hero-media">
          <img src={HERO_IMG} alt="The Boulevard" />
          <div className="po-project-page-hero-overlay" />
        </div>
        <div className="po-project-page-hero-content">
          <p className="po-project-page-hero-eyebrow">
            <Link href="/projects">Projects</Link>
          </p>
          <h1>The Boulevard</h1>
          <p className="po-project-page-hero-lead">
            Bold, ambitious urban residences crafted for modern city life.
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
                <span className="po-project-page-resource-value">Mohammed Bin Rashid City, Dubai</span>
              </span>
            </a>
          </div>
        </div>
      </section>

      <section id="signature" className="po-project-page-signature">
        <div className="container">
          <h2 className="po-project-page-signature-title">A UNIQUE VISION IN URBAN DESIGN</h2>
          <p className="po-project-page-signature-text">
            A G+18 masterpiece of modern living, The Boulevard by Prestige One blends architectural distinction with a lifestyle
            of seamless comfort. Located at the heart of the Dubai Land Residence Complex, it offers an accessible address with
            wellness-focused amenities and an inviting community vibe.
          </p>
          <p className="po-project-page-signature-text">
            Designed for the bold and ambitious, The Boulevard blends city life with smart layouts, chic interiors, and elegant
            contemporary spaces. Every detail of The Boulevard reflects a commitment to luxury and a vibrant, forward-thinking
            lifestyle.
          </p>
        </div>
      </section>

      <section className="po-project-page-amenities" aria-labelledby="boulevard-amenities-heading">
        <div className="container po-project-page-amenities-intro">
          <p className="po-project-page-section-kicker">The Boulevard</p>
          <h2 id="boulevard-amenities-heading" className="po-project-page-section-title">
            Amenities
          </h2>
          <p className="po-project-page-section-sub">A complete lifestyle set of recreation, wellness, and social spaces.</p>
        </div>
        <div className="po-project-page-amenities-fullbleed">
          <div className="po-project-page-amenities-masonry">
            {amenityVideos.map((item) => (
              <AmenityVideoTile key={item.label} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="po-project-page-gallery-section" aria-labelledby="boulevard-interior-heading">
        <div className="container">
          <h2 id="boulevard-interior-heading" className="po-project-page-gallery-title">
            For The Bold and Ambitious
          </h2>
          <p className="po-project-page-gallery-lead">Internal features - contemporary layouts and sleek finishes.</p>
          <div className="po-project-page-gallery-grid">
            {interiorGallery.map((item, i) => (
              <ProjectGalleryImageCard key={item.src} item={item} index={i} onOpen={setGalleryIndex} />
            ))}
          </div>
        </div>
      </section>

      <section className="po-project-page-building-wide" aria-label="The Boulevard - building exterior">
        <img src={fullWidthBuilding} alt="The Boulevard - building" className="po-project-page-building-wide-img" loading="lazy" />
      </section>

      <section className="po-project-page-gallery-section po-project-page-gallery-section--compact" aria-labelledby="boulevard-outdoor-heading">
        <div className="container">
          <h2 id="boulevard-outdoor-heading" className="po-project-page-gallery-title po-project-page-gallery-title--sm">
            Creative spaces
          </h2>
          <p className="po-project-page-gallery-lead">Art room, game room, and kids play area.</p>
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

      <section className="po-project-page-wide-video" aria-label="The Boulevard video">
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

      <section className="po-project-page-surroundings-intro" aria-labelledby="boulevard-surroundings-heading">
        <div className="container">
          <h2 id="boulevard-surroundings-heading" className="po-project-page-surroundings-intro-title">
            THE NEIGHBORHOOD
          </h2>
          <p className="po-project-page-surroundings-intro-text">
            Escape the hustle and embrace a vibrant community at The Boulevard located at the center of Dubailand Residence
            Complex (DLRC). This dynamic neighborhood offers a perfect blend of modern living, family-friendly amenities, and
            convenient access to Dubai&apos;s top attractions. Discover your dream home in a thriving destination where comfort and
            convenience are the top priority.
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

      <section className="po-project-page-map" aria-label="Map: The Boulevard by Prestige One">
        <iframe
          src={MAP_EMBED_SRC}
          title="Google Map - The Boulevard by Prestige One"
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
          <FinalContactForm defaultProject="The Boulevard" />
        </div>
      </section>

      <SiteFooterBlock />
    </>
  );
};

export default TheBoulevardProjectPage;

