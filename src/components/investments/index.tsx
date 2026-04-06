"use client";

import PageHero from "@/common/PageHero";
import ProjectsShowcaseSliderArea from "@/components/homes/home/ProjectsShowcaseSliderArea";
import { INVESTMENT_ITEMS } from "@/data/investments";
import SiteFooterBlock from "@/layouts/SiteFooterBlock";
import SiteHeader from "@/layouts/SiteHeader";

export default function InvestmentsPage() {
  return (
    <>
      <SiteHeader />

      <PageHero
        kicker="Prestige One Developments"
        title="Investments"
        description="Since 2007, we have built a robust multi-billion-dirham investment portfolio in Dubai real estate, continuously curating forward-looking acquisitions for long-term growth."
      />

      <section className="po-investments-section" aria-label="Investments portfolio">
        <div className="container">
          <div className="po-investments-grid">
            {INVESTMENT_ITEMS.map((item) => (
              <article key={item.title} className="po-investment-card">
                <div className="po-investment-card-media-wrap">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="po-investment-card-media"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="po-investment-card-body">
                  <h2 className="po-investment-card-title">{item.title}</h2>
                  <p className="po-investment-card-text">{item.details}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ProjectsShowcaseSliderArea />

      <SiteFooterBlock />
    </>
  );
}

