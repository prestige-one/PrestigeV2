"use client";

import type { BrokerRegistrationPageContent, BrokerRegistrationSlug } from "@/data/broker-registration";
import BrokerRegistrationForm from "@/components/broker-registration/BrokerRegistrationForm";
import SiteFooterBlock from "@/layouts/SiteFooterBlock";
import SiteHeader from "@/layouts/SiteHeader";

type BrokerRegistrationDetailPageProps = BrokerRegistrationPageContent & {
  slug: BrokerRegistrationSlug;
};

export default function BrokerRegistrationDetailPage({
  slug,
  heroTitle,
  heroIntro,
  sections,
}: BrokerRegistrationDetailPageProps) {
  return (
    <>
      <SiteHeader />

      <main>
        <section
          className="po-list-page po-broker-reg-page po-broker-reg-page--light"
          aria-labelledby="broker-reg-detail-heading"
        >
          <div className="po-list-page-hero">
            <div className="container po-list-page-hero-inner">
              <p className="po-list-page-kicker">Prestige One Developments</p>
              <h1 id="broker-reg-detail-heading" className="po-list-page-title">
                {heroTitle}
              </h1>
              <p className="po-list-page-intro">{heroIntro}</p>
            </div>
          </div>

          <div className="po-broker-reg-detail-shell">
            <div className="container po-broker-reg-detail-inner">
              {sections.map((section) => (
                <section
                  key={section.heading}
                  className="po-broker-reg-detail-block po-broker-reg-detail-panel"
                >
                  <h2 className="po-broker-reg-detail-heading">{section.heading}</h2>
                  {section.paragraphs.map((p, i) => (
                    <p key={`${section.heading}-${i}`} className="po-broker-reg-detail-text">
                      {p}
                    </p>
                  ))}
                </section>
              ))}

              <div className="po-broker-reg-form-shell po-broker-reg-detail-panel po-broker-reg-form-shell-panel">
                <h2 className="po-broker-reg-detail-heading po-broker-reg-form-section-heading">Registration form</h2>
                <BrokerRegistrationForm slug={slug} />
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooterBlock />
    </>
  );
}
