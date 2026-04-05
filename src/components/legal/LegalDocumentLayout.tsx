import PageHero from "@/common/PageHero";
import SiteFooterBlock from "@/layouts/SiteFooterBlock";
import SiteHeader from "@/layouts/SiteHeader";
import type { ReactNode } from "react";

export type LegalDocumentLayoutProps = {
  title: string;
  description?: string;
  /** Accessible name for the document region */
  ariaLabel: string;
  children: ReactNode;
};

export default function LegalDocumentLayout({
  title,
  description,
  ariaLabel,
  children,
}: LegalDocumentLayoutProps) {
  return (
    <>
      <SiteHeader />
      <PageHero kicker="Prestige One Developments" title={title} description={description} />
      <section className="po-legal-doc" aria-label={ariaLabel}>
        <div className="container">
          <div className="po-legal-doc-inner">{children}</div>
        </div>
      </section>
      <SiteFooterBlock />
    </>
  );
}
