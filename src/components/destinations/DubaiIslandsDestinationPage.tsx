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
    value: "Dubai Islands, UAE",
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
    value: "Seaside by Prestige One",
    href: "https://prestigeone.ae/projects/seaside-by-prestige-one/",
  },
];

const HERO_BG = "/assets/images/v2/our-destinations/dubai-Islands.webp";

const INTRO_COPY =
  "Dubai Islands is a masterfully designed waterfront destination, featuring a collection of islands each offering a unique charm. With serene beaches, luxury resorts, and stunning ocean views, this coastal retreat promises an unmatched lifestyle. Dubai Islands provides a perfect blend of leisure, entertainment, and natural beauty, making it a prestigious address for those seeking tranquility along the water.";

const INTRO_POINTS = ["Deira Island", "Dream Island", "Island Central", "Hills Island"] as const;

const BURJ_KHALIFA_VIDEO =
  "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/13115148/6600778_Architecture_Cityscape_1280x720.mp4";

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

type InvestReasonItem = {
  title: string;
  description: string;
  bullets: string[];
};

const nearbyAttractions: NearbyItem[] = [
  {
    title: "Dubai Islands Mall",
    time: "~1 minute",
    image:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/17072455/272220.jpg",
  },
  {
    title: "Centara Mirage Beach Resort",
    time: "~5 minutes",
    image:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/17072929/CENTARA-1-1024x768-1.webp",
  },
  {
    title: "Dubai International Airport",
    time: "~16 minutes",
    image:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/13113544/airport-1024x768-1.jpg",
  },
  {
    title: "Souk Al Marfa",
    time: "~5 minutes",
    image:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/17072932/For_Press_2-1.webp",
  },
  {
    title: "Dubai Islands Marina",
    time: "~7 minutes",
    image:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/17072927/DUBAI-ISLANDS-MARINA-1024x768-1.webp",
  },
  {
    title: "Riu Palace Dubai Island",
    time: "~5 minutes",
    image:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/17072923/RIU-1024x768-1.webp",
  },
  {
    title: "Burj Khalifa",
    time: "~5 minutes",
    video: BURJ_KHALIFA_VIDEO,
  },
];

const accessFacilities: AccessFacilityItem[] = [
  {
    title: "Transportation in Dubai Islands",
    body: "Dubai Islands is easily accessible through well-connected road networks, including Sheikh Zayed Road and Al Khail Road. Public transportation, such as metro stations and bus routes, will extend into the area, making commuting effortless. The islands will also feature marinas, offering water taxis and ferry services for a unique mode of travel across Dubai.",
    video:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/17070231/dubai-city-road-with-buildings-and-futuristic-arch-2023-11-27-04-59-19-utc_compressed.mp4",
  },
  {
    title: "Healthcare Establishments in Dubai Islands",
    body: "While the islands themselves are in development, nearby neighborhoods provide access to world-class medical care. Hospitals like Al Baraha Hospital and Dubai Hospital are just a short drive away, offering comprehensive healthcare services to residents. Future clinics and healthcare centers are planned to ensure convenience for all.",
    video:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/13110005/5383333_Coll_wavebreak_Hospital_1280x720.mp4",
  },
  {
    title: "Mosques & Churches in Dubai Islands",
    body: "For worship, residents of Dubai Islands can visit nearby mosques such as Deira Grand Mosque, just a short drive away. Christian residents can find churches like St. Mary’s Catholic Church within accessible distance, ensuring a place of worship for people of all faiths.",
    video:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/13110131/2644343_Mosque_Sharjah_1280x720.mp4",
  },
  {
    title: "Schools in Dubai Islands",
    body: "Families residing in Dubai Islands have easy access to several top international schools located in nearby areas. GEMS Royal Dubai School and The Winchester School are within close reach, providing quality education from kindergarten through secondary school. More educational institutions will emerge as development matures.",
    video:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/17070344/6249626_Young_School_1280x720.mp4",
  },
];

const investReasons: InvestReasonItem[] = [
  {
    title: "Prime waterfront living",
    description:
      "Dubai Islands offers exclusive access to beautiful beaches and breathtaking ocean views.",
    bullets: [
      "Direct access to island beaches",
      "Premium sea-view residential zones",
      "High-end coastal lifestyle appeal",
    ],
  },
  {
    title: "Growing tourist hub",
    description:
      "Positioned to become a new tourism hotspot with world-class resorts, entertainment, and leisure facilities.",
    bullets: [
      "Major hospitality and resort pipeline",
      "Strong leisure and tourism demand",
      "Year-round destination potential",
    ],
  },
  {
    title: "High investment potential",
    description:
      "With growing infrastructure and demand for waterfront properties, property values are expected to rise.",
    bullets: [
      "Early growth-cycle entry point",
      "Rising demand for waterfront assets",
      "Long-term capital appreciation outlook",
    ],
  },
  {
    title: "Proximity to Downtown Dubai",
    description:
      "Just minutes from the heart of the city, offering both tranquility and easy access to Dubai's top attractions.",
    bullets: [
      "Quick city-core connectivity",
      "Balanced leisure and urban access",
      "Convenient access to key landmarks",
    ],
  },
  {
    title: "Future-ready infrastructure",
    description:
      "Advanced transportation, healthcare, and educational facilities are in development, making it ideal for long-term investment.",
    bullets: [
      "Planned transport and mobility upgrades",
      "Expanding healthcare and education access",
      "Strong long-term liveability profile",
    ],
  },
  {
    title: "Sustainable living",
    description:
      "The islands are designed with sustainability in mind, featuring green spaces and eco-friendly initiatives that attract conscious investors.",
    bullets: [
      "Green master-planning approach",
      "Eco-conscious community framework",
      "Strong appeal for sustainability-focused buyers",
    ],
  },
];

const projectHighlights = [
  {
    label: "Seaside by Prestige One",
    href: "https://prestigeone.ae/projects/seaside-by-prestige-one/",
  },
  {
    label: "Coastal Haven by Prestige Harbour",
    href: "https://prestigeone.ae/projects/coastal-haven-by-prestige-harbour/",
  },
  {
    label: "Luxury Canal Residences by Prestige Harbour",
    href: "https://prestigeone.ae/projects/luxury-canal-residences-by-prestige-harbour/",
  },
] as const;

function videoMimeType(url: string) {
  if (url.endsWith(".mov")) return "video/quicktime";
  return "video/mp4";
}

function InvestCheckIcon() {
  return (
    <svg className="po-destination-invest-check" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M13.5 4.5L6.5 11.5L2.5 7.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
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
            <video ref={ref} className="po-project-page-amenity-tile-video" poster={image ?? undefined} muted loop playsInline autoPlay preload="auto">
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
        <video ref={ref} className="po-destination-access-video" muted loop playsInline autoPlay preload="metadata">
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

export default function DubaiIslandsDestinationPage() {
  return (
    <>
      <SiteHeader />
      <main className="po-destination-page">
        <section className="po-destination-hero po-destination-hero--with-contact-rail" aria-labelledby="destination-hero-title">
          <div className="po-destination-hero-media" style={{ backgroundImage: `url(${HERO_BG})` }} role="img" aria-label="Dubai Islands" />
          <div className="po-destination-hero-overlay" aria-hidden="true" />
          <div className="po-destination-hero-frame">
            <div className="container po-destination-hero-title-wrap">
              <h1 id="destination-hero-title" className="po-destination-hero-title">Dubai Islands</h1>
            </div>
          </div>
          <div className="po-destination-hero-bottom-rail">
            <ContactDetailCardsSection items={DESTINATION_CONTACT_ITEMS} showSocial className="po-contact-detail-strip--hero-glass" />
          </div>
        </section>

        <section className="po-destination-intro" aria-label="About Dubai Islands">
          <div className="container po-destination-intro-copy">
            <p className="po-destination-intro-text">{INTRO_COPY}</p>
            <ul className="po-destination-intro-points" aria-label="Dubai Islands clusters">
              {INTRO_POINTS.map((point) => (
                <li key={point} className="po-destination-intro-point">
                  <InvestCheckIcon />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="po-destination-nearby" aria-labelledby="destination-nearby-heading">
          <div className="container po-destination-nearby-intro">
            <h2 id="destination-nearby-heading" className="po-destination-section-title">Nearby attractions</h2>
            <p className="po-destination-section-lead">Drive times are approximate from Dubai Islands.</p>
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
            <h2 id="destination-access-heading" className="po-destination-access-heading">Accessibility &amp; facilities</h2>
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
              <p className="po-destination-invest-kicker">Why Dubai Islands</p>
              <h2 id="destination-invest-heading" className="po-destination-invest-title">Why invest in Dubai Islands?</h2>
              <p className="po-destination-invest-intro">
                Dubai Islands embodies the pinnacle of luxury and forward-thinking living in Dubai. Below are the core
                reasons making Dubai Islands a prime investment choice:
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

        <section className="po-destination-project-spotlight" aria-labelledby="islands-project-heading">
          <div className="container">
            <h2 id="islands-project-heading" className="po-destination-project-spotlight-title">Prestige One project in Dubai Islands</h2>
            <p className="po-destination-project-spotlight-lead">
              Seaside by Prestige One offers an exclusive retreat that harmonises the luxuries of urban living with the
              serene ambience of island life. Designed with sophistication, each residence boasts floor-to-ceiling windows
              and expansive balconies that invite the surrounding seascape into every home.
            </p>
            <ul className="po-destination-project-list">
              {projectHighlights.map((project) => (
                <li key={project.label}>
                  <a href={project.href} className="po-destination-project-spotlight-cta" target="_blank" rel="noopener noreferrer">
                    <span>{project.label}</span>
                    <span className="po-destination-project-spotlight-cta-icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="po-destination-tail" aria-label="More from Prestige One">
          <div className="container">
            <p className="po-destination-tail-text">
              Explore our <Link href="/projects" className="po-destination-tail-link">residential projects</Link> across Dubai.
            </p>
          </div>
        </section>
      </main>
      <SiteFooterBlock />
    </>
  );
}

