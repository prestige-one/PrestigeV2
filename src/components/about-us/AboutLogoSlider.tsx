"use client";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

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

const AboutLogoSlider = () => {
  return (
    <section className="po-about-logos-section">
      <Swiper
        modules={[Autoplay]}
        loop
        speed={3200}
        autoplay={{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: false }}
        slidesPerView={1.25}
        spaceBetween={0}
        breakpoints={{
          576: { slidesPerView: 2.2 },
          768: { slidesPerView: 3.2 },
          992: { slidesPerView: 4.2 },
          1200: { slidesPerView: 5 },
        }}
        className="po-about-logos-swiper"
      >
        {projectLogos.map((logo) => (
          <SwiperSlide key={logo.file}>
            <article className="po-about-logo-card">
              <img src={`/assets/img/v2/web-logos/${logo.file}`} alt={logo.name} /> 
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default AboutLogoSlider;

