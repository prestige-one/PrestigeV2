"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const projectLogos = [
  { name: "Berkeley Square North/South", file: "Berkeley-Square-North-South-Logo-Options-02-1-scaled.webp-1.webp" },
  { name: "Berkeley Square", file: "Berkeley-Square-North-South-Logo-Options-02-1-scaled.webp.webp" },
  { name: "Coastal Haven", file: "Coastal-Haven-Final-Logo.webp" },
  { name: "Hilton", file: "hilton.webp" },
  { name: "Lux Canal", file: "Lux.-canal-White-logo2x.webp" },
  { name: "Parkway", file: "Parkway-1-scaled.webp.webp" },
  { name: "Place", file: "Place-Logo-2025-white.webp" },
  { name: "Residence", file: "RESIDENCE_white_trans.webp" },
  { name: "Sanctuary Hive", file: "Sanctuary-Hive-white.webp" },
  { name: "Sanctuary Residential", file: "Sanctuary-residential-white.webp" },
  { name: "Seaside", file: "seaside.webp" },
  { name: "The Boulevard", file: "The-Bodulevard.webp" },
  { name: "The One", file: "TheOne.webp.webp" },
  { name: "Vista", file: "VISTA_white_trans.webp" },
  { name: "Waterway", file: "waterway.webp" },
];

const LogoSliderArea = () => {
  return (
    <section className="po-logo-slider">
      <div className="container">
        <Swiper
          modules={[Autoplay]}
          loop
          speed={3500}
          autoplay={{ delay: 0, disableOnInteraction: false }}
          slidesPerView={1.2}
          spaceBetween={16}
          breakpoints={{
            576: { slidesPerView: 2.2, spaceBetween: 20 },
            768: { slidesPerView: 3.2, spaceBetween: 24 },
            992: { slidesPerView: 4.2, spaceBetween: 28 },
            1200: { slidesPerView: 5, spaceBetween: 28 },
          }}
          className="po-logo-swiper"
        >
          {projectLogos.map((logo) => (
            <SwiperSlide key={logo.file}>
              <div className="po-logo-card">
                <img
                  src={`/assets/img/v2/web-logos/${logo.file}`}
                  alt={logo.name}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default LogoSliderArea;
