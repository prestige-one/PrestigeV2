"use client";

import { useRef } from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";

const projects = [
  {
    title: "Sanctuary Hive by Prestige One",
    description:
      "Sanctuary Hive offers well planned commercial properties in Meydan Horizon, Dubai. Ideal for businesses seeking visibility and connectivity.",
    media: "/assets/img/v2/project-featured-images/sanctuary-hive-2.webp",
    link: "https://prestigeone.ae/projects/sanctuary-hive-by-prestige-one/",
  },
  {
    title: "Sanctuary by Prestige One",
    description:
      "Step into a more balanced Dubai lifestyle at Sanctuary by Prestige One, where modern living and commercial spaces come together in Meydan.",
    media: "/assets/img/v2/project-features-videos/Project-Teaser-Video_Sanctuary.mp4",
    link: "https://prestigeone.ae/projects/sanctuary/",
  },
  {
    title: "Hilton Residences Dubai Maritime City",
    description: "Life at Hilton Residences by Prestige One is a balance of elegance and ease.",
    media: "/assets/img/v2/project-featured-images/HILTON-NIGHT-VIEW-1.webp",
    link: "/projects/hilton-residences-dubai-maritime-city",
  },
  {
    title: "Berkeley Square North",
    description:
      "Berkeley Square North, located in Jumeirah Village Circle, stands apart from the rest. Designed with inspiration from London's classic architecture, it favors clean lines",
    media: "/assets/img/v2/project-featured-images/Berkeley-Square-North.webp",
    link: "https://prestigeone.ae/projects/berkeley-square-north/",
  },
  {
    title: "Berkeley Square South",
    description: "Positioned within Jumeirah Village Circle, Berkeley Square South brings together elegance and beautiful design.",
    media: "/assets/img/v2/project-featured-images/Berkeley-Square-South.webp",
    link: "https://prestigeone.ae/projects/berkeley-square-south/",
  },
  {
    title: "Luxury Canal Residences",
    description:
      "Luxury Canal Residences by Prestige One captures the rhythm of the waves in Dubai Islands, offering G+2P+12 canal-front living.",
    media: "/assets/img/v2/project-featured-images/luxe-villas.webp",
    link: "https://prestigeone.ae/projects/luxury-canal-residences/",
  },
  {
    title: "Coastal Haven",
    description:
      "Coastal Haven by Prestige Harbour defines the new era of coastal living in Dubai Islands, with G+2P+12 waterfront elegance.",
    media: "/assets/img/v2/project-featured-images/Coastal-Haven.webp",
    link: "https://prestigeone.ae/projects/coastal-haven/",
  },
  {
    title: "The Boulevard",
    description: "The Boulevard by Prestige One brings bold and ambitious boulevard living to DLRC, rising 18 floors.",
    media: "/assets/img/v2/project-features-videos/Project-Teaser-Video_The-Boulevard.mp4",
    link: "https://prestigeone.ae/projects/the-boulevard-by-prestige-one/",
  },
  {
    title: "Parkway",
    description: "Parkway by Prestige One is a nature-inspired sanctuary in Meydan Horizon, rising 33 floors amidst lush surroundings.",
    media: "/assets/img/v2/project-features-videos/Project-Teaser-Video_The-Parkway.mp4",
    link: "https://prestigeone.ae/projects/parkway-by-prestige-one/",
  },
  {
    title: "Place",
    description: "Place by Prestige One is designed for active family living in Sports City, featuring 23 floors with contemporary residences.",
    media: "/assets/img/v2/project-features-videos/Project-Teaser-Video_The-Place.mp4",
    link: "https://prestigeone.ae/projects/place-by-prestige-one/",
  },
  {
    title: "The One",
    description: "The One by Prestige One is a commercial hub in Barsha Heights, designed for visionaries within a G+14 development.",
    media: "/assets/img/v2/project-features-videos/Project-Teaser-Video_The-One.mp4",
    link: "https://prestigeone.ae/projects/the-one-by-prestige-one/",
  },
  {
    title: "Seaside",
    description: "Seaside by Prestige One offers a retreat along the sea in Dubai Islands, with G+12 waterfront living.",
    media: "/assets/img/v2/project-features-videos/Project-Teaser-Video_The_SEASIDE.mp4",
    link: "https://prestigeone.ae/projects/seaside-by-prestige-one/",
  },
  {
    title: "The Waterway",
    description:
      "The Waterway by Prestige One, featuring 20 floors and beautiful waterfront homes brings the flow of water to life in Meydan Horizon.",
    media: "/assets/img/v2/project-features-videos/Project-Teaser-Video_The-Waterway.mp4",
    link: "https://prestigeone.ae/projects/the-waterway-by-prestige-one/",
  },
  {
    title: "Vista",
    description: "Vista by Prestige One combines sleek architecture with panoramic golf views in Sports City, standing at G+15.",
    media: "/assets/img/v2/project-features-videos/Project-Teaser-Video_The-VISTA.mp4",
    link: "https://prestigeone.ae/projects/vista-by-prestige-one/",
  },
  {
    title: "The Residence",
    description: "The Residence by Prestige One offers modern luxury in a boutique G+5 low-rise setting in JVC.",
    media: "/assets/img/v2/project-features-videos/Project-Teaser-Video_The-RESIDENCE.mp4",
    link: "https://prestigeone.ae/projects/the-residence-by-prestige-one/",
  },
  {
    title: "Luxe Villa",
    description:
      "Prestige is an inherent trait, not merely an ambition. It flows as naturally as the tide-defining every aspect of existence.",
    media: "/assets/img/v2/project-featured-images/luxe-villas.webp",
    link: "https://prestigeone.ae/projects/luxe-villa-by-prestige-one/",
  },
  {
    title: "Seascape Villa",
    description:
      "Explore your private escape into luxury at Seascape Villa by Prestige One, where the serene embrace of the sea welcomes you.",
    media: "/assets/img/v2/project-featured-images/seascape.webp",
    link: "https://prestigeone.ae/projects/seascape-villa-by-prestige-one/",
  },
];

const ProjectsShowcaseSliderArea = () => {
  const swiperRef = useRef<SwiperType | null>(null);

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
        modules={[Autoplay, Navigation]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        loop
        speed={6000}
        autoplay={{ delay: 0, disableOnInteraction: false }}
        allowTouchMove
        navigation={{ prevEl: ".po-project-prev", nextEl: ".po-project-next" }}
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
        {projects.map((project) => {
          const isVideo = project.media.endsWith(".mp4");
          return (
            <SwiperSlide key={project.title}>
              <a className="po-project-card" href={project.link} target="_blank" rel="noreferrer">
                <div className="po-project-media">
                  {isVideo ? (
                    <video autoPlay muted loop playsInline preload="metadata">
                      <source src={project.media} type="video/mp4" />
                    </video>
                  ) : (
                    <img src={project.media} alt={project.title} />
                  )}
                  <div className="po-project-overlay" />
                </div>

                <div className="po-project-hover-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <span>More Details</span>
                </div>
              </a>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <button className="po-project-nav po-project-prev" aria-label="Previous projects">
        <span>&larr;</span>
      </button>
      <button className="po-project-nav po-project-next" aria-label="Next projects">
        <span>&rarr;</span>
      </button>
    </section>
  );
};

export default ProjectsShowcaseSliderArea;
