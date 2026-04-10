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

const HERO_VIDEO = "/assets/images/v2/project-features-videos/Sanctuary-Residential.mp4";

const HERO_IMG =
  "/assets/images/v2/project-featured-images/sanctuary-residential-exterior-view.webp";


const FALLBACK_IMG =
  "/assets/images/v2/project-featured-images/Front-Exterior-3-scaled.webp";

const SANCTUARY_LOCAL_IMG = "/assets/images/v2/project-featured-images/sanctuary";

const PDF = {
  brochure: "/project-documents",
  projectDoc: "/project-documents",
  factSheet: "/project-documents",
};

const MORE_DETAILS = "https://sanctuarybyprestigeone.ae/";
const CONSTRUCTION_UPDATES = "/construction-updates";

const MAP_EMBED_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57726.250386632615!2d55.271532549999996!3d25.2742637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f4384740a5241%3A0xe6d78cfd14c6ada3!2sMadinat%20Dubai%20Al%20Melaheyah%20-%20Dubai!5e0!3m2!1sen!2sae!4v1775290787017!5m2!1sen!2sae";

const amenityVideos: AmenityVideoRow[] = [
  {
    label: "Outdoor Cinema",
    video:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2022/08/26080805/1115750_Cinema_Man_1280x720-1.mp4",
    poster: FALLBACK_IMG,
  },
  {
    label: "Outdoor Kids' Play Area",
    video: "https://prestigeone.ae/wp-content/uploads/2022/08/5080670_Caucasian_Girl_1280x720.mp4",
    poster: FALLBACK_IMG,
  },
  {
    label: "BBQ Area",
    video: "https://prestigeone.ae/wp-content/uploads/2022/08/1104331_1080p_4k_1280x720.mp4",
    poster: FALLBACK_IMG,
  },
  {
    label: "Outdoor Fitness",
    video:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2026/03/16115628/outdoor-gym.mp4",
    poster: FALLBACK_IMG,
  },
  {
    label: "Swimming Pool & Kids' Pool",
    video: "https://prestigeone.ae/wp-content/uploads/2022/08/1470836_People_Leisure_1280x720.mp4",
    poster: FALLBACK_IMG,
  },
  {
    label: "Skyline Infinity Pool",
    video:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/12/25145038/Skyline-Infinity-Pool.mp4",
    poster: FALLBACK_IMG,
  },
  {
    label: "Multi-Sports Court",
    video: "https://prestigeone.ae/wp-content/uploads/2022/08/1115557_Hobbies_Tennis_1280x720.mp4",
    poster: FALLBACK_IMG,
  },
  {
    label: "Indoor Kids' Play Area",
    video: "https://prestigeone.ae/wp-content/uploads/2022/08/1114155_Pupil_Preschool_1280x720.mp4",
    poster: FALLBACK_IMG,
  },
];

const sanctuaryGalleryItems: ProjectGalleryItem[] = [
  {
    src: `${SANCTUARY_LOCAL_IMG}/17.-3-Bedroom-Unit-Master-Bedroom.jpg`,
    caption: "Bedroom",
  },
  {
    src: `${SANCTUARY_LOCAL_IMG}/3-Bedroom-Unit-Living-Room-1.webp`,
    caption: "Living Room with Kitchen",
  },
  {
    src: `${SANCTUARY_LOCAL_IMG}/3-Bedroom-Unit-Toilet-1.webp`,
    caption: "Bathroom",
  },
  {
    src: `${SANCTUARY_LOCAL_IMG}/8.-Residential-Amenities-Gym-Level-9-Option-1-scaled.jpg`,
    caption: "Rooftop Barbeque area",
  },
  {
    src: `${SANCTUARY_LOCAL_IMG}/10.-Residential-Amenities-Cinema-Level-9-scaled.jpg`,
    caption: "Indoor Cinema",
  },
  {
    src: `${SANCTUARY_LOCAL_IMG}/Rooftop-Pool-scaled.jpg`,
    caption: "Rooftop Pool",
  },
];

const sanctuaryInteriorGallery = sanctuaryGalleryItems.slice(0, 3);
const sanctuaryOutdoorGallery = sanctuaryGalleryItems.slice(3, 6);
const sanctuaryFullWidthBuilding = `${SANCTUARY_LOCAL_IMG}/sanctuary-aprtment.webp`;

const surroundingsPlaces = [
  {
    title: "Business Bay",
    text: "Reach this premier professional and residential hub in just 10 minutes, set along the scenic banks of the Dubai Water Canal.",
    image: `${SANCTUARY_LOCAL_IMG}/business-bay-1.webp`,
  },
  {
    title: "Dubai International Financial Centre (DIFC)",
    text: "Only 12 minutes away, this leading global financial hub is also a top destination for award-winning dining and art galleries.",
    image: `${SANCTUARY_LOCAL_IMG}/Dubai-International-Financial-Centre-DIFC-1.webp`,
  },
  {
    title: "Dubai International Airport (DXB)",
    text: "A quick 15-minute drive ensures effortless global connectivity for all your international travels.",
    image: `${SANCTUARY_LOCAL_IMG}/dubai-airport-scaled-1.webp`,
  },
  {
    title: "Dubai Marina",
    text: "Reach the city's vibrant waterfront social hub in 20 minutes to enjoy skyscraper views, luxury yacht cruises, and a lively promenade.",
    image: `${SANCTUARY_LOCAL_IMG}/marina-scaled.webp`,
  },
  {
    title: "Downtown Dubai",
    text: "Located 10 minutes away, this world-famous district features the Burj Khalifa, The Dubai Mall, and the spectacular Dubai Fountain.",
    image: `${SANCTUARY_LOCAL_IMG}/downtown-dubai.webp`,
  },
];

const schools = [
  {
    name: "North London Collegiate School - Nad Al Sheba",
    body: "A prestigious British curriculum school known for academic excellence and world-class facilities.",
  },
  {
    name: "Repton School Dubai - Nad Al Sheba",
    body: "A leading British curriculum school offering exceptional academics and a strong co-curricular program.",
  },
  {
    name: "GEMS Wellington Academy - Nad Al Sheba",
    body: "An IB World School focused on innovation, leadership, and holistic student development.",
  }
];

const hospitals = [
  {
    name: "Mediclinic Parkview Hospital",
    body: "A modern multi-specialty hospital providing comprehensive healthcare and advanced medical treatments.",
  },
  {
    name: "King's College Hospital - Dubai Hills",
    body: "A renowned UK-affiliated hospital delivering world-class healthcare and specialist services.",
  },
  {
    name: "Mediclinic City Hospital - Dubai Healthcare City",
    body: "A leading healthcare facility offering advanced diagnostics and a wide range of medical specialties.",
  }
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

const SanctuaryProjectPage = () => {
  const [galleryIndex, setGalleryIndex] = useState<number | null>(null);
  const heroRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    el.muted = true;
    void el.play().catch(() => {});
  }, []);

  return (
    <>
      <SiteHeader />

      <section className="po-project-page-hero">
       <div className="po-project-page-hero-media">
          <video ref={heroRef} className="po-project-page-hero-video" muted loop playsInline autoPlay preload="metadata" poster={FALLBACK_IMG}>
            <source src={HERO_VIDEO} type="video/mp4" />
          </video>
          <div className="po-project-page-hero-overlay" />
        </div> 
        {/*<div className="po-project-page-hero-media">
          <img src={HERO_IMG} alt="Sanctuary by Prestige One" />
          <div className="po-project-page-hero-overlay" />
        </div>*/}
        <div className="po-project-page-hero-content">
          <p className="po-project-page-hero-eyebrow">
            <Link href="/projects">Projects</Link>
          </p>
          <h1>Sanctuary by Prestige One</h1>
          <p className="po-project-page-hero-lead">
            A Sanctuary Crafted for Those Who Seek More Than Just a Home.
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
          <h2 className="po-project-page-signature-title">SOPHISTICATED LIVING AMIDST NATURE'S MASTERPIECE</h2>
          <p className="po-project-page-signature-text">
            Discover a lifestyle where urban elegance meets the serenity of the Ras Al Khor Wildlife Sanctuary. Nestled in
            Meydan, Sanctuary offers luxury residences designed with modern aesthetics, breathtaking skyline views, and
            seamless connectivity to Downtown Dubai. Experience a home crafted for those who seek peace without compromising
            on prestige.
          </p>
        </div>
      </section>

      <section className="po-project-page-amenities" aria-labelledby="sanctuary-amenities-heading">
        <div className="container po-project-page-amenities-intro">
          <p className="po-project-page-section-kicker">Sanctuary by Prestige One</p>
          <h2 id="sanctuary-amenities-heading" className="po-project-page-section-title">
            Amenities
          </h2>
          <p className="po-project-page-section-sub">A curated collection of spaces for wellness, leisure, and everyday luxury.</p>
        </div>
        <div className="po-project-page-amenities-fullbleed">
          <div className="po-project-page-amenities-masonry">
            {amenityVideos.map((item) => (
              <AmenityVideoTile key={item.label} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="po-project-page-gallery-section" aria-labelledby="sanctuary-interior-heading">
        <div className="container">
          <h2 id="sanctuary-interior-heading" className="po-project-page-gallery-title">
            Quietly Placed, Clearly Considered
          </h2>
          <p className="po-project-page-gallery-lead">Internal features - refined layouts and premium finishes.</p>
          <div className="po-project-page-gallery-grid">
            {sanctuaryInteriorGallery.map((item, i) => (
              <ProjectGalleryImageCard key={item.src} item={item} index={i} onOpen={setGalleryIndex} />
            ))}
          </div>
        </div>
      </section>

      <section className="po-project-page-building-wide" aria-label="Sanctuary by Prestige One - building exterior">
        <img src={sanctuaryFullWidthBuilding} alt="Sanctuary by Prestige One - building" className="po-project-page-building-wide-img" loading="lazy" />
      </section>

      <section className="po-project-page-gallery-section po-project-page-gallery-section--compact" aria-labelledby="sanctuary-outdoor-heading">
        <div className="container">
          <h2 id="sanctuary-outdoor-heading" className="po-project-page-gallery-title po-project-page-gallery-title--sm">
            Outdoor living
          </h2>
          <p className="po-project-page-gallery-lead">Rooftop barbeque area, indoor cinema, and rooftop pool.</p>
          <div className="po-project-page-gallery-grid">
            {sanctuaryOutdoorGallery.map((item, i) => (
              <ProjectGalleryImageCard key={item.src} item={item} index={i + 3} onOpen={setGalleryIndex} />
            ))}
          </div>
        </div>
      </section>

      <ProjectImageGalleryLightbox
        items={sanctuaryGalleryItems}
        activeIndex={galleryIndex}
        onClose={() => setGalleryIndex(null)}
        onGoTo={setGalleryIndex}
      />

      <section className="po-project-page-wide-video" aria-label="Sanctuary by Prestige One video">
        <div className="container">
          <video className="po-project-page-wide-video-el" muted loop playsInline autoPlay preload="metadata">
            <source src={HERO_VIDEO} type="video/mp4" />
          </video>
        </div>
      </section>

      <section className="po-project-page-surroundings-intro" aria-labelledby="sanctuary-surroundings-heading">
        <div className="container">
          <h2 id="sanctuary-surroundings-heading" className="po-project-page-surroundings-intro-title">
            Surroundings That Echo the Quiet Within
          </h2>
          <p className="po-project-page-surroundings-intro-text">
            Sanctuary by Prestige One is a place where the pace of the city softens. Set alongside the Ras Al Khor Wildlife
            Sanctuary, it brings together calm surroundings, clear architecture, and a sense of everyday ease. Designed with
            intention and shaped by its natural setting, Sanctuary offers a refined way of living that feels balanced, private,
            and quietly elevated. Sanctuary offers you a lifestyle that's as peaceful as it is prestigious.
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

      <section className="po-project-page-map" aria-label="Map: Meydan, Dubai">
        <iframe
          src={MAP_EMBED_SRC}
          title="Parkway by Prestige One"
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
          <FinalContactForm defaultProject="Sanctuary by Prestige One" />
        </div>
      </section>

      <SiteFooterBlock />


    </>
  );
};

export default SanctuaryProjectPage;
