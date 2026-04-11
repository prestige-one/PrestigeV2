"use client";

import SiteHeader from "@/layouts/SiteHeader";
import SiteFooterBlock from "@/layouts/SiteFooterBlock";

/** Document hubs from https://prestigeone.ae/project-documents/ */
const documentItems = [
  {
    title: "Vista Project Documents",
    href: "/project-documents/vista-spa-tcs/",
    thumbnail: "/assets/images/v2/project-featured-images/vista/vista.webp",
  },
  {
    title: "The Residence Project Documents",
    href: "/project-documents/the-residence-spa-tcs/",
    thumbnail:
      "/assets/images/v2/project-featured-images/residence/THE-RESIDENCE.webp",
  },
  {
    title: "Seaside Project Documents",
    href: "/project-documents/seaside-spa-tcs/",
    thumbnail: "/assets/images/v2/project-featured-images/seaside/seaside-featured-image.webp",
  },
  {
    title: "Place Project Documents",
    href: "/project-documents/the-place-spa-tcs/",
    thumbnail: "/assets/images/v2/project-featured-images/place/The-Place-Banner.webp",
  },
  {
    title: "The Waterway Project Documents",
    href: "/project-documents/the-waterway-spa-tcs/",
    thumbnail: "/assets/images/v2/project-featured-images/waterway/Waterway-pic-2.webp",
  },
  {
    title: "Parkway Project Documents",
    href: "/project-documents/parkway-spa-tcs/",
    thumbnail: "/assets/images/v2/project-featured-images/parkway/parkway.webp",
  },
  {
    title: "The One Project Documents",
    href: "/project-documents/the-one-spa-tcs/",
    thumbnail:
      "/assets/images/v2/project-featured-images/one/the-one.webp",
  },
  {
    title: "The Boulevard Project Documents",
    href: "/project-documents/the-boulevard-spa-tcs/",
    thumbnail: "/assets/images/v2/project-featured-images/boulevard/boulevard.webp",
  },
  {
    title: "Coastal Haven Project Documents",
    href: "/project-documents/coastal-haven-spa-tcs/",
    thumbnail: "/assets/images/v2/project-featured-images/coastal-haven/Coastal-Haven.webp",
  },
  {
    title: "Luxury Canal Project Documents",
    href: "/project-documents/luxury-canal-spa-tcs/",
    thumbnail: "/assets/images/v2/project-featured-images/luxury-canal/luxury-canal.webp",
  },
  {
    title: "Berkeley Square Project Documents",
    href: "/project-documents/berkeley-square-spa-tcs/",
    thumbnail:
      "/assets/images/v2/project-featured-images/berkeley/Berkeley-Square-North.webp",
  },
  {
    title: "Hilton Project Documents",
    href: "/project-documents/hilton-residences-dubai-maritime-city-spa-tcs/",
    thumbnail: "/assets/images/v2/project-featured-images/hilton/HILTON-NIGHT-VIEW-1.webp",
  },
];

const ProjectDocumentsPage = () => {
  return (
    <>
      <SiteHeader />

      <section className="po-project-docs-hero">
        <div className="container">
          <div className="po-project-docs-hero-inner text-center">
            <p className="po-project-docs-kicker">Prestige One Developments</p>
            <h1>Project Documents</h1>
            <p>
              Access project-specific documents and resources. Select a development below to view
              available materials on our official portal.
            </p>
          </div>
        </div>
      </section>

      <section className="po-project-docs-section">
        <div className="container">
          <ul className="po-project-docs-list">
            {documentItems.map((item) => (
              <li key={item.href} className="po-project-docs-item">
                <a href={item.href} className="po-project-docs-link">
                  <span className="po-project-docs-thumb-wrap">
                    <img
                      src={item.thumbnail}
                      alt=""
                      className="po-project-docs-thumb"
                      loading="lazy"
                      decoding="async"
                    />
                  </span>
                  <span className="po-project-docs-title">{item.title}</span>
                  <span className="po-project-docs-cta">
                    <span>Find Out More</span>
                    <svg viewBox="0 0 24 24" aria-hidden="true" width="18" height="18">
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7 17L17 7M17 7H9M17 7V15"
                      />
                    </svg>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <SiteFooterBlock />
    </>
  );
};

export default ProjectDocumentsPage;
