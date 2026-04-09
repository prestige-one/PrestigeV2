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
  { icon: "pin", label: "Address:", value: "MBR, UAE" },
  { icon: "phone", label: "Phone:", value: COMPANY_CONTACT.phoneDisplay, href: COMPANY_CONTACT.phoneTel },
  { icon: "email", label: "Email:", value: COMPANY_CONTACT.email, href: COMPANY_CONTACT.emailMailto },
  {
    icon: "globe",
    label: "Project:",
    value: "The Waterway by Prestige One",
    href: "https://prestigeone.ae/projects/the-waterway-by-prestige-one/",
  },
];

const HERO_BG = "https://prestigeone.ae/wp-content/uploads/2024/08/mbr-city-1.webp";
const BOTTOM_WIDE_VIDEO =
  "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/08/09125911/WhatsApp-Video-2024-06-07-at-09.51.22_ceb2c475.mp4";
const BURJ_KHALIFA_VIDEO =
  "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/13115148/6600778_Architecture_Cityscape_1280x720.mp4";

const INTRO_COPY =
  "This iconic destination, launched by His Highness Sheikh Mohammed Bin Rashid Al Maktoum, boasts an investment of AED 30 billion and is a vibrant tapestry of lush parks, the world's largest shopping centre, and the biggest man-made lagoon.";
const INTRO_COPY_2 =
  "MBR City has seen significant development with many new projects continually added. Strategically positioned between Sheikh Mohammed Bin Zayed Road (E311), Sheikh Zayed Road (E11), and Al Khail Road (E44), residents enjoy wide connectivity.";

const PROJECT_SPOTLIGHT_LEAD =
  "Discover The Waterway by Prestige One in Mohammed Bin Rashid City, your serene new home that portrays comfort and tranquillity. This G+20 floor residence neighbors the serene crystal lagoons. The interiors boast spacious rooms with a minimalist aesthetic-drawing inspiration from the tranquil simplicity of Japanese design.";

type NearbyItem = { title: string; time: string; image?: string; video?: string };
type AccessFacilityItem = { title: string; body: string; video: string };
type InvestReasonItem = { title: string; description: string };

const nearbyAttractions: NearbyItem[] = [
  {
    title: "Meydan One Mall",
    time: "~3 minutes",
    image:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/13112158/meydan-one-mall-qn9rdraxi0ai5u1e8n33iflij47bpx7lepta99mwxc-2048x1536.jpg",
  },
  {
    title: "Meydan Racecourse District",
    time: "~8 minutes",
    image:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/13113556/meydan-racecourse-1024x768-1.jpg",
  },
  {
    title: "Dubai International Airport",
    time: "~16 minutes",
    image:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/13113544/airport-1024x768-1.jpg",
  },
  {
    title: "Ras Al Khor Wildlife Sanctuary",
    time: "~5 minutes",
    image:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/13113601/ras-al-khor-wildlife.jpg",
  },
  {
    title: "Dubai Mall",
    time: "~5 minutes",
    image:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/13113554/dubai-mall-1024x768-1.jpg",
  },
  {
    title: "Museum of the Future",
    time: "~15 minutes",
    image:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/13113547/museum-of-the-1024x768-1.jpg",
  },
  { title: "Burj Khalifa", time: "~5 minutes", video: BURJ_KHALIFA_VIDEO },
];

const accessFacilities: AccessFacilityItem[] = [
  {
    title: "Transportation in MBR City",
    body: "Mohammed Bin Rashid City will soon be easier to travel to and from with a new metro station on the way. This station will stretch from Meydan City to the Meydan Racecourse and will be able to handle 10,000 people. Until it's ready, you can quickly get to the closest metro station in the Business Bay area, which is only a few minutes away. For now, catching a taxi is the most common way to get around in the community.",
    video:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/13105243/dubai-metro-arrive-at-metro-station-2023-11-27-05-33-18-utc-1.mov",
  },
  {
    title: "Healthcare Establishments in MBR City",
    body: "The community is still growing and doesn't have its own hospitals or pharmacies just yet. But not to worry, Medicare Hospital and Emirates Hospital are the two closest medical facilities available for anyone in need.",
    video:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/13110005/5383333_Coll_wavebreak_Hospital_1280x720.mp4",
  },
  {
    title: "Mosques & Churches in MBR City",
    body: "Residents can find mosques close to where they live, including the well-known Nad Al Sheba Great Mosque and Masjid E Ibad Ur Rehman. For those seeking churches, The Gatekeepers in Al Quoz and The Church of Jesus Christ of Latter-Day Saints in Al Safa are conveniently a short 12-minute drive away.",
    video:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/13110131/2644343_Mosque_Sharjah_1280x720.mp4",
  },
  {
    title: "Schools in MBR City",
    body: "Close to Mohammed Bin Rashid City, a range of reputable schools are situated conveniently nearby. A brief 5-minute journey will take you to the esteemed North London Collegiate School. Just slightly further, the Hartland International School is accessible within an 8-minute drive. The Swiss International Scientific School, a hub for scientific learning, is located 15 minutes away. Additionally, the International Concept for Education, known for its innovative approach, is a mere 7-minute drive from the community.",
    video:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/17070344/6249626_Young_School_1280x720.mp4",
  },
];

const investReasons: InvestReasonItem[] = [
  {
    title: "Luxury Lifestyle",
    description:
      "MBR City offers unrivalled luxury with its exquisite villas, upscale apartments, and lavish townhouses, all set within a community designed for exceptional living experiences.",
  },
  {
    title: "Prime Location",
    description:
      "Situated conveniently between Sheikh Zayed Road and Al Khail Road, MBR City's strategic location ensures easy access to Dubai's key destinations, thus enhancing its investment appeal.",
  },
  {
    title: "Business Hub",
    description:
      "Aimed at fostering innovation, MBR City is an attractive spot for businesses with its modern commercial spaces and a vibrant ecosystem conducive to growth and expansion.",
  },
  {
    title: "Cultural Hub",
    description:
      "Home to parks, water canals, and the future Dubai Opera District, MBR City is a cultural and recreational paradise-enriching the community with a lively and dynamic environment.",
  },
  {
    title: "Investment Returns",
    description:
      "Properties in MBR City show promising appreciation and high rental yields, supported by Dubai's expanding economy and the area's continuous development.",
  },
  {
    title: "Government Support",
    description:
      "Backed by substantial government investment, MBR City benefits from excellent infrastructure and facilities, ensuring a secure and prosperous investment environment.",
  },
];

const projectHighlights = [
  { label: "The Waterway by Prestige One", href: "https://prestigeone.ae/projects/the-waterway-by-prestige-one/" },
  { label: "Parkway by Prestige One", href: "https://prestigeone.ae/projects/parkway-by-prestige-one/" },
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
            <video ref={ref} className="po-project-page-amenity-tile-video" muted loop playsInline autoPlay preload="auto">
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

export default function MohammedBinRashidCityDestinationPage() {
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
          <div className="po-destination-hero-media" style={{ backgroundImage: `url(${HERO_BG})` }} role="img" aria-label="Mohammed Bin Rashid City" />
          <div className="po-destination-hero-overlay" aria-hidden="true" />
          <div className="po-destination-hero-frame">
            <div className="container po-destination-hero-title-wrap">
              <h1 id="destination-hero-title" className="po-destination-hero-title">Mohammed Bin Rashid City</h1>
            </div>
          </div>
          <div className="po-destination-hero-bottom-rail">
            <ContactDetailCardsSection items={DESTINATION_CONTACT_ITEMS} showSocial className="po-contact-detail-strip--hero-glass" />
          </div>
        </section>

        <section className="po-destination-intro" aria-label="About Mohammed Bin Rashid City">
          <div className="container po-destination-intro-copy">
            <p className="po-destination-intro-text">{INTRO_COPY}</p>
            <p className="po-destination-intro-text" style={{ marginTop: "1rem" }}>{INTRO_COPY_2}</p>
          </div>
        </section>

        <section className="po-destination-nearby" aria-labelledby="destination-nearby-heading">
          <div className="container po-destination-nearby-intro">
            <h2 id="destination-nearby-heading" className="po-destination-section-title">Nearby Attractions</h2>
            <p className="po-destination-section-lead">Drive times are approximate from MBR City.</p>
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
            <h2 id="destination-access-heading" className="po-destination-access-heading">Accessibility &amp; Facilities</h2>
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
              <p className="po-destination-invest-kicker">Why Invest</p>
              <h2 id="destination-invest-heading" className="po-destination-invest-title">Why Invest in MBR City?</h2>
              <p className="po-destination-invest-intro">
                Mohammed Bin Rashid City embodies the pinnacle of luxury and forward-thinking living in Dubai. Below are the core reasons making MBR City a prime investment choice:
              </p>
            </div>
          </div>
          <div className="po-destination-invest-cards-shell">
            <div className="container">
              <div className="po-destination-invest-grid">
                {investReasons.map((item) => (
                  <article key={item.title} className="po-destination-invest-card">
                    <h3 className="po-destination-invest-card-title">{item.title}</h3>
                    <p className="po-destination-invest-card-desc">{item.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="po-destination-project-spotlight" aria-labelledby="mbr-project-heading">
          <div className="container">
            <h2 id="mbr-project-heading" className="po-destination-project-spotlight-title">Prestige One Project in MBR City</h2>
            <p className="po-destination-project-spotlight-lead">{PROJECT_SPOTLIGHT_LEAD}</p>
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

        <section className="po-destination-wide-video" aria-label="MBR City video">
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

