"use client";

import { useMemo, useState } from "react";
import PageHero from "@/common/PageHero";
import HeaderOne from "@/layouts/headers/HeaderOne";
import FooterOne from "@/layouts/footers/FooterOne";

type ProjectItem = {
  title: string;
  description: string;
  thumbnail: string;
  link: string;
  location: string;
};

const projects: ProjectItem[] = [
  {
    title: "Sanctuary Hive by Prestige One",
    description:
      "Sanctuary Hive offers well planned commercial properties in Meydan Horizon, Dubai. Ideal for businesses seeking visibility and connectivity.",
    thumbnail: "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2026/03/12140526/C5-0113-hive-2-1.webp",
    link: "https://prestigeone.ae/projects/sanctuary-hive-by-prestige-one/",
    location: "Meydan Horizon",
  },
  {
    title: "Sanctuary by Prestige One",
    description:
      "Step into a more balanced Dubai lifestyle at Sanctuary by Prestige One, where modern living and commercial spaces come together in Meydan.",
    thumbnail: "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2026/03/12123533/C1-0113.webp",
    link: "https://prestigeone.ae/projects/sanctuary/",
    location: "Meydan Horizon",
  },
  {
    title: "Hilton Residences Dubai Maritime City",
    description: "Life at Hilton Residences by Prestige One is a balance of elegance and ease.",
    thumbnail: "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2026/03/14144431/HILTON-NIGHT-VIEW-1.webp",
    link: "/projects/hilton-residences-dubai-maritime-city",
    location: "Dubai Maritime City",
  },
  {
    title: "Berkeley Square North",
    description:
      "Berkeley Square North, located in Jumeirah Village Circle, stands apart from the rest. Designed with inspiration from London's classic architecture, it favors clean lines.",
    thumbnail:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2025/07/09112539/Berkeley-Square-Facade-Night-View-3-scaled.webp",
    link: "https://prestigeone.ae/projects/berkeley-square-north/",
    location: "JVC",
  },
  {
    title: "Berkeley Square South",
    description: "Positioned within Jumeirah Village Circle, Berkeley Square South brings together elegance and beautiful design.",
    thumbnail: "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2025/07/07161026/Berkeley-Square-Kids-Area-Night-scaled.webp",
    link: "https://prestigeone.ae/projects/berkeley-square-south/",
    location: "JVC",
  },
  {
    title: "Luxury Canal Residences",
    description:
      "Luxury Canal Residences by Prestige One captures the rhythm of the waves in Dubai Islands, offering G+2P+12 canal-front living.",
    thumbnail: "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2025/03/08085032/04-Facade-scaled.webp",
    link: "https://prestigeone.ae/projects/luxury-canal-residences/",
    location: "Dubai Islands",
  },
  {
    title: "Coastal Haven",
    description:
      "Coastal Haven by Prestige Harbour defines the new era of coastal living in Dubai Islands, with G+2P+12 waterfront elegance.",
    thumbnail: "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2025/02/24094547/harbour-1.webp",
    link: "https://prestigeone.ae/projects/coastal-haven/",
    location: "Dubai Islands",
  },
  {
    title: "The Boulevard",
    description: "The Boulevard by Prestige One brings bold and ambitious boulevard living to DLRC, rising 18 floors.",
    thumbnail: "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/12/25132924/NIGHT-4c-scaled.webp",
    link: "https://prestigeone.ae/projects/the-boulevard-by-prestige-one/",
    location: "DLRC",
  },
  {
    title: "Parkway",
    description: "Parkway by Prestige One is a nature-inspired sanctuary in Meydan Horizon, rising 33 floors amidst lush surroundings.",
    thumbnail: "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/27164232/Front-Exterior-3-scaled.webp",
    link: "https://prestigeone.ae/projects/parkway-by-prestige-one/",
    location: "Meydan Horizon",
  },
  {
    title: "Place",
    description: "Place by Prestige One is designed for active family living in Sports City, featuring 23 floors with contemporary residences.",
    thumbnail: "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2022/08/24175842/The-Place-Banner.webp",
    link: "https://prestigeone.ae/projects/place-by-prestige-one/",
    location: "Dubai Sports City",
  },
  {
    title: "The One",
    description: "The One by Prestige One is a commercial hub in Barsha Heights, designed for visionaries within a G+14 development.",
    thumbnail: "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2025/07/09112539/Berkeley-Square-Facade-Night-View-3-scaled.webp",
    link: "https://prestigeone.ae/projects/the-one-by-prestige-one/",
    location: "Barsha Heights",
  },
  {
    title: "Seaside",
    description: "Seaside by Prestige One offers a retreat along the sea in Dubai Islands, with G+12 waterfront living.",
    thumbnail: "https://prestigeone.ae/wp-content/uploads/2024/03/seaside-banner-1.jpg",
    link: "https://prestigeone.ae/projects/seaside-by-prestige-one/",
    location: "Dubai Islands",
  },
  {
    title: "The Waterway",
    description:
      "The Waterway by Prestige One, featuring 20 floors and beautiful waterfront homes brings the flow of water to life in Meydan Horizon.",
    thumbnail: "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2025/03/08085032/04-Facade-scaled.webp",
    link: "https://prestigeone.ae/projects/the-waterway-by-prestige-one/",
    location: "Meydan Horizon",
  },
  {
    title: "Vista",
    description: "Vista by Prestige One combines sleek architecture with panoramic golf views in Sports City, standing at G+15.",
    thumbnail: "https://prestigeone.ae/wp-content/uploads/2022/08/Website_images_23Feb-VISTA.jpg",
    link: "https://prestigeone.ae/projects/vista-by-prestige-one/",
    location: "Dubai Sports City",
  },
  {
    title: "The Residence",
    description: "The Residence by Prestige One offers modern luxury in a boutique G+5 low-rise setting in JVC.",
    thumbnail: "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2025/07/07161026/Berkeley-Square-Kids-Area-Night-scaled.webp",
    link: "https://prestigeone.ae/projects/the-residence-by-prestige-one/",
    location: "JVC",
  },
  {
    title: "Luxe Villa",
    description:
      "Prestige is an inherent trait, not merely an ambition. It flows as naturally as the tide-defining every aspect of existence.",
    thumbnail: "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/31103307/luxe-villas.webp",
    link: "https://prestigeone.ae/projects/luxe-villa-by-prestige-one/",
    location: "Palm Jumeirah",
  },
  {
    title: "Seascape Villa",
    description:
      "Explore your private escape into luxury at Seascape Villa by Prestige One, where the serene embrace of the sea welcomes you.",
    thumbnail: "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/31103156/seascape.webp",
    link: "https://prestigeone.ae/projects/seascape-villa-by-prestige-one/",
    location: "Palm Jumeirah",
  },
];

const ProjectsPage = () => {
  const locations = useMemo(() => ["All", ...Array.from(new Set(projects.map((item) => item.location)))], []);
  const [activeLocation, setActiveLocation] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeLocation === "All") return projects;
    return projects.filter((item) => item.location === activeLocation);
  }, [activeLocation]);

  return (
    <>
      <HeaderOne />

      <PageHero
        kicker="Prestige One Developments"
        title="Our Projects"
        description="Choose from a collection of landmark developments by Prestige One, bringing together exceptional architecture and refined living."
      />

      <section className="po-projects-page-section">
        <div className="container">
          <div className="po-projects-filter-wrap">
            {locations.map((location) => (
              <button
                key={location}
                type="button"
                className={`po-project-filter-btn ${activeLocation === location ? "is-active" : ""}`}
                onClick={() => setActiveLocation(location)}
              >
                {location}
              </button>
            ))}
          </div>

          <div className="po-projects-grid">
            {filteredProjects.map((project) => {
              return (
                <article key={project.title} className="po-projects-list-card">
                  <a href={project.link} target="_blank" rel="noreferrer">
                    <div className="po-projects-list-media">
                      <span className="po-project-location-tag">{project.location}</span>
                      <img src={project.thumbnail} alt={project.title} />
                    </div>
                    <div className="po-projects-list-content">
                      <h3>{project.title}</h3>
                      <span className="po-project-title-line" aria-hidden="true" />
                      <p>{project.description}</p>
                      <span className="po-project-read-more">Read More</span>
                    </div>
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <FooterOne />
    </>
  );
};

export default ProjectsPage;
