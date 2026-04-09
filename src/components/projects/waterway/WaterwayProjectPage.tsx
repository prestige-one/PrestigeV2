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

const HERO_VIDEO =
  "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2026/03/24175446/waterway-by-prestige-one.mp4";
const HERO_POSTER =
  "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/19170015/Waterway-pic-2-scaled-2.webp";

const PDF = {
  brochure: "/project-documents",
  projectDoc: "/project-documents",
  factSheet: "/project-documents",
};

const CONSTRUCTION_UPDATES = "/construction-update-the-waterway-by-prestige-one/";
const MAP_EMBED_SRC = "https://www.google.com/maps?q=The+Waterway+by+Prestige+One&output=embed";

const amenityVideos: AmenityVideoRow[] = [
  {
    label: "Outdoor Cinema",
    video:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2022/08/26080805/1115750_Cinema_Man_1280x720-1.mp4",
    poster: HERO_POSTER,
  },
  {
    label: "Rock Climbing Wall",
    video:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/19164954/5946135_Man_Practice_1280x720.mp4",
    poster: HERO_POSTER,
  },
  {
    label: "Rooftop BBQ & Lounge Area",
    video: "https://prestigeone.ae/wp-content/uploads/2022/08/1104331_1080p_4k_1280x720.mp4",
    poster: HERO_POSTER,
  },
  {
    label: "Rooftop Gym",
    video: "https://prestigeone.ae/wp-content/uploads/2022/08/4730225_Fitness_Workout_1280x720.mp4",
    poster: HERO_POSTER,
  },
  {
    label: "Rooftop Swimming Pool",
    video:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/19164528/2082411_Back_View_1280x720.mp4",
    poster: HERO_POSTER,
  },
  {
    label: "2 X Outdoor Lounges With Water Features",
    video:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/19165139/6011933_Lifeguard_Pool_1280x720.mp4",
    poster: HERO_POSTER,
  },
  {
    label: "Men's/Women's Changing Rooms",
    video:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/25100248/4763869_Room_Dressing_1280x720-1.mp4",
    poster: HERO_POSTER,
  },
  {
    label: "Grand Lobby With Water Features",
    video:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/19165716/5068603_City_Travel_1280x720.mp4",
    poster: HERO_POSTER,
  },
];

const galleryItems: ProjectGalleryItem[] = [
  {
    src: "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/19165905/The-waterway-living.jpg",
    caption: "Living",
  },
  {
    src: "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/19165858/The-waterway-bathroom.jpg",
    caption: "Bathroom",
  },
  {
    src: "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/19165900/The-waterway-bedroom.jpg",
    caption: "Bedroom",
  },
  {
    src: "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/19165902/The-waterway-living-1.jpg",
    caption: "Living",
  },
];

const primaryGallery = galleryItems.slice(0, 2);
const secondaryGallery = galleryItems.slice(2, 4);
const fullWidthBuilding =
  "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/19170015/Waterway-pic-2-scaled-2.webp";

const surroundingsPlaces = [
  {
    title: "Meydan Racecourse",
    text: "The home of the Dubai World Cup, the world’s richest horse race, and a prestigious venue for horse racing enthusiasts.",
    image:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/24072437/shutterstock_92699545-scaled.webp",
  },
  {
    title: "Dubai Opera",
    text: "A cultural hub nearby that hosts world-class performances including opera, ballet, theatre, and concerts.",
    image:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/25100939/dubai-expo-2020-2024-07-29-19-46-34-utc-scaled.webp",
  },
  {
    title: "Dubai Design District (D3)",
    text: "A trendy destination for creatives with art galleries, boutiques, and stylish cafes within a short drive.",
    image:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/24072448/shutterstock_1235200291-scaled.webp",
  },
  {
    title: "Dubai Fountain",
    text: "Around 15 minutes away, the world’s largest choreographed fountain show at the base of Burj Khalifa.",
    image:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/24072457/shutterstock_2281359821-scaled.webp",
  },
  {
    title: "Ras Al Khor Wildlife Sanctuary",
    text: "A nearby nature reserve offering a peaceful escape and a large flamingo population during winter.",
    image:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/24072453/shutterstock_2366505949-scaled.webp",
  },
  {
    title: "Dubai Mall",
    text: "A short drive away, this mega shopping destination offers luxury brands, dining, and top attractions.",
    image:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/24072501/shutterstock_2166905569-scaled.webp",
  },
];

const schools = [
  {
    name: "North London Collegiate School",
    body: "Offers an IB curriculum and is known for rigorous academics and a strong emphasis on creativity.",
  },
  {
    name: "Hartland International School",
    body: "Located nearby, Hartland offers a British curriculum and focuses on the holistic development of students.",
  },
];

const hospitals = [
  {
    name: "Meydan One Health Clinic",
    body: "Located in the Meydan area, this clinic provides outpatient services and specialized treatment in a modern setting.",
  },
  {
    name: "King's College Hospital Dubai",
    body: "A leading medical center offering high-quality healthcare with strong clinical standards and patient care.",
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

const WaterwayProjectPage = () => {
  const [galleryIndex, setGalleryIndex] = useState<number | null>(null);

  return (
    <>
      <SiteHeader />

      <section className="po-project-page-hero">
        <div className="po-project-page-hero-media">
          <video className="po-project-page-hero-video" poster={HERO_POSTER} autoPlay muted loop playsInline preload="auto">
            <source src={HERO_VIDEO} type="video/mp4" />
          </video>
          <div className="po-project-page-hero-overlay" />
        </div>
        <div className="po-project-page-hero-content">
          <p className="po-project-page-hero-eyebrow">
            <Link href="/projects">Projects</Link>
          </p>
          <h1>The Waterway</h1>
          <p className="po-project-page-hero-lead">
            Nature-inspired living in Meydan Horizon with elegant residences, rooftop amenities, and calming lagoon-facing views.
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
              <ResourcePdfIcon className="po-project-page-resource-icon" />
              <span className="po-project-page-resource-copy">
                <span className="po-project-page-resource-kicker">Completion</span>
                <span className="po-project-page-resource-value">TBA</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section id="signature" className="po-project-page-signature">
        <div className="container">
          <h2 className="po-project-page-signature-title">AN ICONIC MASTERPIECE NEXT TO CRYSTAL LAGOONS</h2>
          <p className="po-project-page-signature-text">
            The Waterway by Prestige One, a G+20-floor building in Meydan Horizon, offers one and two-bedroom apartments that
            bring relaxation to the forefront. Overlooking serene lagoon views, it is designed for those who seek peace and quiet
            in a well-connected area. Life by the water is effortless, with leisure and recreation just moments away.
          </p>
        </div>
      </section>

      <section className="po-project-page-amenities" aria-labelledby="waterway-amenities-heading">
        <div className="container po-project-page-amenities-intro">
          <p className="po-project-page-section-kicker">The Waterway</p>
          <h2 id="waterway-amenities-heading" className="po-project-page-section-title">
            Amenities
          </h2>
          <p className="po-project-page-section-sub">Elevated lifestyle amenities designed around wellness and social spaces.</p>
        </div>
        <div className="po-project-page-amenities-fullbleed">
          <div className="po-project-page-amenities-masonry">
            {amenityVideos.map((item) => (
              <AmenityVideoTile key={item.label} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="po-project-page-gallery-section po-project-page-gallery-two-col" aria-labelledby="waterway-interior-heading">
        <div className="container">
          <h2 id="waterway-interior-heading" className="po-project-page-gallery-title">
            Make Nature Your Next-Door Neighbour
          </h2>
          <p className="po-project-page-gallery-lead">Two-column gallery layout tailored for The Waterway project.</p>
          <div className="po-project-page-gallery-grid">
            {primaryGallery.map((item, i) => (
              <ProjectGalleryImageCard key={item.src} item={item} index={i} onOpen={setGalleryIndex} />
            ))}
          </div>
        </div>
      </section>

      <section className="po-project-page-building-wide" aria-label="The Waterway - building exterior">
        <img src={fullWidthBuilding} alt="The Waterway - building" className="po-project-page-building-wide-img" loading="lazy" />
      </section>

      <section
        className="po-project-page-gallery-section po-project-page-gallery-section--compact po-project-page-gallery-two-col"
        aria-labelledby="waterway-outdoor-heading"
      >
        <div className="container">
          <h2 id="waterway-outdoor-heading" className="po-project-page-gallery-title po-project-page-gallery-title--sm">
            Refined private spaces
          </h2>
          <p className="po-project-page-gallery-lead">Bedroom and living views with warm material tones.</p>
          <div className="po-project-page-gallery-grid">
            {secondaryGallery.map((item, i) => (
              <ProjectGalleryImageCard key={item.src} item={item} index={i + 2} onOpen={setGalleryIndex} />
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

      <section className="po-project-page-surroundings-intro" aria-labelledby="waterway-neighborhood-heading">
        <div className="container">
          <p className="po-project-page-section-kicker">About Meydan Horizon</p>
          <h2 id="waterway-neighborhood-heading" className="po-project-page-surroundings-intro-title">
            THE NEIGHBORHOOD
          </h2>
          <p className="po-project-page-surroundings-intro-text">
            Meydan Horizon delivers a luxurious lifestyle with strong connectivity to nature and Dubai&apos;s key landmarks. The
            community is minutes from Meydan Racecourse and offers easy access to Downtown, DIFC, top schools, and healthcare.
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

      <section className="po-project-page-map" aria-label="Map: The Waterway by Prestige One">
        <iframe
          src={MAP_EMBED_SRC}
          title="Google Map - The Waterway by Prestige One"
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
          <FinalContactForm defaultProject="The Waterway" />
        </div>
      </section>

      <SiteFooterBlock />
    </>
  );
};

export default WaterwayProjectPage;

