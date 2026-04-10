"use client";

import React from "react";

const FounderMessageSection = () => {
  return (
    <section className="po-founder-section">
      <div className="container">
        <div className="po-founder-grid">
          <article className="po-founder-image-card">
            <img src="/assets/images/v2/pages/ceo-message.webp" alt="Ajmal Saifi - Founder & CEO" />

            <div className="po-founder-signature-card">
              <h3>Ajmal Saifi</h3>
              <p>Founder &amp; CEO</p>
              <span>Prestige One Developments</span>
            </div>
          </article>

          <article className="po-founder-content-card">
            <p className="po-founder-kicker">Message from our CEO</p>

            <h2>
              Building Dubai&apos;s
              <br />
              <span>Next Era of Living</span>
            </h2>

            <p>
              Ajmal Saifi is a visionary property developer and investor with 15+ years of
              experience shaping Dubai&apos;s real estate landscape. As the founder of
              <strong> Prestige One</strong>, he has built a distinguished portfolio of
              multi-billion-dirham residential and hospitality developments across global markets.
            </p>

            <p>
              Recognized by the Dubai Land Department as one of the city&apos;s top investors,
              Ajmal specializes in structuring complex transactions, leading mixed-use projects,
              and delivering world-class developments that set new benchmarks for design, quality,
              and long-term value.
            </p>

            <p>
              Beyond real estate, he serves on the board of the Diana Saifi Foundation, driving
              initiatives that create lasting, positive impact in the community.
            </p>

            <div className="po-founder-stats">
              <div className="po-founder-stat-card">
                <i className="fa-solid fa-award" aria-hidden="true"></i>
                <h4>15+ Years</h4>
                <p>Global Experience</p>
              </div>

              <div className="po-founder-stat-card">
                <i className="fa-solid fa-building" aria-hidden="true"></i>
                <h4>Multi-Billion</h4>
                <p>AED Portfolio</p>
              </div>

              <div className="po-founder-stat-card">
                <i className="fa-solid fa-handshake" aria-hidden="true"></i>
                <h4>Community</h4>
                <p>Driven Leadership</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default FounderMessageSection;

