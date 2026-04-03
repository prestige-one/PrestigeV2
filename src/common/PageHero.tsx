import React from "react";

export type PageHeroProps = {
  /** Small uppercase line above the title (e.g. brand name). */
  kicker?: string;
  /** Main heading — rendered as `h1`. */
  title: string;
  /** Optional supporting copy below the title. */
  description?: string;
};

/**
 * Shared page hero (same layout as the projects list header: dark band, centered kicker + title + text).
 */
const PageHero = ({ kicker, title, description }: PageHeroProps) => {
  return (
    <section className="po-projects-hero">
      <div className="container">
        <div className="po-projects-hero-inner text-center">
          {kicker ? <p className="po-projects-kicker">{kicker}</p> : null}
          <h1>{title}</h1>
          {description ? <p>{description}</p> : null}
        </div>
      </div>
    </section>
  );
};

export default PageHero;
