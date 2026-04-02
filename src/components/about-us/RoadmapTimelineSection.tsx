"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";

const roadmapItems = [
  {
    years: "2007",
    title: "Established Prestige Holding Group",
    description: "Prestige Holding Group was launched in 2007 in Dubai, UAE.",
    image: "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/10111805/founding-of-prestige.webp",
  },
  {
    years: "2009",
    title: "Invested AED100M+ In Dubai Marina",
    description:
      "Prestige made sure to allocate sizeable resources to invest in luxurious apartments located in Dubai Marina.",
    image: "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/11065545/dubai-aerial-view-of-marina-skyscrapers-at-sunset-2023-11-27-05-09-14-utc-1-scaled.webp",
  },
  {
    years: "2010",
    title: "Invested AED150M+ In Downtown Dubai",
    description:
      "Prestige further expanded its portfolio through investments in Downtown Dubai's dynamic environment, focusing on upscale residential high-rises.",
    image: "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/11063506/No-3-scaled-2.jpg",
  },
  {
    years: "2012",
    title: "Invested AED200M+ In Palm Jumeirah",
    description:
      "Prestige invests in the world’s most renowned development areas, in high-end luxury residential buildings and villas.",
    image: "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/11063515/No-5.jpg",
  },
  {
    years: "2013",
    title: "Relocated Office To Marina Plaza",
    description:
      "As the company continues to grow, the Prestige family keeps on getting bigger. The office was relocated to a wider space in the iconic Dubai Marina area.",
    image: "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/11063511/No-4-scaled-1.webp",
  },
  {
    years: "2014",
    title: "Invested AED300M+ In Stalled JVC/Dubai Sports City Projects",
    description:
      "To expand its portfolio, Prestige strategically invested in forward-looking growth areas with promising potential for the future.",
    image: "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/11063519/No-6.jpg",
  },
  {
    years: "2015",
    title: "Expanded Offices In Marina Plaza",
    description:
      "With Prestige’s growing team, the company added more office spaces in Marina Plaza, complete with a Sales Centre.",
    image: "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/11063511/No-4-scaled-1.webp",
  },
  {
    years: "2016",
    title: "Invested AED1B+ In Residential Units",
    description:
      "With considerable investments, Prestige supports the expansion of Dubai's flourishing residential freehold market.",
    image: "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/11063523/No-8-scaled-1.jpg",
  },
  {
    years: "2018",
    title: "Acquired Lands In Dubai Freehold Communities",
    description:
      "Investing in lands within the Dubai Freehold Communities further diversified and widened Prestige’s investment portfolio.",
    image: "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/11063527/No-9.jpg",
  },
  {
    years: "2022",
    title: "Received Dubai Land Department Award",
    description:
      "Prestige CEO and Founder Mr Ajmal Saifi was awarded as one of the top property investors in Dubai - an accolade that symbolises Prestige’s commitment to the real estate sector in the city.",
    image: "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/11063530/No-10.webp",
  },
  {
    years: "2023",
    title: "Founded Prestige One Developments",
    description:
      "Prestige One Developments aims to provide a fresh and innovative approach to property development in the Dubai market.",
    image: "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/11063548/Website-About-Us-p1d.webp",
  },
  {
    years: "2023",
    title: "Acquired A New Office In Marina Plaza",
    description:
      "Embracing growth and innovation, Prestige expanded its presence with a new, state-of-the-art office in Marina Plaza.",
    image: "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/11063511/No-4-scaled-1.webp",
  },
  {
    years: "2023",
    title: "Launched 'Vista by Prestige One' In Dubai Sports City",
    description:
      "Vista by Prestige One boasts breathtaking sunsets over a stunning golf course view. At the heart of its philosophy lies the essence of modern luxury.",
    image: "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/11063541/Untitled-1.webp",
  },
  {
    years: "2023",
    title: "Launched 'The Residence by Prestige One' In JVC",
    description:
      "The Residence offers its residents the opportunity to indulge in an unparalleled living experience, right within the confines of their vibrant Jumeirah Village Circle community.",
    image: "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/11063551/Website-About-Us-Residence.webp",
  },
  {
    years: "2023",
    title: "Started Developing New Projects in Dubai Prime Locations",
    description:
      "Prestige One continues to dominate the Dubai real estate market with new and exciting developments coming soon.",
    image: "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/11063450/dubai-timeline-update-3.webp",
  },
  {
    years: "2023",
    title: "Unveiled Exclusive Promotional Stand at JBR",
    description:
      "Prestige One Developments has proudly opened its latest promotional stand at JBR.",
    image: "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/11085701/p1_jbrstand-7-1.jpg",
  },
  {
    years: "2024",
    title: "Opened New State-of-the-Art Sales Centre",
    description:
      "Prestige One Developments has thrown open the doors to its brand-new sales centre.",
    image: "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/11063533/office.webp",
  },
  {
    years: "2024",
    title: "Sold Out Vista by Prestige One",
    description:
      "Prestige One has achieved a significant milestone with the complete sell-out of Vista in Dubai Sports City.",
    image: "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/11063541/Untitled-1.webp",
  },
  {
    years: "2024",
    title: "Launched 'The Waterway by Prestige One' in MBR City",
    description:
      "Prestige One has unveiled its latest luxurious development, The Waterway, in Mohammed Bin Rashid City.",
    image: "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/11063545/Waterway-pic-2-scaled-1.webp",
  },
  {
    years: "2024",
    title: "Launched 'Seaside by Prestige One' in Dubai Islands",
    description:
      "Experience life between the city and the sea at Seaside by Prestige One, located in Dubai Islands.",
    image: "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/11063447/Dubai_deira_island_ex13_it12_2024-03-13.jpg",
  },
  {
    years: "2024",
    title: "Launched 'Place by Prestige One' in Dubai Sports City",
    description:
      "Discover exclusivity beyond expectation at The Place by Prestige One in Dubai Sports City.",
    image: "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/11063437/1_generated_240522_E-AR-023_HERO-1_FINAL-1-scaled-1.webp",
  },
  {
    years: "2024",
    title: "Sponsored the Argentine Football Association",
    description:
      "Prestige One Developments becomes the first regional real estate sponsor of the Argentine National Team-building legacies with champions.",
    image: "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/11063454/For_Press_2-1-scaled-1.webp",
  },
  {
    years: "2024",
    title: "Unveiled Prestige One Developments' Billboard in Dubai",
    description:
      "Bringing our vision to the forefront, showcasing our legacy and partnership with champions across the iconic streets of Dubai.",
    image: "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/11063442/DSC00014-scaled-1.webp",
  },
  {
    years: "2024",
    title: "Prestige Holdings Celebrates with a Landmark Event",
    description:
      "Marking a momentous occasion, Prestige Holdings celebrates with a ceremonial cake slicing, symbolizing the beginning of a new era of growth and partnerships.",
    image: "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/11063502/Medium_Shot-scaled-1.webp",
  },
  {
    years: "2024",
    title: "Launched Parkway by Prestige One in MBR City",
    description: "",
    image: "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/27164232/Front-Exterior-3-scaled.webp",
  },
  {
    years: "2024",
    title: "Launched The One by Prestige One in Barsha Heights",
    description: "",
    image: "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/15064222/One_02-scaled.jpg",
  },
  {
    years: "2024",
    title: "Held the Prestige One Gala in Jumeirah Beach Hotel",
    description: "",
    image: "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2025/03/08115914/PONE1014.webp",
  },
  {
    years: "2025",
    title: "Launched The Boulevard by Prestige One in DLRC",
    description: "",
    image: "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/12/25132924/NIGHT-4c-scaled.webp",
  },
  {
    years: "2025",
    title: "Launched Coastal Haven by Prestige Harbour in Dubai Islands",
    description: "",
    image: "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2025/02/24094547/harbour-1.webp",
  },
  {
    years: "2025",
    title: "Launched Luxury Canal Residences by Prestige One in Dubai Islands",
    description: "",
    image: "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2025/03/08085032/04-Facade-scaled.webp",
  },
  {
    years: "2025",
    title: "Extended Marina Plaza Sales Gallery",
    description:
      "Our signature space, now expanded to offer a more immersive experience tailored to our growing clientele.",
    image: "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2025/07/31095727/sales-gallery-1_1024x693_cropped.jpg",
  },
  {
    years: "2025",
    title: "Inaugurated Customer Happiness Centre",
    description:
      "Built to serve. Designed to care. Our dedicated centre redefines post-sales engagement with comfort and precision.",
    image: "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2025/07/31095726/2K6A3227_1024x693_cropped.jpg",
  },
  {
    years: "2025",
    title: "Launched ‘Berkeley Square’ in JVC",
    description:
      "Introducing timeless living in the heart of Jumeirah Village Circle-where refined design meets daily elegance.",
    image: "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2025/07/31095724/Berkeley-Square-Kids-Area-Night_1024x693_cropped.jpg",
  },
  {
    years: "2025",
    title: "Inaugurated Bay Square Sales Gallery",
    description:
      "An address that mirrors our ethos-precision in every detail, elegance in every corner.",
    image: "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2025/07/31095731/website-banner-collage-01_1024x693_cropped.jpg",
  },
  {
    years: "2025",
    title: "Launched Hilton Residences in Dubai Maritime City",
    description: "",
    image: "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2026/03/12140403/HILTON-NIGHT-VIEW-900.webp",
  },
  {
    years: "2026",
    title: "Launched Sanctuary in Meydan Horizon City",
    description: "",
    image: "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2026/03/12140450/C1-0113-900-residential.webp",
  },
];

const clamp = (v: number, min = 0, max = 1) => Math.max(min, Math.min(max, v));

const RoadmapTimelineSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const itemsWrapRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<Array<HTMLElement | null>>([]);
  const [progress, setProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current;
      const itemsWrap = itemsWrapRef.current;
      if (!el || !itemsWrap || itemRefs.current.length === 0) return;

      const vh = window.innerHeight || 1;
      const headerOffset = 110;
      const viewportAnchor = headerOffset + vh * 0.45;
      const rect = el.getBoundingClientRect();

      // Keep section clamped to valid progress when outside viewport.
      if (rect.bottom < headerOffset) {
        setProgress(1);
        setActiveIndex(roadmapItems.length - 1);
        return;
      }
      if (rect.top > vh) {
        setProgress(0);
        setActiveIndex(0);
        return;
      }

      const centers = itemRefs.current.map((item) => {
        if (!item) return Number.POSITIVE_INFINITY;
        const r = item.getBoundingClientRect();
        return (r.top + r.bottom) / 2;
      });

      let closestIdx = 0;
      let minDist = Number.POSITIVE_INFINITY;
      centers.forEach((center, idx) => {
        const dist = Math.abs(center - viewportAnchor);
        if (dist < minDist) {
          minDist = dist;
          closestIdx = idx;
        }
      });

      setActiveIndex(closestIdx);

      // Smooth/continuous line progress (no snapping to nearest card).
      const wrapRect = itemsWrap.getBoundingClientRect();
      const progressValue = clamp((viewportAnchor - wrapRect.top) / Math.max(wrapRect.height, 1));
      setProgress(progressValue);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const visibleIndex = useMemo(() => activeIndex, [activeIndex]);

  return (
    <section
      ref={sectionRef}
      className="po-roadmap-section"
      style={{ ["--po-road-progress" as string]: `${progress}` } as React.CSSProperties}
    >
      <div className="container">
        <div className="po-roadmap-head text-center">
          <p>Our Company Roadmap</p>
          <h2>Prestige One History</h2>
          <span>We believe that every business is uniquids our approach is never growth.</span>
        </div>

        <div className="po-roadmap-timeline">
          <div className="po-roadmap-divider">
            <span className="po-roadmap-divider-line" />
            <span className="po-roadmap-divider-dot" />
          </div>

          <div className="po-roadmap-items" ref={itemsWrapRef}>
            {roadmapItems.map((item, index) => (
              <article
                ref={(node) => {
                  itemRefs.current[index] = node;
                }}
                className={`po-roadmap-item ${index % 2 ? "is-reverse" : ""} ${
                  index <= visibleIndex ? "is-visible" : ""
                }`}
                key={`${item.years}-${index}`}
              >
                <div className="po-roadmap-content">
                  <p className="po-roadmap-years">{item.years}</p>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <span className="po-roadmap-number">{String(index + 1).padStart(2, "0")}</span>
                </div>
                <div className="po-roadmap-image">
                  <img src={item.image} alt={item.title} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapTimelineSection;

