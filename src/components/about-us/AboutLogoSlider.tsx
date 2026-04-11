"use client";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const projectLogos = [
  { name: "Berkeley Square North", file: "Berkeley-Square-North-Logo.webp" },
  { name: "Berkeley Square South", file: "Berkeley-Square-South-Logo.webp" },
  { name: "Coastal Haven", file: "Coastal-Haven-Logo.webp" },
  { name: "Hilton", file: "hilton.webp" },
  { name: "Lux Canal", file: "Lux-canal.webp" },
  { name: "Parkway", file: "Parkway.webp" },
  { name: "Place", file: "Place-Logo.webp" },
  { name: "Residence", file: "RESIDENCE.webp" },
  { name: "Sanctuary Hive", file: "Sanctuary-Hive.webp" },
  { name: "Sanctuary Residential", file: "Sanctuary-residential.webp" },
  { name: "Seaside", file: "seaside.webp" },
  { name: "The Boulevard", file: "The-Bodulevard.webp" },
  { name: "The One", file: "The-One.webp" },
  { name: "Vista", file: "VISTA.webp" },
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
              <img src={`/assets/images/v2/web-logos/${logo.file}`} alt={logo.name} /> 
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default AboutLogoSlider;

