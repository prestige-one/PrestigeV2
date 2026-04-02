"use client";

import { useRef } from "react";
import { Autoplay, EffectCreative, Mousewheel } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";

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
    link: "https://prestigeone.ae/dubai-islands/",
    image: "/assets/img/v2/our-destinations/dubai-Islands.webp",
  },
  {
    title: "Jumeirah Village Circle",
    link: "https://prestigeone.ae/jumeirah-village-circle/",
    image: "/assets/img/v2/our-destinations/jumeirah-village-circle-jvc.webp",
  },
  {
    title: "Dubai Sports City",
    link: "https://prestigeone.ae/dubai-sports-city/",
    image: "/assets/img/v2/our-destinations/dubai-sport-city.webp",
  },
  {
    title: "Palm Jumeirah",
    link: "https://prestigeone.ae/palm-jumeirah/",
    image: "/assets/img/v2/our-destinations/palm-jumeira.webp",
  },
  {
    title: "Barsha Heights",
    link: "https://prestigeone.ae/barsha-heights/",
    image: "/assets/img/v2/our-destinations/barsha-heights.webp",
  },
  {
    title: "Dubai Land Residence Complex",
    link: "https://prestigeone.ae/dlrc/",
    image: "/assets/img/v2/our-destinations/DLRC.webp",
  },
];

const OurDestinationsArea = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="po-destinations-section">
      {/* <div className="po-destinations-head text-center">
        <h2>Our Destinations</h2>
      </div> */}
      <Swiper
        modules={[Autoplay, Mousewheel, EffectCreative]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
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
        grabCursor
        loop={false}
        speed={1150}
        slidesPerView={1}
        autoplay={{ delay: 2800, disableOnInteraction: false, stopOnLastSlide: true, pauseOnMouseEnter: false }}
        mousewheel={{ enabled: true, releaseOnEdges: true, thresholdDelta: 14, sensitivity: 1 }}
        className="po-destinations-swiper"
      >
        {destinations.map((item) => (
          <SwiperSlide key={item.title}>
            <a
              className="po-destination-slide"
              href={item.link}
              target="_blank"
              rel="noreferrer"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="po-destination-overlay" />
              <div className="container h-100">
                <div className="po-destination-content">
                  <p>Our Destinations</p>
                  <h2>{item.title}</h2>
                </div>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default OurDestinationsArea;
