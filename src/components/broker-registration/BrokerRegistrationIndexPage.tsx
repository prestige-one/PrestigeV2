"use client";

import Link from "next/link";
import { BROKER_REGISTRATION_CARDS } from "@/data/broker-registration";
import SiteFooterBlock from "@/layouts/SiteFooterBlock";
import SiteHeader from "@/layouts/SiteHeader";
import { IconBuilding, IconPersonSuit } from "./BrokerRegistrationIcons";

const LISTING_KICKER = "Prestige One Developments";

const LISTING_TITLE =
  "Join Prestige One's broker network and access premium projects, exceptional incentives, and dedicated support";

const LISTING_INTRO = "Register today to elevate your business.";

export default function BrokerRegistrationIndexPage() {
  return (
    <>
      <SiteHeader />

      <main>
        <section className="po-list-page po-broker-reg-page" aria-labelledby="broker-reg-list-heading">
          <div className="po-list-page-hero">
            <div className="container po-list-page-hero-inner">
              <p className="po-list-page-kicker">{LISTING_KICKER}</p>
              <h1 id="broker-reg-list-heading" className="po-list-page-title po-broker-reg-list-title">
                {LISTING_TITLE}
              </h1>
              <p className="po-list-page-intro">{LISTING_INTRO}</p>
            </div>
          </div>

          <div className="po-broker-reg-cards-shell" aria-label="Broker registration categories">
            <div className="container">
              <div className="po-broker-reg-grid">
                {BROKER_REGISTRATION_CARDS.map((card) => (
                  <Link
                    key={card.slug}
                    href={`/broker-registration/${card.slug}`}
                    className="po-broker-reg-card"
                  >
                    <span className="po-broker-reg-card-icon" aria-hidden>
                      {card.icon === "building" ? <IconBuilding /> : <IconPersonSuit />}
                    </span>
                    <span className="po-broker-reg-card-label">{card.title}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooterBlock />
    </>
  );
}
