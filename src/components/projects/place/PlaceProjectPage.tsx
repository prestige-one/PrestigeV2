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

const HERO_IMG = "/assets/img/v2/project-featured-images/The-Place-Banner.webp";

const PDF = {
  brochure: "/project-documents",
  projectDoc: "/project-documents",
  factSheet: "/project-documents",
};

const CONSTRUCTION_UPDATES = "/construction-update-place-by-prestige-one/";
const MAP_EMBED_SRC = "https://www.google.com/maps?q=Place+by+Prestige+One+Dubai+Sports+City&output=embed";

const amenityVideos: AmenityVideoRow[] = [
  {
    label: "Outdoor Cinema",
    video:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2022/08/26080805/1115750_Cinema_Man_1280x720-1.mp4",
    poster: HERO_IMG,
  },
  {
    label: "Running Track",
    video: "https://prestigeone.ae/wp-content/uploads/2022/08/1115348_Woman_Indoor_1280x720.mp4",
    poster: HERO_IMG,
  },
  {
    label: "BBQ Area",
    video: "https://prestigeone.ae/wp-content/uploads/2022/08/1104331_1080p_4k_1280x720.mp4",
    poster: HERO_IMG,
  },
  {
    label: "Swimming Pool & Kids' Pool",
    video: "https://prestigeone.ae/wp-content/uploads/2022/08/1470836_People_Leisure_1280x720.mp4",
    poster: HERO_IMG,
  },
  {
    label: "Prestige Fitness",
    video: "https://prestigeone.ae/wp-content/uploads/2022/08/4730225_Fitness_Workout_1280x720.mp4",
    poster: HERO_IMG,
  },
  {
    label: "Juice Bar",
    video: "https://prestigeone.ae/wp-content/uploads/2022/08/4933091_Person_Human_1280x720.mp4",
    poster: HERO_IMG,
  },
  {
    label: "Outdoor Kids' Play Area",
    video: "https://prestigeone.ae/wp-content/uploads/2022/08/5080670_Caucasian_Girl_1280x720.mp4",
    poster: HERO_IMG,
  },
  {
    label: "Multi-Sports Court",
    video: "https://prestigeone.ae/wp-content/uploads/2022/08/1115557_Hobbies_Tennis_1280x720.mp4",
    poster: HERO_IMG,
  },
  {
    label: "Indoor Kids' Play Area",
    video: "https://prestigeone.ae/wp-content/uploads/2022/08/1114155_Pupil_Preschool_1280x720.mp4",
    poster: HERO_IMG,
  },
];

const galleryItems: ProjectGalleryItem[] = [
  {
    src: "https://prestigeone.ae/wp-content/uploads/2022/08/living-1-scaled.webp",
    caption: "Living",
  },
  {
    src: "https://prestigeone.ae/wp-content/uploads/2022/08/living-3-scaled.webp",
    caption: "Kitchen",
  },
  {
    src: "https://prestigeone.ae/wp-content/uploads/2022/08/Mens-Gym-01-scaled.webp",
    caption: "Fitness Gym",
  },
  {
    src: "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2022/08/19093648/Club-Lounge-02-scaled-1.webp",
    caption: "Club Lounge",
  },
  {
    src: "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2022/08/19093642/bedroom-1-02-scaled-1.webp",
    caption: "Bedroom",
  },
  {
    src: "https://prestigeone.ae/wp-content/uploads/2022/08/Kids-1-scaled.webp",
    caption: "Kids Area",
  },
];

const interiorGallery = galleryItems.slice(0, 3);
const outdoorGallery = galleryItems.slice(3, 6);
const fullWidthBuilding = "https://prestigeone.ae/wp-content/uploads/2022/08/The-Place-Banenr-Crop.webp";

const surroundingsPlaces = [
  {
    title: "The Els Club",
    text: "An exclusive 18-hole championship golf course designed by Ernie Els, with luxurious club facilities.",
    image:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2022/08/24071422/Elsclub-scaled.webp",
  },
  {
    title: "Dubai Autodrome",
    text: "For motorsport enthusiasts, this nearby track offers thrilling races and driving experiences.",
    image:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2022/08/21155302/WhatsApp-Image-2024-09-21-at-8.39.10%E2%80%AFPM-2.webp",
  },
  {
    title: "Mall of the Emirates",
    text: "Just 15 minutes away, this iconic shopping mall features a mix of luxury retail, fine dining, and Ski Dubai.",
    image:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2022/08/24071624/mallfoemirates-scaled.webp",
  },
  {
    title: "Dubai Marina",
    text: "A 20-minute drive brings you to this lively waterfront destination filled with restaurants, shops, and yacht clubs.",
    image:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2022/08/24071706/marina-scaled.webp",
  },
  {
    title: "Jumeirah Beach Residence (JBR)",
    text: "A 25-minute drive takes you to JBR, a popular beachfront area with cafes, shopping, and family-friendly activities.",
    image: "/assets/img/v2/Jumeirah-Beach-Residence.webp",
  },
];

const schools = [
  {
    name: "Victory Heights Primary School",
    body: "A top-tier British curriculum school with a strong focus on academics and sports, located within Dubai Sports City.",
  },
  {
    name: "GEMS Metropole School",
    body: "Offers a British curriculum and emphasizes creative thinking and innovation, located a short drive from Dubai Sports City.",
  },
  {
    name: "Renaissance School",
    body: "A growing school community in Dubai Sports City known for inclusive learning pathways and student development.",
  },
];

const hospitals = [
  {
    name: "Mediclinic Parkview Hospital",
    body: "Offers specialized healthcare and emergency services, located 10 minutes from Dubai Sports City.",
  },
  {
    name: "NMC Royal Hospital",
    body: "One of Dubai's leading hospitals, offering advanced medical services with a family-friendly approach.",
  },
  {
    name: "Aster Clinic, Sports City",
    body: "A nearby community clinic providing general practice, diagnostics, and everyday healthcare services.",
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

const PlaceProjectPage = () => {
  const [galleryIndex, setGalleryIndex] = useState<number | null>(null);

  return (
    <>
      <SiteHeader />

      <section className="po-project-page-hero">
        <div className="po-project-page-hero-media">
          <img src={HERO_IMG} alt="The Place" />
          <div className="po-project-page-hero-overlay" />
        </div>
        <div className="po-project-page-hero-content">
          <p className="po-project-page-hero-eyebrow">
            <Link href="/projects">Projects</Link>
          </p>
          <h1>The Place</h1>
          <p className="po-project-page-hero-lead">
            Exclusive residences crafted for elevated modern living in Dubai Sports City.
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
          <h2 className="po-project-page-signature-title">AN ADRESS LIKE NO OTHER</h2>
          <p className="po-project-page-signature-text">
            Rising G+22 floors in the heart of Sports City, Place by Prestige One offers a range of studio to three-bedroom
            apartments that set a new benchmark for exclusive living. With an elegant club lounge, beautiful golf course views,
            and carefully selected amenities, Place defines a sophisticated lifestyle. Designed for those who appreciate the
            finer things, Place converges comfort, privacy, and style.
          </p>
        </div>
      </section>

      <section className="po-project-page-amenities" aria-labelledby="place-amenities-heading">
        <div className="container po-project-page-amenities-intro">
          <p className="po-project-page-section-kicker">The Place</p>
          <h2 id="place-amenities-heading" className="po-project-page-section-title">
            Amenities
          </h2>
          <p className="po-project-page-section-sub">A complete range of family, wellness, and recreational experiences.</p>
        </div>
        <div className="po-project-page-amenities-fullbleed">
          <div className="po-project-page-amenities-masonry">
            {amenityVideos.map((item) => (
              <AmenityVideoTile key={item.label} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="po-project-page-gallery-section" aria-labelledby="place-interior-heading">
        <div className="container">
          <h2 id="place-interior-heading" className="po-project-page-gallery-title">
            Harmony in Luxury Living
          </h2>
          <p className="po-project-page-gallery-lead">Internal features - refined spaces for everyday comfort.</p>
          <div className="po-project-page-gallery-grid">
            {interiorGallery.map((item, i) => (
              <ProjectGalleryImageCard key={item.src} item={item} index={i} onOpen={setGalleryIndex} />
            ))}
          </div>
        </div>
      </section>

      <section className="po-project-page-building-wide" aria-label="The Place - building exterior">
        <img src={fullWidthBuilding} alt="The Place - building" className="po-project-page-building-wide-img" loading="lazy" />
      </section>

      <section className="po-project-page-gallery-section po-project-page-gallery-section--compact" aria-labelledby="place-outdoor-heading">
        <div className="container">
          <h2 id="place-outdoor-heading" className="po-project-page-gallery-title po-project-page-gallery-title--sm">
            Signature spaces
          </h2>
          <p className="po-project-page-gallery-lead">Club lounge, bedroom, and kids area.</p>
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

      <section className="po-project-page-surroundings-intro" aria-labelledby="place-surroundings-heading">
        <div className="container">
          <p className="po-project-page-section-kicker">About Dubai Sports City</p>
          <h2 id="place-surroundings-heading" className="po-project-page-surroundings-intro-title">
            THE NEIGHBORHOOD
          </h2>
          <p className="po-project-page-surroundings-intro-text">
            Dubai Sports City is a vibrant community built around the spirit of sports and active living. With state-of-the-art
            stadiums, golf courses, and health clubs, it is an ideal location for those who value fitness and wellness. The area
            is well-served by top schools, healthcare facilities, and various dining and entertainment options. Its prime
            location provides easy access to Dubai&apos;s major landmarks, making it both a well-connected and serene place to
            live.
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

      <section className="po-project-page-map" aria-label="Map: Place by Prestige One">
        <iframe
          src={MAP_EMBED_SRC}
          title="Google Map - Place by Prestige One"
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
          <FinalContactForm defaultProject="The Place" />
        </div>
      </section>

      <SiteFooterBlock />
    </>
  );
};

export default PlaceProjectPage;

