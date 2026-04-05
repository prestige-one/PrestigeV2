"use client";

import ListItemExploreLink from "@/common/ListItemExploreLink";
import ListPageExploreArrow from "@/common/ListPageExploreArrow";
import SiteFooterBlock from "@/layouts/SiteFooterBlock";
import SiteHeader from "@/layouts/SiteHeader";

type DestinationCard = {
  title: string;
  description: string;
  image: string;
  href: string;
};

const destinations: DestinationCard[] = [
  {
    title: "Dubai Maritime City",
    description:
      "Waterfront district between Port Rashid and the Dubai skyline — connectivity, lifestyle, and Prestige One developments.",
    image: "/assets/img/v2/our-destinations/dubai-maritime.webp",
    href: "/our-destinations/dubai-maritime-city",
  },
  {
    title: "Barsha Heights",
    description: "A well-connected urban hub with strong access to business corridors and city amenities.",
    image: "/assets/img/v2/our-destinations/barsha-heights.webp",
    href: "https://prestigeone.ae/barsha-heights/",
  },
  {
    title: "Dubai Islands",
    description: "Canal-front and island living with room to grow in one of Dubai’s emerging coastal zones.",
    image: "/assets/img/v2/our-destinations/dubai-Islands.webp",
    href: "https://prestigeone.ae/dubai-islands/",
  },
  {
    title: "Jumeirah Village Circle",
    description: "A balanced community setting with strong appeal for families and long-term residents.",
    image: "/assets/img/v2/our-destinations/jumeirah-village-circle-jvc.webp",
    href: "https://prestigeone.ae/jumeirah-village-circle/",
  },
  {
    title: "Dubai Sports City",
    description: "Active living, major venues, and a clear lifestyle identity within Dubai’s sports district.",
    image: "/assets/img/v2/our-destinations/dubai-sport-city.webp",
    href: "https://prestigeone.ae/dubai-sports-city/",
  },
  {
    title: "Palm Jumeirah",
    description: "Iconic island living and premium waterfront positioning on Dubai’s best-known archipelago.",
    image: "/assets/img/v2/our-destinations/palm-jumeira.webp",
    href: "https://prestigeone.ae/palm-jumeirah/",
  },
  {
    title: "Mohammed Bin Rashid City",
    description: "A major growth corridor with long-term masterplan upside and strong connectivity across Dubai.",
    image: "/assets/img/v2/our-destinations/mbr-city.webp",
    href: "https://prestigeone.ae/mohammed-bin-rashid-city/",
  },
];

const INTRO_COPY =
  "Discover the Dubai communities where Prestige One builds — from waterfront districts to established residential corridors.";

export default function OurDestinationsIndexPage() {
  return (
    <>
      <SiteHeader />

      <main>
        <section className="po-list-page" aria-labelledby="destinations-list-heading">
          <div className="po-list-page-hero">
            <div className="container po-list-page-hero-inner">
              <p className="po-list-page-kicker">Prestige One Developments</p>
              <h1 id="destinations-list-heading" className="po-list-page-title">
                Our destinations
              </h1>
              <p className="po-list-page-intro">{INTRO_COPY}</p>
            </div>
          </div>

          <div className="po-list-page-cards-shell" aria-label="Destination listings">
            <div className="container">
              <div className="po-list-page-grid list-page-grid">
                {destinations.map((item) => (
                  <article key={item.title} className="po-list-item-card item-card">
                    <div className="po-list-item-media item-card-image">
                      <img src={item.image} alt={item.title} loading="lazy" />
                    </div>
                    <div className="po-list-item-body item-card-content">
                      <h3 className="po-list-item-title">{item.title}</h3>
                      <p className="po-list-item-desc">{item.description}</p>
                      <ListItemExploreLink href={item.href}>
                        <span>Explore more</span>
                        <ListPageExploreArrow />
                      </ListItemExploreLink>
                    </div>
                  </article>
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
