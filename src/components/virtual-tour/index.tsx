"use client";

import PageHero from "@/common/PageHero";
import SiteFooterBlock from "@/layouts/SiteFooterBlock";
import SiteHeader from "@/layouts/SiteHeader";

const VIRTUAL_TOUR_IFRAME_SRC =
  "https://investments-map.prod.resimo.io/prestige-one/dubai/?project=D_P10&lang=en&theme=light";

const VIRTUAL_TOUR_IFRAME_LAZY_SRC =
  "https://investments-map.prod.resimo.io/prestige-one/dubai/?project=D_P10&lang=en&theme=dark";

export default function VirtualTourPage() {
  return (
    <>
      <SiteHeader />

      <PageHero
        kicker="Prestige One Developments"
        title="Virtual Tour"
        description="Explore our interactive virtual tour and discover Prestige One projects across Dubai."
      />

      <section className="po-virtual-tour-section" aria-label="Prestige One virtual tour">
        <div className="container-fluid">
          <div className="po-virtual-tour-frame-wrap">
            <iframe
              frameBorder={0}
              width="100%"
              height="800"
              allow="fullscreen"
              allowFullScreen
              className="allinone-iframe"
              data-lazy-src={VIRTUAL_TOUR_IFRAME_LAZY_SRC}
              src={VIRTUAL_TOUR_IFRAME_SRC}
              title="Prestige One virtual tour"
            />
          </div>
        </div>
      </section>

      <SiteFooterBlock />
    </>
  );
}
