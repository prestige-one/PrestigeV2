
"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const projectSlides = [
  {
    title: "Exclusive Real Estate Regional Sponsor of the Argentina National Team",
    description: "",
    mediaType: "image",
    mediaSrc: "/assets/img/v2/project-featured-images/AFA-sponsorship-1-1.webp",
  },
  {
    title: "Sanctuary Hive by Prestige One",
    description:
      "Sanctuary Hive offers well planned commercial properties in Meydan Horizon, Dubai. Ideal for businesses seeking visibility and connectivity.",
    mediaType: "image",
    mediaSrc: "/assets/img/v2/project-featured-images/sanctuary-hive-2.webp",
  },
  {
    title: "Sanctuary by Prestige One",
    description:
      "Step into a more balanced Dubai lifestyle at Sanctuary by Prestige One, where modern living and commercial spaces come together in Meydan",
    mediaType: "video",
    mediaSrc: "/assets/img/v2/project-features-videos/sanctuary-residential.mp4",
  },
  {
    title: "Hilton Residences Dubai Maritime City",
    description: "Life at Hilton Residences by Prestige One is a balance of elegance and ease.",
    mediaType: "image",
    mediaSrc: "/assets/img/v2/project-featured-images/HILTON-NIGHT-VIEW-1.webp",
  },
  {
    title: "Berkeley Square North",
    description:
      "Berkeley Square North, located in Jumeirah Village Circle, stands apart from the rest. Designed with inspiration from London’s classic architecture, it favors clean lines",
    mediaType: "image",
    mediaSrc: "/assets/img/v2/project-featured-images/Berkeley-Square-North.webp",
  },
  {
    title: "Berkeley Square South",
    description:
      "Positioned within Jumeirah Village Circle, Berkeley Square South brings together elegance and beautiful design.",
    mediaType: "image",
    mediaSrc: "/assets/img/v2/project-featured-images/Berkeley-Square-South.webp",
  },
];

const HeroArea = () => {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  return (
    <section className="po-hero-slider" ref={sliderRef}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        loop
        speed={1000}
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        //pagination={{ el: ".po-hero-pagination", type: "fraction" }}
        navigation={{ prevEl: ".po-hero-prev", nextEl: ".po-hero-next" }}
        className="po-hero-swiper"
      >
        {projectSlides.map((slide) => (
          <SwiperSlide key={slide.title}>
            <div
              className="po-hero-slide"
              style={slide.mediaType === "image" ? { backgroundImage: `url(${slide.mediaSrc})` } : undefined}
            >
              {slide.mediaType === "video" && (
                <video className="po-hero-video" muted loop autoPlay playsInline preload="auto">
                  <source src={slide.mediaSrc} type="video/mp4" />
                </video>
              )}
              <div className="po-hero-overlay" />
              <div className="container h-100">
                <div className="po-hero-content">
                  <h2>{slide.title}</h2>
                  {slide.description && <p>{slide.description}</p>}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button className="po-hero-nav po-hero-prev" aria-label="Previous project">
        <span>&larr;</span>
      </button>
      <button className="po-hero-nav po-hero-next" aria-label="Next project">
        <span>&rarr;</span>
      </button>
      <div className="po-hero-pagination" />
    </section>
  );
};

export default HeroArea;