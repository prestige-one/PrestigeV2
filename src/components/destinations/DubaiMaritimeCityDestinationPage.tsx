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
    value: "Dubai Maritime City, UAE",
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
    value: "Hilton Residences",
    href: "/projects/hilton-residences-dubai-maritime-city",
  },
];

const HERO_BG = "/assets/images/v2/our-destinations/dubai-maritime.webp";

const INTRO_COPY =
  "Dubai Maritime City is one of Dubai's most forward-looking waterfront districts—an emerging hub where coastal living, modern infrastructure, and strategic connectivity come together. Surrounded by the sea on three sides and positioned between Port Rashid and the iconic Dubai skyline, it offers a balanced blend of lifestyle, business, and future-ready urban planning.";

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

const DMC_VIDEOS_BASE = "/assets/downloaded/videos";

const accessFacilities: AccessFacilityItem[] = [
  {
    title: "Transportation in Dubai Maritime City",
    body: "Dubai Maritime City enjoys smooth access via Sheikh Rashid Road and is well-connected to key transport corridors linking the district to the rest of Dubai. Residents benefit from short travel times to major business hubs, public transport links in surrounding areas, and the city’s expanding road network that makes commuting efficient and predictable.",
    video: `${DMC_VIDEOS_BASE}/transport.mp4`,
  },
  {
    title: "Healthcare Establishments Near DMC",
    body: "Dubai Maritime City is closely connected to major hospitals and clinics in nearby districts, including Rashid Hospital and International Modern Hospital. With essential healthcare services just minutes away, residents enjoy quick access to reliable medical care.",
    video: `${DMC_VIDEOS_BASE}/health-care.mp4`,
  },
  {
    title: "Mosques & Churches",
    body: "The surrounding areas of Port Rashid, Jumeirah, and Bur Dubai provide easy access to several mosques, including Jumeirah Mosque and community mosques within minutes. Churches in Oud Metha and Jebel Ali are reachable through the city’s main highways, ensuring residents have diverse worship options close by.",
    video: `${DMC_VIDEOS_BASE}/Mosques.mp4`,
  },
  {
    title: "Schools Near DMC",
    body: "Dubai Maritime City is surrounded by established educational zones, with schools such as GEMS Winchester, New Academy School, and Dubai Gem School all within a short drive. The proximity to Jumeirah and Bur Dubai gives families access to a wide selection of nurseries, primary, and secondary institutions.",
    video: `${DMC_VIDEOS_BASE}/schools.mp4`,
  },
];

type InvestReasonItem = {
  title: string;
  description: string;
  bullets: string[];
};

const investReasons: InvestReasonItem[] = [
  {
    title: "Rising Waterfront Demand",
    description:
      "A limited coastline makes waterfront property one of Dubai's most sought-after investment categories.",
    bullets: [
      "Scarce coastal supply across core Dubai",
      "Strong rental demand for sea-facing residences",
      "Premium positioning in a land-constrained market",
    ],
  },
  {
    title: "Strong Capital Appreciation",
    description:
      "As DMC transforms into a premium mixed-use district, early investments benefit from increasing land and property value.",
    bullets: ["Early-mover advantage in a maturing district", "Rising values as infrastructure completes", "Long-term upside from mixed-use growth"],
  },
  {
    title: "Strategic Central Location",
    description:
      "Minutes from Downtown, DIFC, and DXB Airport — offering unmatched connectivity and convenience.",
    bullets: ["Quick access to business and finance hubs", "DXB within a short drive", "Major highways linking the wider city"],
  }
];

const nearbyAttractions: NearbyItem[] = [
  {
    title: "Museum of the Future",
    time: "~12 minutes",
    image: "/assets/images/v2/pages/pages-internal-images/museum-of-the.webp",
  },
  {
    title: "Dubai Frame",
    time: "~8 minutes",
    image: "/assets/images/v2/locations/dubai-frame-3.webp",
  },
  {
    title: "Dubai International Airport (DXB)",
    time: "~15 minutes",
    image: "/assets/images/v2/locations/airport-dubai.webp",
  },
  {
    title: "Mall of the Emirates",
    time: "~20 minutes",
    image: "/assets/images/v2/locations/mall-of-the-emirates.webp",
  },
  {
    title: "Palm Jumeirah",
    time: "~25 minutes",
    image: "/assets/images/v2/locations/palm-jumeirah.webp",
  },
  {
    title: "Dubai Marina",
    time: "~25 minutes",
    image: "/assets/images/v2/locations/dubai-marina-1024x768-1-1.webp",
  },
  {
    title: "Gold Souk & Old Dubai",
    time: "~12 minutes",
    image: "/assets/images/v2/locations/architecture-1815863_1280.webp",
  },
  {
    title: "City Walk",
    time: "~9 minutes",
    image:
      "/assets/images/v2/pages/pages-internal-images/business-partners-team-walking-down-discussing-work-1.webp",
  },
  {
    title: "Jumeirah Mosque",
    time: "~8 minutes",
    image: "/assets/images/v2/locations/look-from-afar-awesome-buildings-shekh-zayed-grand-mosque-1.webp",
  },
  {
    title: "Burj Khalifa & Dubai Mall",
    time: "~15 minutes",
    video: `${DMC_VIDEOS_BASE}/dubai-city-road-with-buildings-and-futuristic-arch-2023-11-27-04-59-19-utc_compressed.mp4`,
  },
];

function InvestCheckIcon() {
  return (
    <svg className="po-destination-invest-check" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path
        d="M13.5 4.5L6.5 11.5L2.5 7.5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function InvestReasonCard({ title, description, bullets }: InvestReasonItem) {
  return (
    <article className="po-destination-invest-card">
      <h3 className="po-destination-invest-card-title">{title}</h3>
      <p className="po-destination-invest-card-desc">{description}</p>
      <ul className="po-destination-invest-list">
        {bullets.map((line) => (
          <li key={line} className="po-destination-invest-list-item">
            <InvestCheckIcon />
            <span>{line}</span>
          </li>
        ))}
      </ul>
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
          <source src={video} type="video/mp4" />
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
              <source src={video} type="video/mp4" />
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

export default function DubaiMaritimeCityDestinationPage() {
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
            aria-label="Dubai Maritime City aerial view"
          />
          <div className="po-destination-hero-overlay" aria-hidden="true" />
          <div className="po-destination-hero-frame">
            <div className="container po-destination-hero-title-wrap">
              <h1 id="destination-hero-title" className="po-destination-hero-title">
                Dubai Maritime City
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

        <section className="po-destination-intro" aria-label="About Dubai Maritime City">
          <div className="container">
            <p className="po-destination-intro-text">{INTRO_COPY}</p>
          </div>
        </section>

        <section className="po-destination-nearby" aria-labelledby="destination-nearby-heading">
          <div className="container po-destination-nearby-intro">
            <h2 id="destination-nearby-heading" className="po-destination-section-title">
              Nearby Attractions
            </h2>
            <p className="po-destination-section-lead">Drive times are approximate from Dubai Maritime City.</p>
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

        <section className="po-destination-invest" aria-labelledby="destination-invest-heading">
          <div className="po-destination-invest-header">
            <div className="container po-destination-invest-header-inner">
              <p className="po-destination-invest-kicker">Why Dubai Maritime City</p>
              <h2 id="destination-invest-heading" className="po-destination-invest-title">
                Why invest in Dubai Maritime City?
              </h2>
              <p className="po-destination-invest-intro">
                Dubai Maritime City offers luxury, modern living, and investment potential. Here are key reasons why
                it&apos;s a prime choice for investors:
              </p>
            </div>
          </div>
          <div className="po-destination-invest-cards-shell">
            <div className="container">
              <div className="po-destination-invest-grid">
                {investReasons.map((item) => (
                  <InvestReasonCard key={item.title} {...item} />
                ))}
              </div>
            </div>
          </div>
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
