"use client";

import type { CSSProperties } from "react";
import Link from "next/link";
import { Autoplay, EffectCreative } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const destinations = [
  {
    title: "Dubai Maritime City",
    link: "https://prestigeone.ae/dubai-maritime-city/",
    image: "/assets/img/v2/our-destinations/dubai-maritime.webp",
  },
  {
    title: "Mohammed Bin Rashid City",
    link: "https://prestigeone.ae/mohammed-bin-rashid-city/",
    image: "/assets/img/v2/our-destinations/mbr-city.webp",
  },
  {
    title: "Dubai Islands",
    link: "/our-destinations/dubai-islands",
    image: "/assets/img/v2/our-destinations/dubai-Islands.webp",
  },
  {
    title: "Jumeirah Village Circle",
    link: "/our-destinations/jumeirah-village-circle",
    image: "/assets/img/v2/our-destinations/jumeirah-village-circle-jvc.webp",
  },
  {
    title: "Dubai Sports City",
    link: "/our-destinations/dubai-sports-city",
    image: "/assets/img/v2/our-destinations/dubai-sport-city.webp",
  },
  {
    title: "Palm Jumeirah",
    link: "/our-destinations/palm-jumeirah",
    image: "/assets/img/v2/our-destinations/palm-jumeira.webp",
  },
  {
    title: "Barsha Heights",
    link: "/our-destinations/barsha-heights",
    image: "/assets/img/v2/our-destinations/barsha-heights.webp",
  },
  {
    title: "Dubai Land Residence Complex",
    link: "https://prestigeone.ae/dlrc/",
    image: "/assets/img/v2/our-destinations/DLRC.webp",
  },
];

const OurDestinationsArea = () => {
  return (
    <section className="po-destinations-section">
      {/* <div className="po-destinations-head text-center">
        <h2>Our Destinations</h2>
      </div> */}
      <Swiper
        modules={[Autoplay, EffectCreative]}
        direction="vertical"
        effect="creative"
        creativeEffect={{
          prev: {
            translate: [0, "-22%", -1],
            scale: 0.92,
            opacity: 0.88,
          },
          next: {
            translate: [0, "100%", 0],
          },
          limitProgress: 2,
        }}
        simulateTouch={false}
        loop={false}
        speed={1150}
        slidesPerView={1}
        autoplay={{ delay: 2800, disableOnInteraction: false, stopOnLastSlide: true, pauseOnMouseEnter: false }}
        className="po-destinations-swiper"
      >
        {destinations.map((item) => {
          const external = item.link.startsWith("http");
          const slideProps = {
            className: "po-destination-slide",
            href: item.link,
            style: { backgroundImage: `url(${item.image})` } as CSSProperties,
          };
          const inner = (
            <>
              <div className="po-destination-overlay" />
              <div className="container h-100">
                <div className="po-destination-content">
                  <p>Our Destinations</p>
                  <h2>{item.title}</h2>
                </div>
              </div>
            </>
          );
          return (
            <SwiperSlide key={item.title}>
              {external ? (
                <a {...slideProps} target="_blank" rel="noopener noreferrer">
                  {inner}
                </a>
              ) : (
                <Link {...slideProps}>{inner}</Link>
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default OurDestinationsArea;

