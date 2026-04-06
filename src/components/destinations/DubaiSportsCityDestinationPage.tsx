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
    value: "Dubai Sports City, UAE",
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
    value: "Vista by Prestige One",
    href: "https://prestigeone.ae/projects/vista-by-prestige-one/",
  },
];

const HERO_BG = "/assets/img/v2/our-destinations/dubai-sport-city.webp";

const INTRO_COPY =
  "Dubai Sports City is a dynamic destination where sport, lifestyle, and modern living meet. Built around world-class venues and active community spaces, it offers residents and investors strong connectivity, everyday convenience, and long-term growth potential within one of Dubai's most lifestyle-driven districts.";

const BURJ_KHALIFA_VIDEO =
  "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/13115148/6600778_Architecture_Cityscape_1280x720.mp4";

const BOTTOM_WIDE_VIDEO =
  "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/25091708/cleanend_1920x1080_P1_VISTA-Property-Video.mp4";

type NearbyItem = {
  title: string;
  time: string;
  image?: string;
  video?: string;
};

type AccessFacilityItem = {
  title: string;
  body: string;
  video?: string;
};

type InvestReasonItem = {
  title: string;
  description: string;
  bullets: string[];
};

const nearbyAttractions: NearbyItem[] = [
  {
    title: "ICC Academy",
    time: "~3 minutes",
    image:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/16135451/icc-academy-qn9rdnjkqo5cve6uulgl8gjo5kpuv4so277cc5shm8-2048x1536.webp",
  },
  {
    title: "The Els Club",
    time: "~4 minutes",
    image:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/16135440/ELS-1024x768-1.webp",
  },
  {
    title: "Dubai Polo & Equestrian Club",
    time: "~12 minutes",
    image:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/16135454/EQUESTRIAN-1024x768-1.webp",
  },
  {
    title: "LaLiga Academy",
    time: "~3 minutes",
    image:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/16135443/LALIGA.webp",
  },
  {
    title: "Dubai International Cricket Stadium",
    time: "~3 minutes",
    image:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/16135438/CRICKET-STA-1024x768-1.webp",
  },
  {
    title: "Dubai Autodrome",
    time: "~5 minutes",
    image:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/16135500/AUTODROME-1024x768-1.webp",
  },
  {
    title: "Burj Khalifa",
    time: "~20 minutes",
    video: BURJ_KHALIFA_VIDEO,
  },
];

const accessFacilities: AccessFacilityItem[] = [
  {
    title: "Transportation in Dubai Sports City",
    body: "Dubai Sports City enjoys excellent connectivity with the wider Dubai area through various public transport options. The community benefits from multiple bus routes, while the closest metro station to Dubai Sports City is only a short distance away. Additionally, taxi services along with Careem and Uber are readily available.",
    video:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/17070231/dubai-city-road-with-buildings-and-futuristic-arch-2023-11-27-04-59-19-utc_compressed.mp4",
  },
  {
    title: "Healthcare Establishments in Dubai Sports City",
    body: "The community is home to a variety of healthcare facilities that provide a wide array of medical services to meet the needs of its residents. Among these are the Dubai Sports City Clinic, Mediclinic Parkview Hospital, and Aster Clinic, each offering specialised care with a commitment to patient health and wellbeing.",
    video:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/17070035/Dubai-healthccare.mp4",
  },
  {
    title: "Mosques in Dubai Sports City",
    body: "Within Dubai Sports City, residents have access to two main mosques for their spiritual needs. The first mosque is conveniently situated near the Grand Horizon 2 Building, while the second can be found adjacent to the Dubai Sports City Head Office.",
    video:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/13110131/2644343_Mosque_Sharjah_1280x720.mp4",
  },
  {
    title: "Schools in Dubai Sports City",
    body: "In Dubai Sports City, education is a highlight with nine leading schools, including Bradenton Preparatory Academy, Victory Heights Primary School, and Renaissance School. For younger children, The Wonder Years Nursery, Kinder Castle Nursery, and Victory Heights Foundation Stage offer excellent early learning opportunities.",
    video:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/17070344/6249626_Young_School_1280x720.mp4",
  },
];

const investReasons: InvestReasonItem[] = [
  {
    title: "Dubai Sports City strategic location",
    description:
      "Dubai Sports City enjoys a strategic location in Dubai with convenient access to major highways and city corridors.",
    bullets: [
      "Fast access to key transport arteries",
      "Strong citywide connectivity for daily commute",
      "Balanced live-work accessibility",
    ],
  },
  {
    title: "Diverse investment opportunities",
    description:
      "With residential, commercial, and recreation assets, Dubai Sports City offers varied opportunities for different investor profiles.",
    bullets: [
      "Residential and mixed-use options",
      "Diverse tenant and buyer demand",
      "Flexible investment positioning",
    ],
  },
  {
    title: "High rental yields and capital appreciation",
    description:
      "Dubai Sports City has shown a consistent trend of rental performance and long-term value growth.",
    bullets: [
      "Consistent leasing interest",
      "Attractive rental return potential",
      "Long-term capital growth outlook",
    ],
  },
  {
    title: "Thriving sports and leisure facilities",
    description:
      "At the core of Dubai Sports City are world-class sports venues, academies, and fitness infrastructure.",
    bullets: [
      "International-standard sports ecosystem",
      "Strong lifestyle and leisure appeal",
      "Year-round active community energy",
    ],
  },
  {
    title: "Government support and stability",
    description:
      "Dubai's investor-focused policies and economic diversification support long-term confidence in growth corridors.",
    bullets: [
      "Stable policy and regulatory environment",
      "Infrastructure-led district development",
      "Secure long-term market confidence",
    ],
  },
  {
    title: "Active community and lifestyle",
    description:
      "A vibrant community mix with sports, recreation, and family-oriented amenities makes Dubai Sports City attractive for residents.",
    bullets: [
      "Community-focused living environment",
      "Family-friendly amenities and services",
      "Strong end-user lifestyle demand",
    ],
  },
];

const projectHighlights = [
  {
    label: "The Vista by Prestige One",
    href: "https://prestigeone.ae/projects/vista-by-prestige-one/",
  },
  {
    label: "Place by Prestige One",
    href: "https://prestigeone.ae/projects/place-by-prestige-one/",
  },
  {
    label: "The One by Prestige One",
    href: "https://prestigeone.ae/projects/the-one-by-prestige-one/",
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
    if (!el || !video) return;
    el.muted = true;
    void el.play().catch(() => {});
  }, [video]);

  return (
    <article className="po-destination-access-card">
      <div className="po-destination-access-media">
        {video ? (
          <video ref={ref} className="po-destination-access-video" muted loop playsInline autoPlay preload="metadata">
            <source src={video} type={videoMimeType(video)} />
          </video>
        ) : (
          <div className="po-destination-access-media-fallback" aria-hidden="true" />
        )}
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

export default function DubaiSportsCityDestinationPage() {
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
        <section className="po-destination-hero po-destination-hero--with-contact-rail" aria-labelledby="destination-hero-title">
          <div className="po-destination-hero-media" style={{ backgroundImage: `url(${HERO_BG})` }} role="img" aria-label="Dubai Sports City" />
          <div className="po-destination-hero-overlay" aria-hidden="true" />
          <div className="po-destination-hero-frame">
            <div className="container po-destination-hero-title-wrap">
              <h1 id="destination-hero-title" className="po-destination-hero-title">Dubai Sports City</h1>
            </div>
          </div>
          <div className="po-destination-hero-bottom-rail">
            <ContactDetailCardsSection items={DESTINATION_CONTACT_ITEMS} showSocial className="po-contact-detail-strip--hero-glass" />
          </div>
        </section>

        <section className="po-destination-intro" aria-label="About Dubai Sports City">
          <div className="container po-destination-intro-copy">
            <p className="po-destination-intro-text">{INTRO_COPY}</p>
          </div>
        </section>

        <section className="po-destination-nearby" aria-labelledby="destination-nearby-heading">
          <div className="container po-destination-nearby-intro">
            <h2 id="destination-nearby-heading" className="po-destination-section-title">Nearby attractions</h2>
            <p className="po-destination-section-lead">Drive times are approximate from Dubai Sports City.</p>
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
              <p className="po-destination-invest-kicker">Why Dubai Sports City</p>
              <h2 id="destination-invest-heading" className="po-destination-invest-title">Why invest in Dubai Sports City?</h2>
              <p className="po-destination-invest-intro">
                Dubai Sports City offers luxury, modern living, and investment potential. Here are key reasons why it's a
                prime choice for investors:
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

        <section className="po-destination-project-spotlight" aria-labelledby="sports-project-heading">
          <div className="container">
            <h2 id="sports-project-heading" className="po-destination-project-spotlight-title">Prestige One project in Dubai Sports City</h2>
            <p className="po-destination-project-spotlight-lead">
              Vista by Prestige One, designed by award-winning architect Lacasa, blends elegance with functionality in
              Dubai Sports City. Each apartment, apart from studios, offers sweeping golf course views.
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

        <section className="po-destination-wide-video" aria-label="Dubai Sports City video">
          <video ref={wideRef} className="po-destination-wide-video-el" muted loop playsInline autoPlay preload="metadata">
            <source src={BOTTOM_WIDE_VIDEO} type="video/mp4" />
          </video>
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

