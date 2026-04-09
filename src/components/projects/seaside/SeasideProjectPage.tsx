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

const CONSTRUCTION_UPDATES = "/construction-update-seaside-by-prestige-one/";
const MAP_EMBED_SRC = "https://www.google.com/maps?q=Prestige+One+Seaside+Dubai+Islands&output=embed";

const amenityVideos: AmenityVideoRow[] = [
  {
    label: "Outdoor Cinema & Lawn",
    video:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2022/08/26080805/1115750_Cinema_Man_1280x720-1.mp4",
    poster: HERO_IMG,
  },
  {
    label: "BBQ Area",
    video: "https://prestigeone.ae/wp-content/uploads/2022/08/1104331_1080p_4k_1280x720.mp4",
    poster: HERO_IMG,
  },
  {
    label: "Mini Putt Golf",
    video:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/19162717/2311733_Golf_Club_1280x720.mp4",
    poster: HERO_IMG,
  },
  {
    label: "Gym & Changing Rooms",
    video: "https://prestigeone.ae/wp-content/uploads/2022/08/4730225_Fitness_Workout_1280x720.mp4",
    poster: HERO_IMG,
  },
  {
    label: "Swimming Pool",
    video: "https://prestigeone.ae/wp-content/uploads/2022/08/1470836_People_Leisure_1280x720.mp4",
    poster: HERO_IMG,
  },
  {
    label: "Kids' Pool & Fountains",
    video:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/19162416/6045622_Children_Swim_1280x720.mp4",
    poster: HERO_IMG,
  },
  {
    label: "Spa Pools",
    video: "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/19162216/spapool.mp4",
    poster: HERO_IMG,
  },
];

const galleryItems: ProjectGalleryItem[] = [
  {
    src: "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/19101740/Seaside-2BHK-Kitchen-1.jpg",
    caption: "Living",
  },
  {
    src: "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/19101742/Seaside-2BHK-Kitchen.jpg",
    caption: "Kitchen",
  },
  {
    src: "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/19101751/Seaside-3BHK-masterBedBathroom.jpg",
    caption: "Bathroom",
  },
  {
    src: "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/19101745/Seaside-2BHK-Living.jpg",
    caption: "Living",
  },
  {
    src: "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/19101746/Seaside-3BHK-Kitchen.jpg",
    caption: "Kitchen",
  },
  {
    src: "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/19101748/Seaside-3BHK-LivingKitchen.jpg",
    caption: "Living",
  },
];

const interiorGallery = galleryItems.slice(0, 3);
const outdoorGallery = galleryItems.slice(3, 6);
const fullWidthBuilding = "https://prestigeone.ae/wp-content/uploads/2024/04/Seaside_Building-1-scaled-1.webp";

const surroundingsPlaces = [
  {
    title: "Dubai Creek Golf & Yacht Club",
    text: "A beautiful waterfront golf course and yacht club offering recreational activities and luxury dining experiences.",
    image:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/24072120/shutterstock_24731917-150x150.webp",
  },
  {
    title: "Deira Islands Night Souk",
    text: "The world’s largest night market, offering over 5,000 stalls selling traditional goods, crafts, and food.",
    image:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2022/08/21155316/WhatsApp-Image-2024-09-21-at-8.39.13%E2%80%AFPM-150x150.webp",
  },
  {
    title: "Dubai Dolphinarium",
    text: "A family-friendly attraction offering dolphin and seal shows, located just a short drive from Dubai Islands.",
    image:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2022/08/21155305/WhatsApp-Image-2024-09-21-at-8.39.10%E2%80%AFPM-150x150.webp",
  },
  {
    title: "Dubai Frame",
    text: "A 20-minute drive takes you to this iconic landmark that offers panoramic views of the city’s past, present, and future.",
    image:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/24072116/shutterstock_2488001343-150x150.webp",
  },
  {
    title: "Downtown Dubai",
    text: "Less than 25 minutes away, visit Burj Khalifa, The Dubai Mall, and Dubai Fountain for world-class lifestyle experiences.",
    image:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/24072112/shutterstock_2476477481-150x150.webp",
  },
  {
    title: "JBR Beach",
    text: "A popular destination, around 30 minutes away, with a beachfront promenade and dining and shopping options.",
    image:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/24072105/shutterstock_2142349515-150x150.webp",
  },
];

const schools = [
  {
    name: "The Arbor School",
    body: "A unique school with a focus on sustainability and eco-friendly learning, offering a British curriculum.",
  },
  {
    name: "Dubai British School Jumeirah Park",
    body: "A popular school offering a British curriculum, known for fostering academic excellence and personal growth.",
  },
  {
    name: "Deira International School",
    body: "An established K-12 school known for strong academics, modern facilities, and a broad extracurricular program.",
  },
];

const hospitals = [
  {
    name: "Dubai Hospital",
    body: "A modern healthcare facility offering comprehensive medical services, known for advanced care and specialist departments.",
  },
  {
    name: "Medcare Medical Centre",
    body: "A respected healthcare provider offering multi-specialty services and accessible outpatient care.",
  },
  {
    name: "Rashid Hospital",
    body: "A major public tertiary hospital in Dubai with emergency and trauma expertise and comprehensive specialist care.",
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

const SeasideProjectPage = () => {
  const [galleryIndex, setGalleryIndex] = useState<number | null>(null);

  return (
    <>
      <SiteHeader />

      <section className="po-project-page-hero">
        <div className="po-project-page-hero-media">
          <img src={HERO_IMG} alt="Seaside by Prestige One" />
          <div className="po-project-page-hero-overlay" />
        </div>
        <div className="po-project-page-hero-content">
          <p className="po-project-page-hero-eyebrow">
            <Link href="/projects">Projects</Link>
          </p>
          <h1>The Seaside</h1>
          <p className="po-project-page-hero-lead">
            Waterfront living in Dubai Islands with elegant residences, curated amenities, and panoramic sea-facing character.
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
          <h2 className="po-project-page-signature-title">A RETREAT ALONG THE SEA</h2>
          <p className="po-project-page-signature-text">
            Set against the backdrop of Dubai Islands, Seaside by Prestige One is a G+12-floor building offering serene one,
            two, and three-bedroom apartments. Here, the soothing rhythm of waterfront living blends with modern design, creating
            a perfect escape from the busy city. Designed with sophistication, each residence boasts floor-to-ceiling windows and
            expansive balconies that invite the surrounding seascape into every home.
          </p>
        </div>
      </section>

      <section className="po-project-page-amenities" aria-labelledby="seaside-amenities-heading">
        <div className="container po-project-page-amenities-intro">
          <p className="po-project-page-section-kicker">The Seaside</p>
          <h2 id="seaside-amenities-heading" className="po-project-page-section-title">
            Amenities
          </h2>
          <p className="po-project-page-section-sub">Family-friendly wellness and leisure experiences by the waterfront.</p>
        </div>
        <div className="po-project-page-amenities-fullbleed">
          <div className="po-project-page-amenities-masonry">
            {amenityVideos.map((item) => (
              <AmenityVideoTile key={item.label} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="po-project-page-gallery-section" aria-labelledby="seaside-interior-heading">
        <div className="container">
          <h2 id="seaside-interior-heading" className="po-project-page-gallery-title">
            Sea More, Live More
          </h2>
          <p className="po-project-page-gallery-lead">Interior moments designed around calm, light, and comfort.</p>
          <div className="po-project-page-gallery-grid">
            {interiorGallery.map((item, i) => (
              <ProjectGalleryImageCard key={item.src} item={item} index={i} onOpen={setGalleryIndex} />
            ))}
          </div>
        </div>
      </section>

      <section className="po-project-page-building-wide" aria-label="Seaside - building exterior">
        <img src={fullWidthBuilding} alt="Seaside - building" className="po-project-page-building-wide-img" loading="lazy" />
      </section>

      <section className="po-project-page-gallery-section po-project-page-gallery-section--compact" aria-labelledby="seaside-outdoor-heading">
        <div className="container">
          <h2 id="seaside-outdoor-heading" className="po-project-page-gallery-title po-project-page-gallery-title--sm">
            Spacious everyday living
          </h2>
          <p className="po-project-page-gallery-lead">More living and kitchen views from signature apartments.</p>
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

      <section className="po-project-page-surroundings-intro" aria-labelledby="seaside-neighborhood-heading">
        <div className="container">
          <p className="po-project-page-section-kicker">About Dubai Islands</p>
          <h2 id="seaside-neighborhood-heading" className="po-project-page-surroundings-intro-title">
            THE NEIGHBORHOOD
          </h2>
          <p className="po-project-page-surroundings-intro-text">
            Dubai Islands offers a peaceful waterfront lifestyle with all the amenities of modern living. Residents enjoy ocean
            views, walking promenades, and easy access to schools, healthcare, and entertainment destinations.
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

      <section className="po-project-page-map" aria-label="Map: Prestige One Seaside">
        <iframe
          src={MAP_EMBED_SRC}
          title="Google Map - Prestige One Seaside"
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
          <FinalContactForm defaultProject="The Seaside" />
        </div>
      </section>

      <SiteFooterBlock />
    </>
  );
};

export default SeasideProjectPage;

