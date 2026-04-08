"use client";

import ListPageExploreArrow from "@/common/ListPageExploreArrow";
import SiteHeader from "@/layouts/SiteHeader";
import SiteFooterBlock from "@/layouts/SiteFooterBlock";

type ConstructionUpdateItem = {
  href: string;
  pathSlug: string;
  image: string;
};

const CONSTRUCTION_UPDATES: ConstructionUpdateItem[] = [
  {
    href: "/construction-update-seaside-by-prestige-one/",
    pathSlug: "construction-update-seaside-by-prestige-one",
    image: "https://prestigeone.ae/wp-content/uploads/2024/03/seaside-banner-1.jpg",
  },
  {
    href: "/construction-update-hilton-residences-by-prestige-one/",
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
    href: "/construction-update-vista-by-prestigeone/",
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
    href: "/construction-update-place-by-prestige-one/",
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

function ConstructionUpdateCard({ item }: { item: ConstructionUpdateItem }) {
  const title = titleFromConstructionSlug(item.pathSlug);

  return (
    <article className="po-list-item-card item-card">
      <div className="po-list-item-media item-card-image">
        <img src={item.image} alt="" loading="lazy" />
      </div>
      <div className="po-list-item-body item-card-content">
        <h3 className="po-list-item-title">{title}</h3>
        <p className="po-list-item-desc">
          Follow construction progress, major milestones, and quality milestones for this Prestige One development.
        </p>
        <a
          className="po-list-item-btn"
          href={item.href}
          target={item.href.startsWith("/") ? undefined : "_blank"}
          rel={item.href.startsWith("/") ? undefined : "noopener noreferrer"}
        >
          <span>Explore more</span>
          <ListPageExploreArrow />
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
        <section className="po-list-page" aria-labelledby="construction-updates-heading">
          <div className="po-list-page-hero">
            <div className="container po-list-page-hero-inner">
              <p className="po-list-page-kicker">Prestige One Developments</p>
              <h1 id="construction-updates-heading" className="po-list-page-title">
                Construction updates
              </h1>
              <p className="po-list-page-intro">{INTRO_COPY}</p>
            </div>
          </div>
          <div className="po-list-page-cards-shell" aria-label="Projects with construction updates">
            <div className="container">
              <div className="po-list-page-grid list-page-grid">
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
