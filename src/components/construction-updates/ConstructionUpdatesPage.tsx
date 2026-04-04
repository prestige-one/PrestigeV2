"use client";

import SiteHeader from "@/layouts/SiteHeader";
import SiteFooterBlock from "@/layouts/SiteFooterBlock";

type ConstructionUpdateItem = {
  href: string;
  /** Path segment after domain, e.g. construction-update-seaside-by-prestige-one */
  pathSlug: string;
  image: string;
};

const CONSTRUCTION_UPDATES: ConstructionUpdateItem[] = [
  {
    href: "https://prestigeone.ae/construction-update-seaside-by-prestige-one/",
    pathSlug: "construction-update-seaside-by-prestige-one",
    image: "https://prestigeone.ae/wp-content/uploads/2024/03/seaside-banner-1.jpg",
  },
  {
    href: "https://prestigeone.ae/construction-update-hilton-residences-by-prestige-one/",
    pathSlug: "construction-update-hilton-residences-by-prestige-one",
    image:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2026/03/14144431/HILTON-NIGHT-VIEW-1.webp",
  },
  {
    href: "https://prestigeone.ae/construction-update-the-residence-by-prestige-one/",
    pathSlug: "construction-update-the-residence-by-prestige-one",
    image:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2025/07/07161026/Berkeley-Square-Kids-Area-Night-scaled.webp",
  },
  {
    href: "https://prestigeone.ae/construction-update-coastal-haven-by-prestige-harbour/",
    pathSlug: "construction-update-coastal-haven-by-prestige-harbour",
    image:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2025/02/24094547/harbour-1.webp",
  },
  {
    href: "https://prestigeone.ae/construction-update-the-boluevard-by-prestige-one/",
    pathSlug: "construction-update-the-boluevard-by-prestige-one",
    image:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/12/25132924/NIGHT-4c-scaled.webp",
  },
  {
    href: "https://prestigeone.ae/construction-update-parkway-by-prestige-one/",
    pathSlug: "construction-update-parkway-by-prestige-one",
    image:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/27164232/Front-Exterior-3-scaled.webp",
  },
  {
    href: "https://prestigeone.ae/construction-update-vista-by-prestige-one/",
    pathSlug: "construction-update-vista-by-prestige-one",
    image: "https://prestigeone.ae/wp-content/uploads/2022/08/Website_images_23Feb-VISTA.jpg",
  },
  {
    href: "https://prestigeone.ae/construction-update-the-waterway-by-prestige-one/",
    pathSlug: "construction-update-the-waterway-by-prestige-one",
    image:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2025/03/08085032/04-Facade-scaled.webp",
  },
  {
    href: "https://prestigeone.ae/construction-update-the-one-by-prestige-one/",
    pathSlug: "construction-update-the-one-by-prestige-one",
    image:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2025/07/09112539/Berkeley-Square-Facade-Night-View-3-scaled.webp",
  },
  {
    href: "https://prestigeone.ae/construction-update-place-by-prestige-one/",
    pathSlug: "construction-update-place-by-prestige-one",
    image:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2022/08/24175842/The-Place-Banner.webp",
  },
  {
    href: "https://prestigeone.ae/construction-update-the-berkeley-by-prestige-one/",
    pathSlug: "construction-update-the-berkeley-by-prestige-one",
    image:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2025/07/09112539/Berkeley-Square-Facade-Night-View-3-scaled.webp",
  },
];

const CARD_BULLETS = ["Latest site photography & progress notes", "Key milestones and handover insights"] as const;

const INTRO_COPY =
  "Track how Prestige One communities take shape across Dubai. Choose a project below for dedicated construction updates, imagery, and timelines on the main Prestige One site.";

function titleFromConstructionSlug(pathSlug: string) {
  const withoutPrefix = pathSlug.replace(/^construction-update-/, "");
  return withoutPrefix
    .split("-")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

function ConstructionCheckIcon() {
  return (
    <svg className="po-construction-card-check" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
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

function ConstructionUpdateCard({ item }: { item: ConstructionUpdateItem }) {
  const title = titleFromConstructionSlug(item.pathSlug);

  return (
    <article className="po-construction-card">
      <div className="po-construction-card-media">
        <img src={item.image} alt="" loading="lazy" />
      </div>
      <div className="po-construction-card-body">
        <h3 className="po-construction-card-title">{title}</h3>
        <p className="po-construction-card-desc">
          Follow construction progress, major milestones, and quality milestones for this Prestige One development.
        </p>
        {/*<ul className="po-construction-card-list">
          {CARD_BULLETS.map((line) => (
            <li key={line} className="po-construction-card-list-item">
              <ConstructionCheckIcon />
              <span>{line}</span>
            </li>
          ))}
        </ul> */}
        <a className="po-construction-card-btn" href={item.href} target="_blank" rel="noopener noreferrer">
          <span>Explore more</span>
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
    </article>
  );
}

export default function ConstructionUpdatesPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="po-construction-page" aria-labelledby="construction-updates-heading">
          <div className="po-construction-hero">
            <div className="container po-construction-hero-inner">
              <p className="po-construction-kicker">Prestige One Developments</p>
              <h1 id="construction-updates-heading" className="po-construction-title">
                Construction updates
              </h1>
              <p className="po-construction-intro">{INTRO_COPY}</p>
            </div>
          </div>
          <div className="po-construction-cards-shell" aria-label="Projects with construction updates">
            <div className="container">
              <div className="po-construction-grid">
                {CONSTRUCTION_UPDATES.map((item) => (
                  <ConstructionUpdateCard key={item.pathSlug} item={item} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooterBlock />
    </>
  );
}
