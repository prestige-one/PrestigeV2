"use client";

import HeaderOne from "@/layouts/headers/HeaderOne";
import FooterOne from "@/layouts/footers/FooterOne";

/** Document hubs from https://prestigeone.ae/project-documents/ */
const documentItems = [
  {
    title: "Vista Project Documents",
    href: "https://prestigeone.ae/project-documents/vista-spa-tcs/",
    thumbnail: "https://prestigeone.ae/wp-content/uploads/2022/08/Website_images_23Feb-VISTA.jpg",
  },
  {
    title: "The Residence Project Documents",
    href: "https://prestigeone.ae/project-documents/the-residence-spa-tcs/",
    thumbnail:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2025/07/07161026/Berkeley-Square-Kids-Area-Night-scaled.webp",
  },
  {
    title: "Seaside Project Documents",
    href: "https://prestigeone.ae/project-documents/seaside-spa-tcs/",
    thumbnail: "https://prestigeone.ae/wp-content/uploads/2024/03/seaside-banner-1.jpg",
  },
  {
    title: "Place Project Documents",
    href: "https://prestigeone.ae/project-documents/the-place-spa-tcs/",
    thumbnail: "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2022/08/24175842/The-Place-Banner.webp",
  },
  {
    title: "The Waterway Project Documents",
    href: "https://prestigeone.ae/project-documents/the-waterway-spa-tcs/",
    thumbnail: "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2025/03/08085032/04-Facade-scaled.webp",
  },
  {
    title: "Parkway Project Documents",
    href: "https://prestigeone.ae/project-documents/parkway-spa-tcs/",
    thumbnail: "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/27164232/Front-Exterior-3-scaled.webp",
  },
  {
    title: "The One Project Documents",
    href: "https://prestigeone.ae/project-documents/the-one-spa-tcs/",
    thumbnail:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2025/07/09112539/Berkeley-Square-Facade-Night-View-3-scaled.webp",
  },
  {
    title: "The Boulevard Project Documents",
    href: "https://prestigeone.ae/project-documents/the-boulevard-spa-tcs/",
    thumbnail: "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/12/25132924/NIGHT-4c-scaled.webp",
  },
  {
    title: "Coastal Haven Project Documents",
    href: "https://prestigeone.ae/project-documents/coastal-haven-spa-tcs/",
    thumbnail: "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2025/02/24094547/harbour-1.webp",
  },
  {
    title: "Luxury Canal Project Documents",
    href: "https://prestigeone.ae/project-documents/luxury-canal-spa-tcs/",
    thumbnail: "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2025/03/08085032/04-Facade-scaled.webp",
  },
  {
    title: "Berkeley Square Project Documents",
    href: "https://prestigeone.ae/project-documents/berkeley-square-spa-tcs/",
    thumbnail:
      "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2025/07/09112539/Berkeley-Square-Facade-Night-View-3-scaled.webp",
  },
  {
    title: "Hilton Project Documents",
    href: "https://prestigeone.ae/project-documents/hilton-residences-dubai-maritime-city-spa-tcs/",
    thumbnail: "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2026/03/14144431/HILTON-NIGHT-VIEW-1.webp",
  },
];

const ProjectDocumentsPage = () => {
  return (
    <>
      <HeaderOne />

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
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="po-project-docs-link"
                >
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

      <FooterOne />
    </>
  );
};

export default ProjectDocumentsPage;
