"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import ContactDetailCardsSection, {
  type ContactDetailCardItem,
} from "@/components/common/ContactDetailCardsSection";
import { COMPANY_CONTACT } from "@/data/company-contact";
import SiteFooterBlock from "@/layouts/SiteFooterBlock";
import SiteHeader from "@/layouts/SiteHeader";

const DESTINATION_CONTACT_ITEMS: ContactDetailCardItem[] = [
  {
    icon: "pin",
    label: "Address:",
    value: "Palm Jumeirah, UAE",
  },
  {
    icon: "phone",
    label: "Phone:",
    value: COMPANY_CONTACT.phoneDisplay,
    href: COMPANY_CONTACT.phoneTel,
  },
  {
    icon: "email",
    label: "Email:",
    value: COMPANY_CONTACT.email,
    href: COMPANY_CONTACT.emailMailto,
  },
  {
    icon: "globe",
    label: "Project:",
    value: "Seascape Villa by Prestige One",
    href: "https://prestigeone.ae/projects/seascape-villa-by-prestige-one/",
  },
];

const HERO_BG = "/assets/images/v2/our-destinations/palm-jumeira.webp";

const INTRO_COPY =
  "Palm Jumeirah is Dubai’s celebrated island archipelago—an address defined by private beaches, resort-grade amenities, and uninterrupted sea views. With its own fronds and crescent, plus fast links to Dubai Marina and Sheikh Zayed Road, it remains one of the city’s most prestigious waterfront communities.";

const BURJ_KHALIFA_VIDEO =
  "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/13115148/6600778_Architecture_Cityscape_1280x720.mp4";

const BOTTOM_WIDE_VIDEO =
  "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/17092349/1940334_Kite_Surfers_1280x720.mp4";

const PROJECT_SPOTLIGHT_LEAD =
  "Prestige is an inherent trait, not merely an ambition. It flows as naturally as the tide—defining every aspect of existence. At Luxe Villa by Prestige One in Palm Jumeirah, this principle is our cornerstone. Here, we present a collection of exclusive villas, each a testament to flawless design and unique craftsmanship. Constructed with the utmost attention to detail and the highest quality materials, these residences are set in one of Dubai’s most coveted communities.";

type NearbyItem = {
  title: string;
  time: string;
  image?: string;
  video?: string;
};

type AccessFacilityItem = {
  title: string;
  body: string;
  video: string;
};

const nearbyAttractions: NearbyItem[] = [
  {
    title: "The View",
    time: "~6 minutes",
    image:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/17091130/the-view-qn9rdzrh7im32bp3v8qqmvgnvl1mn756fvonkraddc-2048x1536.webp",
  },
  {
    title: "Dubai Marina",
    time: "~15 minutes",
    image:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/17091135/dubai-marina-1024x768-1-768x576.webp",
  },
  {
    title: "Dubai International Airport",
    time: "~25 minutes",
    image:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/13113544/airport-1024x768-1.jpg",
  },
  {
    title: "Aquaventure Waterpark",
    time: "~7 minutes",
    image:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/17091133/aquaventure-waterpark-1536x1152.webp",
  },
  {
    title: "Dubai Mall",
    time: "~16 minutes",
    image:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/13113554/dubai-mall-1024x768-1.jpg",
  },
  {
    title: "Museum of the Future",
    time: "~18 minutes",
    image:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/13113547/museum-of-the-1024x768-1.jpg",
  },
  {
    title: "Burj Khalifa",
    time: "~16 minutes",
    video: BURJ_KHALIFA_VIDEO,
  },
];

const accessFacilities: AccessFacilityItem[] = [
  {
    title: "Transportation in Palm Jumeirah",
    body: "Palm Jumeirah is served by the Palm Monorail, main road links via the crescent and fronds, and quick connections to Sheikh Zayed Road. Taxis and ride-hailing are readily available, and Dubai Marina’s metro and tram network is a short drive away for city-wide travel.",
    video:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/17070231/dubai-city-road-with-buildings-and-futuristic-arch-2023-11-27-04-59-19-utc_compressed.mp4",
  },
  {
    title: "Healthcare Establishments in Palm Jumeirah",
    body: "Residents benefit from clinics on the island and major hospitals within minutes in Dubai Marina, Al Sufouh, and surrounding districts—offering emergency care, specialists, and family health services across Dubai’s premium healthcare network.",
    video:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/13110005/5383333_Coll_wavebreak_Hospital_1280x720.mp4",
  },
  {
    title: "Mosques in Palm Jumeirah",
    body: "The island includes community mosques for daily prayer, with additional mosques and places of worship easily reachable in nearby Jumeirah, Marina, and along Sheikh Zayed Road—supporting residents of all backgrounds.",
    video:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/13110131/2644343_Mosque_Sharjah_1280x720.mp4",
  },
  {
    title: "Schools in Palm Jumeirah",
    body: "Families can choose from reputable nurseries and schools in and around Palm Jumeirah, with further international curricula and secondary options a short drive away in Dubai Marina, Al Sufouh, and Jumeirah.",
    video:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/17075346/6249880_Teacher_Classroom_1280x720.mp4",
  },
];

const projectHighlights = [
  {
    label: "Seascape Villa By Prestige One",
    href: "https://prestigeone.ae/projects/seascape-villa-by-prestige-one/",
  },
  {
    label: "Luxe Villa By Prestige One",
    href: "https://prestigeone.ae/projects/luxe-villa-by-prestige-one/",
  },
] as const;

function videoMimeType(url: string) {
  if (url.endsWith(".mov")) return "video/quicktime";
  return "video/mp4";
}

function DestinationNearbyTile({ title, time, image, video }: NearbyItem) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!video) return;
    const el = ref.current;
    if (!el) return;
    el.muted = true;
    void el.play().catch(() => {});
  }, [video]);

  return (
    <article className="po-project-page-amenity-tile po-destination-nearby-tile">
      <div className="po-project-page-amenity-tile-media">
        {video ? (
          <>
            <video
              ref={ref}
              className="po-project-page-amenity-tile-video"
              poster={image ?? undefined}
              muted
              loop
              playsInline
              autoPlay
              preload="auto"
            >
              <source src={video} type={videoMimeType(video)} />
            </video>
            <div className="po-project-page-amenity-tile-scrim" aria-hidden="true" />
          </>
        ) : (
          <>
            <img src={image} alt="" className="po-destination-nearby-img" loading="lazy" />
            <div className="po-project-page-amenity-tile-scrim" aria-hidden="true" />
          </>
        )}
        <div className="po-destination-nearby-caption">
          <p className="po-destination-nearby-caption-text">
            <span className="po-destination-nearby-caption-name">{title}</span>
            <span className="po-destination-nearby-caption-time"> {time}</span>
          </p>
        </div>
      </div>
    </article>
  );
}

function AccessFacilityCard({ title, body, video }: AccessFacilityItem) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.muted = true;
    void el.play().catch(() => {});
  }, [video]);

  return (
    <article className="po-destination-access-card">
      <div className="po-destination-access-media">
        <video
          ref={ref}
          className="po-destination-access-video"
          muted
          loop
          playsInline
          autoPlay
          preload="metadata"
        >
          <source src={video} type={videoMimeType(video)} />
        </video>
        <div className="po-destination-access-media-scrim" aria-hidden="true" />
      </div>
      <div className="po-destination-access-card-body">
        <h3 className="po-destination-access-card-title">{title}</h3>
        <p className="po-destination-access-card-text">{body}</p>
      </div>
    </article>
  );
}

export default function PalmJumeirahDestinationPage() {
  const wideRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = wideRef.current;
    if (!el) return;
    el.muted = true;
    void el.play().catch(() => {});
  }, []);

  return (
    <>
      <SiteHeader />
      <main className="po-destination-page">
        <section
          className="po-destination-hero po-destination-hero--with-contact-rail"
          aria-labelledby="destination-hero-title"
        >
          <div
            className="po-destination-hero-media"
            style={{ backgroundImage: `url(${HERO_BG})` }}
            role="img"
            aria-label="Palm Jumeirah"
          />
          <div className="po-destination-hero-overlay" aria-hidden="true" />
          <div className="po-destination-hero-frame">
            <div className="container po-destination-hero-title-wrap">
              <h1 id="destination-hero-title" className="po-destination-hero-title">
                Palm Jumeirah
              </h1>
            </div>
          </div>
          <div className="po-destination-hero-bottom-rail">
            <ContactDetailCardsSection
              items={DESTINATION_CONTACT_ITEMS}
              showSocial
              className="po-contact-detail-strip--hero-glass"
            />
          </div>
        </section>

        <section className="po-destination-intro" aria-label="About Palm Jumeirah">
          <div className="container po-destination-intro-copy">
            <p className="po-destination-intro-text">{INTRO_COPY}</p>
          </div>
        </section>

        <section className="po-destination-nearby" aria-labelledby="destination-nearby-heading">
          <div className="container po-destination-nearby-intro">
            <h2 id="destination-nearby-heading" className="po-destination-section-title">
              Nearby Attractions
            </h2>
            <p className="po-destination-section-lead">Drive times are approximate from Palm Jumeirah.</p>
          </div>
          <div className="po-project-page-amenities-fullbleed">
            <div className="po-project-page-amenities-masonry">
              {nearbyAttractions.map((item) => (
                <DestinationNearbyTile key={item.title} {...item} />
              ))}
            </div>
          </div>
        </section>

        <section className="po-destination-access" aria-labelledby="destination-access-heading">
          <div className="container">
            <h2 id="destination-access-heading" className="po-destination-access-heading">
              Accessibility &amp; Facilities
            </h2>
            <div className="po-destination-access-grid">
              {accessFacilities.map((item) => (
                <AccessFacilityCard key={item.title} {...item} />
              ))}
            </div>
          </div>
        </section>

        <section className="po-destination-project-spotlight" aria-labelledby="palm-project-heading">
          <div className="container">
            <h2 id="palm-project-heading" className="po-destination-project-spotlight-title">
              Prestige One Project in Palm Jumeirah
            </h2>
            <p className="po-destination-project-spotlight-lead">{PROJECT_SPOTLIGHT_LEAD}</p>
            <ul className="po-destination-project-list">
              {projectHighlights.map((project) => (
                <li key={project.label}>
                  <a
                    href={project.href}
                    className="po-destination-project-spotlight-cta"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>{project.label}</span>
                    <span className="po-destination-project-spotlight-cta-icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M9 18l6-6-6-6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="po-destination-wide-video" aria-label="Palm Jumeirah video">
          <video
            ref={wideRef}
            className="po-destination-wide-video-el"
            muted
            loop
            playsInline
            autoPlay
            preload="metadata"
          >
            <source src={BOTTOM_WIDE_VIDEO} type="video/mp4" />
          </video>
        </section>

        <section className="po-destination-tail" aria-label="More from Prestige One">
          <div className="container">
            <p className="po-destination-tail-text">
              Explore our{" "}
              <Link href="/projects" className="po-destination-tail-link">
                residential projects
              </Link>{" "}
              across Dubai.
            </p>
          </div>
        </section>
      </main>
      <SiteFooterBlock />
    </>
  );
}
