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
    value: "Barsha Heights, UAE",
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
    value: "The One by Prestige One",
    href: "https://prestigeone.ae/projects/the-one-by-prestige-one/",
  },
];

const HERO_BG = "/assets/images/v2/our-destinations/barsha-heights.webp";

const INTRO_PARAGRAPHS = [
  "Previously known as Tecom, Barsha Heights is a community that includes a mix of residential buildings, commercial offices, serviced apartments, and hotels. This area offers an affordable lifestyle that’s a popular choice for both small businesses and people looking for a place to live and work in Dubai. Barsha Heights stands out for its central location and the way it combines living and working spaces together.",
  "This district is conveniently located near major roads. It’s right next to Al Hessa Street (D61) on the north, giving residents and businesses direct access to major highways similar to Burj Khalifa (E11) and Al Khail Road (E44). The area is also connected to nearby residential neighbourhoods such as Meadows Dubai, Jumeirah Lake Towers (JLT), and Emirates Hills through Jebel Ali Racecourse Road and First Al Khail Street.",
];

/** Same Burj / cityscape asset used on the Dubai Maritime City destination page. */
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

const accessFacilities: AccessFacilityItem[] = [
  {
    title: "Transportation in Barsha Heights",
    body: "Barsha Heights boasts exceptional connectivity, chiefly through the Dubai Metro Red Line. The locality is served by two key metro stops within Al Barsha—specifically, the Mall of the Emirates station and the Mashreq station. Located just off Hessa Street (D61) and the iconic Sheikh Zayed Road (E11), Barsha Heights integrates seamlessly into the heart of the city.\n\nFor those navigating within Al Barsha, the choice of three metro stations—Mall of the Emirates, Mashreq, and Dubai Internet City—ensures convenience. This strategic positioning elevates Barsha Heights to a prime location for both businesses and individuals.",
    video:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/13105243/dubai-metro-arrive-at-metro-station-2023-11-27-05-33-18-utc-1.mov",
  },
  {
    title: "Healthcare Establishments in Barsha Heights",
    body: "Barsha Heights stands out as a prominent community in Dubai with an array of renowned healthcare facilities including Aster Clinic, GMC Clinics, Rafi’s Poly Clinic, Clover Medical Centre, as well as the Saudi German and Al Zahra Hospitals. Additionally, it is well-served by trusted pharmacies like Health Care Pharmacy and Get Well Pharmacy.",
    video:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/17075156/6274477_Elderly_Care_1280x720.mp4",
  },
  {
    title: "Mosques in Barsha Heights",
    body: "In Barsha Heights, the Muslim community frequents mosques such as Hamel bin Khadam Al Ghaith Mosque, The Greens Mosque, Mariam Mosque, and Osama Bin Zaid Mosque for their religious practices. For Christians, The Fellowship Dubai Church, located opposite Sheikh Zayed Road, provides a place of worship and community engagement.",
    video:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/13110131/2644343_Mosque_Sharjah_1280x720.mp4",
  },
  {
    title: "Schools in Barsha Heights",
    body: "Located conveniently close to Barsha Heights, residents have easy access to top educational institutions: GEMS Founders School and Dubai Heights Academy are both 10 minutes away, catering to K-12 students with diverse curricula. Higher education options are also nearby, with the American University of Dubai 8 minutes away, Middlesex University just 5 minutes, and the University of Wollongong a mere 4-minute drive, offering a wide range of academic programs to meet various interests and career goals.",
    video:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/17075346/6249880_Teacher_Classroom_1280x720.mp4",
  },
];

type InvestReasonItem = {
  title: string;
  description: string;
  bullets: string[];
};

/** Same card pattern as Dubai Maritime City — 4 columns on large screens; 6 cards wrap to a second row. */
const investReasons: InvestReasonItem[] = [
  {
    title: "Strategic location",
    description:
      "Its central location offers unmatched connectivity to Dubai's major business, retail, and leisure destinations.",
    bullets: [
      "Core access to major business districts",
      "Strong retail and leisure connectivity",
      "Central positioning across Dubai corridors",
    ],
  },
  {
    title: "Diverse community",
    description:
      "Barsha Heights is a melting pot of cultures, offering a dynamic and inclusive living environment.",
    bullets: [
      "Multicultural residential and professional mix",
      "Inclusive, dynamic neighbourhood character",
      "Strong appeal for international residents",
    ],
  },
  {
    title: "Investment potential",
    description:
      "With a mix of residential and commercial properties, Barsha Heights promises strong rental yields and capital appreciation.",
    bullets: ["Residential and commercial inventory mix", "Attractive rental yield potential", "Long-term capital appreciation outlook"],
  },
  {
    title: "Lifestyle amenities",
    description:
      "Residents enjoy a variety of dining, entertainment, and leisure facilities within walking distance.",
    bullets: ["Dining, cafés, and entertainment nearby", "Walkable everyday convenience", "Balanced live-work lifestyle"],
  },
  {
    title: "Investment returns",
    description:
      "Properties in Barsha Heights show promising appreciation and high rental yields, supported by Dubai's expanding economy and the area's continuous development.",
    bullets: ["Healthy rental demand in established corridors", "Supported by Dubai's expanding economy", "Continuous area development and upgrades"],
  },
  {
    title: "Government support",
    description:
      "Backed by Dubai's strategic infrastructure investment, Barsha Heights benefits from excellent connectivity and facilities, supporting a secure environment for residents and businesses.",
    bullets: [
      "Strategic infrastructure investment across Dubai",
      "Excellent connectivity and public services nearby",
      "Secure environment for residents and businesses",
    ],
  },
];

const nearbyAttractions: NearbyItem[] = [
  {
    title: "The Greens Souk",
    time: "~3 minutes",
    image:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/17111144/the-greens-souk-qn9reswh3dpz28is53c6a63yaj209tcuvvwpgc360g-2048x1536.webp",
  },
  {
    title: "Mall of the Emirates",
    time: "~8 minutes",
    image:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/17111150/mall-of-the-emirates-1024x768-1.webp",
  },
  {
    title: "Emirates Golf Club",
    time: "~6 minutes",
    image:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/17111626/emirates-golf-club-1024x768-1.webp",
  },
  {
    title: "Dubai Marina Mall",
    time: "~8 minutes",
    image:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/17111148/dubai-marina-mall.webp",
  },
  {
    title: "Al Sufouh Beach",
    time: "~9 minutes",
    image:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/17111152/al-sufouh-1024x768-1.webp",
  },
  {
    title: "Kite Beach",
    time: "~11 minutes",
    image:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/17111138/kite-beach-1024x768-1.webp",
  },
  {
    title: "Burj Khalifa",
    time: "~13 minutes",
    video: BURJ_KHALIFA_VIDEO,
  },
];

function videoMimeType(url: string) {
  if (url.endsWith(".mov")) return "video/quicktime";
  return "video/mp4";
}

function AccessFacilityCard({ title, body, video }: AccessFacilityItem) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.muted = true;
    void el.play().catch(() => {});
  }, [video]);

  const paragraphs = body.split("\n\n").filter(Boolean);

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
        {paragraphs.map((p, i) => (
          <p key={i} className="po-destination-access-card-text">
            {p}
          </p>
        ))}
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

export default function BarshaHeightsDestinationPage() {
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
            aria-label="Barsha Heights"
          />
          <div className="po-destination-hero-overlay" aria-hidden="true" />
          <div className="po-destination-hero-frame">
            <div className="container po-destination-hero-title-wrap">
              <h1 id="destination-hero-title" className="po-destination-hero-title">
                Barsha Heights
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

        <section className="po-destination-intro" aria-label="About Barsha Heights">
          <div className="container po-destination-intro-copy">
            {INTRO_PARAGRAPHS.map((text, i) => (
              <p key={i} className="po-destination-intro-text">
                {text}
              </p>
            ))}
          </div>
        </section>

        <section className="po-destination-nearby" aria-labelledby="destination-nearby-heading">
          <div className="container po-destination-nearby-intro">
            <h2 id="destination-nearby-heading" className="po-destination-section-title">
              Nearby attractions
            </h2>
            <p className="po-destination-section-lead">Drive times are approximate from Barsha Heights.</p>
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
              Accessibility &amp; facilities
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
              <p className="po-destination-invest-kicker">Why Barsha Heights</p>
              <h2 id="destination-invest-heading" className="po-destination-invest-title">
                Why invest in Barsha Heights?
              </h2>
              <p className="po-destination-invest-intro">
                Barsha Heights is a thriving hub that combines modern living with prime business opportunities. Here are
                the top reasons why it stands out as a prime investment choice:
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

        <section className="po-destination-project-spotlight" aria-labelledby="barsha-project-heading">
          <div className="container">
            <h2 id="barsha-project-heading" className="po-destination-project-spotlight-title">
              Prestige One project in Barsha Heights
            </h2>
            <p className="po-destination-project-spotlight-lead">
              Discover The One by Prestige One in Barsha Heights — a vibrant commercial hub thoughtfully designed for
              visionaries within a G+14 contemporary development. This address offers modern spaces, bright open layouts,
              and a minimalist aesthetic inspired by comfort and practicality—ideal for businesses seeking a well-connected
              base in the heart of the city.
            </p>
            <a
              href="https://prestigeone.ae/projects/the-one-by-prestige-one/"
              className="po-destination-project-spotlight-cta"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>The One by Prestige One</span>
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
