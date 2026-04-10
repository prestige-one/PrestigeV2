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

const CONSTRUCTION_UPDATES = "/construction-update-the-parkway-by-prestige-one/";
const LOCATION_DESTINATION = "/our-destinations/mohammed-bin-rashid-city/";
const MAP_EMBED_SRC = "https://www.google.com/maps?q=The+Parkway+by+Prestige+One&output=embed";

const PROJECT_WIDE_VIDEO = "/assets/images/v2/project-features-videos/Luxury-Canal-Residences-by-Prestige-One.mp4";

const amenityVideos: AmenityVideoRow[] = [
  {
    label: "Outdoor Cinema",
    video:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2022/08/26080805/1115750_Cinema_Man_1280x720-1.mp4",
    poster: HERO_IMG,
  },
  {
    label: "Children's Splash Pool",
    video:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/19162416/6045622_Children_Swim_1280x720.mp4",
    poster: HERO_IMG,
  },
  {
    label: "Club Lounge",
    video:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/25090936/clublounge.mp4",
    poster: HERO_IMG,
  },
  {
    label: "Multi-Sports Court",
    video: "https://prestigeone.ae/wp-content/uploads/2022/08/1115557_Hobbies_Tennis_1280x720.mp4",
    poster: HERO_IMG,
  },
  {
    label: "Children's Play Studio",
    video: "https://prestigeone.ae/wp-content/uploads/2022/08/1114155_Pupil_Preschool_1280x720.mp4",
    poster: HERO_IMG,
  },
  {
    label: "Owners Lounge",
    video:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/19174921/6005508_Person_Human_1280x720.mp4",
    poster: HERO_IMG,
  },
  {
    label: "Entertainment Lounge",
    video:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/26064436/4665041_Music_Band_1280x720-1.mp4",
    poster: HERO_IMG,
  },
  {
    label: "Kids Play Zone",
    video: "https://prestigeone.ae/wp-content/uploads/2022/08/5080670_Caucasian_Girl_1280x720.mp4",
    poster: HERO_IMG,
  },
  {
    label: "Family Pool with Juice Bar",
    video: "https://prestigeone.ae/wp-content/uploads/2022/08/1470836_People_Leisure_1280x720.mp4",
    poster: HERO_IMG,
  },
  {
    label: "Fitness Gym",
    video: "https://prestigeone.ae/wp-content/uploads/2022/08/4730225_Fitness_Workout_1280x720.mp4",
    poster: HERO_IMG,
  },
  {
    label: "Mini Putt Gol",
    video:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/19162717/2311733_Golf_Club_1280x720.mp4",
    poster: HERO_IMG,
  },
  {
    label: "Yoga Sanctuary",
    video:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/19185604/5586861_Coll_wavebreak_Summertime_1280x720.mp4",
    poster: HERO_IMG,
  },
  {
    label: "BBQ Terrace",
    video: "https://prestigeone.ae/wp-content/uploads/2022/08/1104331_1080p_4k_1280x720.mp4",
    poster: HERO_IMG,
  },
];

const galleryItems: ProjectGalleryItem[] = [
  {
    src: "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/30062442/Living-Area-scaled.webp",
    caption: "Living Area",
  },
  {
    src: "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/30062430/Bedroom-1.webp",
    caption: "Bedroom",
  },
  {
    src: "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/30062426/Bathroom-scaled.webp",
    caption: "Bathroom",
  },
  {
    src: "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/30062453/Yoga-Area.webp",
    caption: "Yoga",
  },
  {
    src: "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/30062449/Lobby-2-1200x900.webp",
    caption: "Lobby",
  },
  {
    src: "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/30062435/Indoor-Cinema-scaled.webp",
    caption: "Cinema",
  },
];

const interiorGallery = galleryItems.slice(0, 3);
const outdoorGallery = galleryItems.slice(3, 6);
const fullWidthBuilding =
  "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/27164232/Front-Exterior-3-scaled.webp";

const surroundingsPlaces = [
  {
    title: "Meydan Racecourse",
    text: "A premier venue for horse racing and home to the Dubai World Cup.",
    image:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/24072437/shutterstock_92699545-scaled.webp",
  },
  {
    title: "Meydan One Mall",
    text: "An upcoming mall with unique entertainment options, including a ski slope and sports facilities.",
    image:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/26054547/meydan-one-mall-Cover-20220701.jpg",
  },
  {
    title: "Dubai Mall",
    text: "One of the largest shopping centers in the world, offering luxury shopping, dining, and entertainment.",
    image: "https://prestigeone.ae/wp-content/uploads/2022/08/dubai-mall-scaled.webp",
  },
  {
    title: "Ras Al Khor Wildlife Sanctuary",
    text: "A peaceful nature reserve that provides a natural escape within the city.",
    image:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/26055102/shutterstock_1688412709-scaled.webp",
  },
  {
    title: "Dubai Design District (D3)",
    text: "A hub for creatives, offering a vibrant blend of art, fashion, and design just a short drive away.",
    image:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/26055245/shutterstock_2504923391-scaled.webp",
  },
];

const schools = [
  {
    name: "North London Collegiate School",
    body: "An IB curriculum school with a strong emphasis on academic rigor and creative development.",
  },
  {
    name: "Hartland International School",
    body: "A British curriculum school focusing on the holistic growth of students, making it a top choice for families.",
  },
  {
    name: "Swiss International Scientific School",
    body: "A respected bilingual IB continuum school in Dubai with strong STEM and multilingual learning pathways.",
  },
];

const hospitals = [
  {
    name: "Meydan One Health Clinic",
    body: "Offers a range of outpatient services and specialized treatments in a modern environment.",
  },
  {
    name: "King's College Hospital Dubai",
    body: "Known for its world-class healthcare services and patient-centered approach.",
  },
  {
    name: "American Hospital Dubai",
    body: "A leading multispecialty hospital in central Dubai, offering advanced diagnostics and tertiary care services.",
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

const ParkwayProjectPage = () => {
  const [galleryIndex, setGalleryIndex] = useState<number | null>(null);

  return (
    <>
      <SiteHeader />

      <section className="po-project-page-hero">
        <div className="po-project-page-hero-media">
          <img src={HERO_IMG} alt="The Parkway" />
          <div className="po-project-page-hero-overlay" />
        </div>
        <div className="po-project-page-hero-content">
          <p className="po-project-page-hero-eyebrow">
            <Link href="/projects">Projects</Link>
          </p>
          <h1>The Parkway</h1>
          <p className="po-project-page-hero-lead">
            Nature-inspired contemporary living at the heart of Meydan Horizon.
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
          <h2 className="po-project-page-signature-title">A Nature-Inspired Sanctuary in MBR City</h2>
          <p className="po-project-page-signature-text">
            Parkway by Prestige One, a G+32-floor building in Meydan Horizon, combining nature and modern interiors. With green
            park-themed podiums and beautiful views from every angle, Parkway is designed to provide tranquility in a
            well-connected part of Dubai. This nature-inspired sanctuary overlooking crystal lagoons offers a peaceful retreat
            without leaving the convenience of city life. From every corner, you&apos;ll experience the calming essence, making
            Parkway the perfect place to call home.
          </p>
        </div>
      </section>

      <section className="po-project-page-amenities" aria-labelledby="parkway-amenities-heading">
        <div className="container po-project-page-amenities-intro">
          <p className="po-project-page-section-kicker">The Parkway</p>
          <h2 id="parkway-amenities-heading" className="po-project-page-section-title">
            Amenities
          </h2>
          <p className="po-project-page-section-sub">Spaces designed for wellness, family, recreation, and social living.</p>
        </div>
        <div className="po-project-page-amenities-fullbleed">
          <div className="po-project-page-amenities-masonry">
            {amenityVideos.map((item) => (
              <AmenityVideoTile key={item.label} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="po-project-page-gallery-section" aria-labelledby="parkway-interior-heading">
        <div className="container">
          <h2 id="parkway-interior-heading" className="po-project-page-gallery-title">
            A New Take on Luxury in Meydan Horizon
          </h2>
          <p className="po-project-page-gallery-lead">Internal features - elegant layouts and calming design language.</p>
          <div className="po-project-page-gallery-grid">
            {interiorGallery.map((item, i) => (
              <ProjectGalleryImageCard key={item.src} item={item} index={i} onOpen={setGalleryIndex} />
            ))}
          </div>
        </div>
      </section>

      <section className="po-project-page-building-wide" aria-label="The Parkway - building exterior">
        <img src={fullWidthBuilding} alt="The Parkway - building" className="po-project-page-building-wide-img" loading="lazy" />
      </section>

      <section className="po-project-page-gallery-section po-project-page-gallery-section--compact" aria-labelledby="parkway-outdoor-heading">
        <div className="container">
          <h2 id="parkway-outdoor-heading" className="po-project-page-gallery-title po-project-page-gallery-title--sm">
            Wellness spaces
          </h2>
          <p className="po-project-page-gallery-lead">Yoga, lobby, and cinema experiences designed for everyday comfort.</p>
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

      <section className="po-project-page-wide-video" aria-label="The Parkway video">
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

      <section className="po-project-page-surroundings-intro" aria-labelledby="parkway-surroundings-heading">
        <div className="container">
          <p className="po-project-page-section-kicker">About Meydan Horizon</p>
          <h2 id="parkway-surroundings-heading" className="po-project-page-surroundings-intro-title">
            THE NEIGHBORHOOD
          </h2>
          <p className="po-project-page-surroundings-intro-text">
            Located in the heart of Meydan Horizon, Parkway provides an exceptional lifestyle intertwined with nature. Minutes
            from Dubai&apos;s iconic landmarks, this area brings a serene balance between nature and urban life. Residents enjoy
            proximity to the Meydan Racecourse, renowned schools, healthcare facilities, and a range of leisure options. With
            Downtown Dubai and DIFC nearby, Meydan Horizon offers both peaceful living and easy access to the city&apos;s vibrant
            offerings.
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

      <section className="po-project-page-map" aria-label="Map: The Parkway by Prestige One">
        <iframe
          src={MAP_EMBED_SRC}
          title="Google Map - The Parkway by Prestige One"
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
          <FinalContactForm defaultProject="The Parkway" />
        </div>
      </section>

      <SiteFooterBlock />
    </>
  );
};

export default ParkwayProjectPage;

