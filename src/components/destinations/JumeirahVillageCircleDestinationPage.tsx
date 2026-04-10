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
    value: "Jumeirah Village Circle (JVC), Dubai, UAE",
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
    value: "The Residence by Prestige One",
    href: "https://prestigeone.ae/projects/the-residence-by-prestige-one/",
  },
];

const HERO_BG = "/assets/images/v2/our-destinations/jumeirah-village-circle-jvc.webp";

const INTRO_COPY =
  "Jumeirah Village Circle (JVC) is a well-rounded residential community known for its village-style layout, green pockets, and strong family appeal. With convenient access to major highways and everyday amenities nearby, JVC continues to attract residents and investors seeking balance, connectivity, and long-term value in central Dubai.";

const BURJ_KHALIFA_VIDEO =
  "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/13115148/6600778_Architecture_Cityscape_1280x720.mp4";

const BOTTOM_WIDE_VIDEO =
  "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/25091713/cleanend_1920x1080_P1_RESIDENCE-Property-Video.mp4";

/** Reused from Dubai Islands / Dubai Maritime City destination pages. */
const DUBAI_AIRPORT_IMAGE =
  "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/13113544/airport-1024x768-1.jpg";

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
    title: "Circle Mall",
    time: "~4 minutes",
    image:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/17074707/circle-mall.webp",
  },
  {
    title: "The Walk",
    time: "~22 minutes",
    image:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/17074700/city-walk-1024x768-1.webp",
  },
  {
    title: "Dubai International Airport",
    time: "~25 minutes",
    image: DUBAI_AIRPORT_IMAGE,
  },
  {
    title: "Mall of the Emirates",
    time: "~15 minutes",
    image:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/17074703/mall-of-the-emirates.webp",
  },
  {
    title: "Dubai Hills Mall",
    time: "~10 minutes",
    image:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/17074658/dubai-hills-mall-1024x768-1.webp",
  },
  {
    title: "Museum of the Future",
    time: "~24 minutes",
    image:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/13113547/museum-of-the-1024x768-1.jpg",
  },
  {
    title: "Burj Khalifa",
    time: "~5 minutes",
    video: BURJ_KHALIFA_VIDEO,
  },
];

const accessFacilities: AccessFacilityItem[] = [
  {
    title: "Transportation in JVC",
    body: "Jumeirah Village Circle is well connected via Sheikh Mohammed Bin Zayed Road and Al Khail Road, with bus routes serving the community and taxi and ride-hailing options readily available. Metro access is a short drive away, supporting convenient travel across Dubai for work and leisure.",
    video:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/17074951/5359797_Coll_wavebreak_Indoors_1280x720.mp4",
  },
  {
    title: "Healthcare Establishments in JVC",
    body: "Residents benefit from clinics and medical centres within and around JVC, with additional hospitals and specialist facilities reachable in nearby districts. The area supports routine care, family health needs, and access to wider Dubai healthcare networks.",
    video:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/17075156/6274477_Elderly_Care_1280x720.mp4",
  },
  {
    title: "Mosques & Churches in JVC",
    body: "JVC includes mosques for daily prayer, with further places of worship and community facilities available across surrounding neighbourhoods within a short drive, supporting diverse resident needs.",
    video:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/17075300/2644328_La-Mer-Beach_Dubai-Beach_1280x720.mp4",
  },
  {
    title: "Schools in JVC",
    body: "The community is served by nurseries and schools offering a range of curricula, making JVC a practical choice for families. Additional reputable institutions in adjacent areas expand options for every stage of education.",
    video:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/17075346/6249880_Teacher_Classroom_1280x720.mp4",
  },
];

const investReasons: InvestReasonItem[] = [
  {
    title: "JVC strategic location",
    description:
      "Jumeirah Village Circle sits between major Dubai corridors, offering practical access to business districts, retail hubs, and leisure destinations.",
    bullets: [
      "Strong highway connectivity",
      "Central positioning within Dubai",
      "Convenient daily commuting options",
    ],
  },
  {
    title: "Diverse investment opportunities",
    description:
      "From apartments to townhouses, JVC offers a wide mix of residential formats suited to different budgets and investor strategies.",
    bullets: [
      "Broad product mix",
      "Steady rental demand drivers",
      "Flexible entry points",
    ],
  },
  {
    title: "Community lifestyle appeal",
    description:
      "A family-friendly master community with parks, retail, and services supports long-term resident demand.",
    bullets: [
      "Established neighbourhood amenities",
      "Green spaces and walkable pockets",
      "Strong end-user and tenant interest",
    ],
  },
  {
    title: "Long-term growth corridor",
    description:
      "Ongoing infrastructure and nearby development continue to strengthen JVC as a residential investment hub.",
    bullets: [
      "Sustained area development",
      "Improving connectivity over time",
      "Long-term value narrative",
    ],
  },
  {
    title: "Government support and stability",
    description:
      "Dubai's investor-friendly framework and economic diversification underpin confidence in well-located residential districts.",
    bullets: [
      "Stable regulatory environment",
      "Clear property ownership structures",
      "Secure market fundamentals",
    ],
  },
  {
    title: "Balanced liveability",
    description:
      "JVC combines relative affordability with quality of life—an attractive blend for residents and landlords alike.",
    bullets: [
      "Value-led positioning",
      "Strong community character",
      "Consistent lifestyle demand",
    ],
  },
];

const projectHighlights = [
  {
    label: "The Residence by Prestige One",
    href: "https://prestigeone.ae/projects/the-residence-by-prestige-one/",
  },
  {
    label: "Berkeley Square South by Prestige One",
    href: "https://prestigeone.ae/projects/berkeley-square-south/",
  },
  {
    label: "Berkeley Square North by Prestige One",
    href: "https://prestigeone.ae/projects/berkeley-square-north/",
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

export default function JumeirahVillageCircleDestinationPage() {
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
          <div className="po-destination-hero-media" style={{ backgroundImage: `url(${HERO_BG})` }} role="img" aria-label="Jumeirah Village Circle" />
          <div className="po-destination-hero-overlay" aria-hidden="true" />
          <div className="po-destination-hero-frame">
            <div className="container po-destination-hero-title-wrap">
              <h1 id="destination-hero-title" className="po-destination-hero-title">Jumeirah Village Circle</h1>
            </div>
          </div>
          <div className="po-destination-hero-bottom-rail">
            <ContactDetailCardsSection items={DESTINATION_CONTACT_ITEMS} showSocial className="po-contact-detail-strip--hero-glass" />
          </div>
        </section>

        <section className="po-destination-intro" aria-label="About Jumeirah Village Circle">
          <div className="container po-destination-intro-copy">
            <p className="po-destination-intro-text">{INTRO_COPY}</p>
          </div>
        </section>

        <section className="po-destination-nearby" aria-labelledby="destination-nearby-heading">
          <div className="container po-destination-nearby-intro">
            <h2 id="destination-nearby-heading" className="po-destination-section-title">Nearby attractions</h2>
            <p className="po-destination-section-lead">Drive times are approximate from Jumeirah Village Circle.</p>
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
              <p className="po-destination-invest-kicker">Why Jumeirah Village Circle</p>
              <h2 id="destination-invest-heading" className="po-destination-invest-title">Why invest in Jumeirah Village Circle?</h2>
              <p className="po-destination-invest-intro">
                Jumeirah Village Circle combines community living, connectivity, and investment appeal. Here are key reasons why it
                remains a strong choice for investors:
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

        <section className="po-destination-project-spotlight" aria-labelledby="jvc-project-heading">
          <div className="container">
            <h2 id="jvc-project-heading" className="po-destination-project-spotlight-title">Prestige One Project in Jumeirah Village Circle</h2>
            <p className="po-destination-project-spotlight-lead">
              The Residence by Prestige One is a testament to our commitment to finely detailed and elegantly designed buildings. Its
              indoor spaces exude sophistication, and the vibrant outdoor area, along with unique amenities, elevates our residents&apos;
              lifestyles.
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

        <section className="po-destination-wide-video" aria-label="Jumeirah Village Circle video">
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
