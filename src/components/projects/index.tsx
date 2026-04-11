"use client";

import { useMemo, useState } from "react";
import ListItemExploreLink from "@/common/ListItemExploreLink";
import ListPageExploreArrow from "@/common/ListPageExploreArrow";
import SiteHeader from "@/layouts/SiteHeader";
import SiteFooterBlock from "@/layouts/SiteFooterBlock";

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
    thumbnail: "/assets/images/v2/project-featured-images/sanctuary/sanctuary-hive-2.webp",
    link: "/projects/sanctuary-hive-by-prestige-one/",
    location: "Meydan Horizon",
  },
  {
    title: "Sanctuary by Prestige One",
    description:
      "Step into a more balanced Dubai lifestyle at Sanctuary by Prestige One, where modern living and commercial spaces come together in Meydan.",
    thumbnail: "/assets/images/v2/project-featured-images/sanctuary/sanctuary-aprtment.webp",
    link: "/projects/sanctuary",
    location: "Meydan Horizon",
  },
  {
    title: "Hilton Residences Dubai Maritime City",
    description: "Life at Hilton Residences by Prestige One is a balance of elegance and ease.",
    thumbnail: "/assets/images/v2/project-featured-images/hilton/HILTON-NIGHT-VIEW-1.webp",
    link: "/projects/hilton-residences-dubai-maritime-city",
    location: "Dubai Maritime City",
  },
  {
    title: "Berkeley Square North",
    description:
      "Berkeley Square North, located in Jumeirah Village Circle, stands apart from the rest. Designed with inspiration from London's classic architecture, it favors clean lines.",
    thumbnail:
      "/assets/images/v2/project-featured-images/berkeley/Berkeley-Square-North.webp",
    link: "/projects/berkeley-square-north",
    location: "JVC",
  },
  {
    title: "Berkeley Square South",
    description: "Positioned within Jumeirah Village Circle, Berkeley Square South brings together elegance and beautiful design.",
    thumbnail: "/assets/images/v2/project-featured-images/berkeley/Berkeley-Square-South.webp",
    link: "/projects/berkeley-square-south",
    location: "JVC",
  },
  {
    title: "Luxury Canal Residences",
    description:
      "Luxury Canal Residences by Prestige One captures the rhythm of the waves in Dubai Islands, offering G+2P+12 canal-front living.",
    thumbnail: "/assets/images/v2/project-featured-images/luxury-canal/luxury-canal.webp",
    link: "/projects/luxury-canal-residences",
    location: "Dubai Islands",
  },
  {
    title: "Coastal Haven",
    description:
      "Coastal Haven by Prestige Harbour defines the new era of coastal living in Dubai Islands, with G+2P+12 waterfront elegance.",
    thumbnail: "/assets/images/v2/project-featured-images/coastal-haven/Coastal-Haven.webp",
    link: "/projects/coastal-haven/",
    location: "Dubai Islands",
  },
  {
    title: "The Boulevard",
    description: "The Boulevard by Prestige One brings bold and ambitious boulevard living to DLRC, rising 18 floors.",
    thumbnail: "/assets/images/v2/project-featured-images/boulevard/boulevard.webp",
    link: "/projects/the-boulevard-by-prestige-one/",
    location: "DLRC",
  },
  {
    title: "Parkway",
    description: "Parkway by Prestige One is a nature-inspired sanctuary in Meydan Horizon, rising 33 floors amidst lush surroundings.",
    thumbnail: "/assets/images/v2/project-featured-images/parkway/parkway.webp",
    link: "/projects/parkway-by-prestige-one/",
    location: "Meydan Horizon",
  },
  {
    title: "Place",
    description: "Place by Prestige One is designed for active family living in Sports City, featuring 23 floors with contemporary residences.",
    thumbnail: "/assets/images/v2/project-featured-images/place/The-Place-Banner.webp",
    link: "/projects/place-by-prestige-one/",
    location: "Dubai Sports City",
  },
  {
    title: "The One",
    description: "The One by Prestige One is a commercial hub in Barsha Heights, designed for visionaries within a G+14 development.",
    thumbnail: "/assets/images/v2/project-featured-images/one/the-one.webp",
    link: "/projects/the-one-by-prestige-one/",
    location: "Barsha Heights",
  },
  {
    title: "Seaside",
    description: "Seaside by Prestige One offers a retreat along the sea in Dubai Islands, with G+12 waterfront living.",
    thumbnail: "/assets/images/v2/project-featured-images/seaside/seaside-featured-image.webp",
    link: "/projects/seaside-by-prestige-one/",
    location: "Dubai Islands",
  },
  {
    title: "The Waterway",
    description:
      "The Waterway by Prestige One, featuring 20 floors and beautiful waterfront homes brings the flow of water to life in Meydan Horizon.",
    thumbnail: "/assets/images/v2/project-featured-images/waterway/Waterway-pic-2.webp",
    link: "/projects/the-waterway-by-prestige-one/",
    location: "Meydan Horizon",
  },
  {
    title: "Vista",
    description: "Vista by Prestige One combines sleek architecture with panoramic golf views in Sports City, standing at G+15.",
    thumbnail: "/assets/images/v2/project-featured-images/vista/vista.webp",
    link: "/projects/vista-by-prestige-one/",
    location: "Dubai Sports City",
  },
  {
    title: "The Residence",
    description: "The Residence by Prestige One offers modern luxury in a boutique G+5 low-rise setting in JVC.",
    thumbnail: "/assets/images/v2/project-featured-images/residence/THE-RESIDENCE.webp",
    link: "/projects/the-residence-by-prestige-one/",
    location: "JVC",
  },
  {
    title: "Luxe Villa",
    description:
      "Prestige is an inherent trait, not merely an ambition. It flows as naturally as the tide-defining every aspect of existence.",
    thumbnail: "/assets/images/v2/project-featured-images/luxe-villa/luxe-villas.webp",
    link: "/projects/luxe-villa-by-prestige-one/",
    location: "Palm Jumeirah",
  },
  {
    title: "Seascape Villa",
    description:
      "Explore your private escape into luxury at Seascape Villa by Prestige One, where the serene embrace of the sea welcomes you.",
    thumbnail: "/assets/images/v2/project-featured-images/seascape/seascape.webp",
    link: "/projects/seascape-villa-by-prestige-one/",
    location: "Palm Jumeirah",
  },
];

const INTRO_COPY =
  "Choose from a collection of landmark developments by Prestige One, bringing together exceptional architecture and refined living.";

const ProjectsPage = () => {
  const locations = useMemo(() => ["All", ...Array.from(new Set(projects.map((item) => item.location)))], []);
  const [activeLocation, setActiveLocation] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeLocation === "All") return projects;
    return projects.filter((item) => item.location === activeLocation);
  }, [activeLocation]);

  return (
    <>
      <SiteHeader />

      <main>
        <section className="po-list-page" aria-labelledby="projects-list-heading">
          <div className="po-list-page-hero">
            <div className="container po-list-page-hero-inner">
              <p className="po-list-page-kicker">Prestige One Developments</p>
              <h1 id="projects-list-heading" className="po-list-page-title">
                Our projects
              </h1>
              <p className="po-list-page-intro">{INTRO_COPY}</p>
              <div className="po-projects-filter-wrap po-list-page-filter-wrap">
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
            </div>
          </div>

          <div className="po-list-page-cards-shell" aria-label="Project listings">
            <div className="container">
              <div className="po-list-page-grid list-page-grid">
                {filteredProjects.map((project) => (
                  <article key={project.title} className="po-list-item-card item-card">
                    <div className="po-list-item-media item-card-image">
                      <span className="po-list-item-tag">{project.location}</span>
                      <img src={project.thumbnail} alt={project.title} loading="lazy" />
                    </div>
                    <div className="po-list-item-body item-card-content">
                      <h3 className="po-list-item-title">{project.title}</h3>
                      <p className="po-list-item-desc">{project.description}</p>
                      <ListItemExploreLink href={project.link}>
                        <span>Explore more</span>
                        <ListPageExploreArrow />
                      </ListItemExploreLink>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooterBlock />
    </>
  );
};

export default ProjectsPage;
