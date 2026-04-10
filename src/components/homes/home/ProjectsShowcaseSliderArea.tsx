"use client";

import { useEffect, useRef, useState } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";

const WHEEL_SLIDE_MS = 520;
const WHEEL_THROTTLE_MS = 380;

/** Thumbnail images aligned with main Projects listing (no teaser videos in the slider). */
const projects = [
  {
    title: "Sanctuary Hive by Prestige One",
    description:
      "Sanctuary Hive offers well planned commercial properties in Meydan Horizon, Dubai. Ideal for businesses seeking visibility and connectivity.",
    media:
      "/assets/images/v2/project-featured-images/sanctuary/sanctuary-hive-2.webp",
    link: "https://prestigeone.ae/projects/sanctuary-hive-by-prestige-one/",
  },
  {
    title: "Sanctuary by Prestige One",
    description:
      "Step into a more balanced Dubai lifestyle at Sanctuary by Prestige One, where modern living and commercial spaces come together in Meydan.",
    media:
      "/assets/images/v2/project-featured-images/sanctuary/sanctuary-residential-exterior-view.webp",
    link: "https://prestigeone.ae/projects/sanctuary/",
  },
  {
    title: "Hilton Residences Dubai Maritime City",
    description: "Life at Hilton Residences by Prestige One is a balance of elegance and ease.",
    media: "/assets/images/v2/project-featured-images/hilton/HILTON-NIGHT-VIEW-1.webp",
    link: "/projects/hilton-residences-dubai-maritime-city",
  },
  {
    title: "Berkeley Square North",
    description:
      "Berkeley Square North, located in Jumeirah Village Circle, stands apart from the rest. Designed with inspiration from London's classic architecture, it favors clean lines",
    media: "/assets/images/v2/project-featured-images/berkeley/Berkeley-Square-North.webp",
    link: "https://prestigeone.ae/projects/berkeley-square-north/",
  },
  {
    title: "Berkeley Square South",
    description: "Positioned within Jumeirah Village Circle, Berkeley Square South brings together elegance and beautiful design.",
    media: "/assets/images/v2/project-featured-images/berkeley/Berkeley-Square-South.webp",
    link: "https://prestigeone.ae/projects/berkeley-square-south/",
  },
  {
    title: "Luxury Canal Residences",
    description:
      "Luxury Canal Residences by Prestige One captures the rhythm of the waves in Dubai Islands, offering G+2P+12 canal-front living.",
    media: "/assets/images/v2/project-featured-images/luxury-canal/04-Facade-scaled.webp",
    link: "https://prestigeone.ae/projects/luxury-canal-residences/",
  },
  {
    title: "Coastal Haven",
    description:
      "Coastal Haven by Prestige Harbour defines the new era of coastal living in Dubai Islands, with G+2P+12 waterfront elegance.",
    media: "/assets/images/v2/project-featured-images/coastal-haven/Coastal-Haven.webp",
    link: "https://prestigeone.ae/projects/coastal-haven/",
  },
  {
    title: "The Boulevard",
    description: "The Boulevard by Prestige One brings bold and ambitious boulevard living to DLRC, rising 18 floors.",
    media: "/assets/images/v2/project-featured-images/boulevard/boulevard.webp",
    link: "https://prestigeone.ae/projects/the-boulevard-by-prestige-one/",
  },
  {
    title: "Parkway",
    description: "Parkway by Prestige One is a nature-inspired sanctuary in Meydan Horizon, rising 33 floors amidst lush surroundings.",
    media: "/assets/images/v2/project-featured-images/parkway/parkway.webp",
    link: "https://prestigeone.ae/projects/parkway-by-prestige-one/",
  },
  {
    title: "Place",
    description: "Place by Prestige One is designed for active family living in Sports City, featuring 23 floors with contemporary residences.",
    media: "/assets/images/v2/project-featured-images/place/The-Place-Banner.webp",
    link: "https://prestigeone.ae/projects/place-by-prestige-one/",
  },
  {
    title: "The One",
    description: "The One by Prestige One is a commercial hub in Barsha Heights, designed for visionaries within a G+14 development.",
    media: "/assets/images/v2/project-featured-images/one/the-one.webp",
    link: "https://prestigeone.ae/projects/the-one-by-prestige-one/",
  },
  {
    title: "Seaside",
    description: "Seaside by Prestige One offers a retreat along the sea in Dubai Islands, with G+12 waterfront living.",
    media: "/assets/images/v2/project-featured-images/seaside/seaside-featured-image.webp",
    link: "https://prestigeone.ae/projects/seaside-by-prestige-one/",
  },
  {
    title: "The Waterway",
    description:
      "The Waterway by Prestige One, featuring 20 floors and beautiful waterfront homes brings the flow of water to life in Meydan Horizon.",
    media: "/assets/images/v2/project-featured-images/waterway/The-Waterway.webp",
    link: "https://prestigeone.ae/projects/the-waterway-by-prestige-one/",
  },
  {
    title: "Vista",
    description: "Vista by Prestige One combines sleek architecture with panoramic golf views in Sports City, standing at G+15.",
    media: "/assets/images/v2/project-featured-images/vista/vista.webp",
    link: "https://prestigeone.ae/projects/vista-by-prestige-one/",
  },
  {
    title: "The Residence",
    description: "The Residence by Prestige One offers modern luxury in a boutique G+5 low-rise setting in JVC.",
    media: "/assets/images/v2/project-featured-images/residence/THE-RESIDENCE.webp",
    link: "https://prestigeone.ae/projects/the-residence-by-prestige-one/",
  },
  {
    title: "Luxe Villa",
    description:
      "Prestige is an inherent trait, not merely an ambition. It flows as naturally as the tide-defining every aspect of existence.",
    media: "/assets/images/v2/project-featured-images/luxe-villa/luxe-villas.webp",
    link: "https://prestigeone.ae/projects/luxe-villa-by-prestige-one/",
  },
  {
    title: "Seascape Villa",
    description:
      "Explore your private escape into luxury at Seascape Villa by Prestige One, where the serene embrace of the sea welcomes you.",
    media: "/assets/images/v2/project-featured-images/seascape/seascape.webp",
    link: "https://prestigeone.ae/projects/seascape-villa-by-prestige-one/",
  },
];

const ProjectsShowcaseSliderArea = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  useEffect(() => {
    if (!swiperInstance) return;
    const el = swiperInstance.el;
    let locked = false;
    let lockTimer: ReturnType<typeof setTimeout> | undefined;

    const onWheel = (e: WheelEvent) => {
      const dx = e.deltaX;
      const dy = e.deltaY;
      const delta = Math.abs(dx) > Math.abs(dy) ? dx : dy;
      if (Math.abs(delta) < 6) return;
      e.preventDefault();
      if (locked) return;
      locked = true;
      lockTimer = setTimeout(() => {
        locked = false;
      }, WHEEL_THROTTLE_MS);
      if (delta > 0) swiperInstance.slideNext(WHEEL_SLIDE_MS);
      else swiperInstance.slidePrev(WHEEL_SLIDE_MS);
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      el.removeEventListener("wheel", onWheel);
      if (lockTimer) clearTimeout(lockTimer);
    };
  }, [swiperInstance]);

  return (
    <section
      className="po-project-slider-section"
      onMouseEnter={() => swiperRef.current?.autoplay?.stop()}
      onMouseLeave={() => swiperRef.current?.autoplay?.start()}
    >
      <div className="po-project-slider-head text-center">
        <h2>Our Project Excellence</h2>
      </div>

      <Swiper
        modules={[Autoplay]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          setSwiperInstance(swiper);
        }}
        loop
        speed={6000}
        autoplay={{ delay: 0, disableOnInteraction: false }}
        allowTouchMove
        slidesPerView={"auto"}
        spaceBetween={14}
        breakpoints={{
          576: { spaceBetween: 16 },
          768: { spaceBetween: 16 },
          992: { spaceBetween: 18 },
          1200: { spaceBetween: 18 },
          1440: { spaceBetween: 20 },
        }}
        className="po-project-slider"
      >
        {projects.map((project) => (
          <SwiperSlide key={project.title}>
            <a
              className="po-project-card"
              href={project.link}
              target={project.link.startsWith("/") ? undefined : "_blank"}
              rel={project.link.startsWith("/") ? undefined : "noreferrer"}
            >
              <div className="po-project-media">
                <img src={project.media} alt={project.title} loading="lazy" decoding="async" />
                <div className="po-project-overlay" />
              </div>

              <div className="po-project-hover-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <span>More Details</span>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        type="button"
        className="po-project-nav po-project-prev"
        aria-label="Previous projects"
        onClick={() => swiperRef.current?.slidePrev(WHEEL_SLIDE_MS)}
      >
        <span>&larr;</span>
      </button>
      <button
        type="button"
        className="po-project-nav po-project-next"
        aria-label="Next projects"
        onClick={() => swiperRef.current?.slideNext(WHEEL_SLIDE_MS)}
      >
        <span>&rarr;</span>
      </button>
    </section>
  );
};

export default ProjectsShowcaseSliderArea;
