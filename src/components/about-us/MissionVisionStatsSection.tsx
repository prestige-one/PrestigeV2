"use client";

import React from "react";

const missionText =
  "Prestige One Developments is committed to creating innovative and sustainable developments that enhance the quality of life for our clients. By combining superior design, high-quality materials, and exceptional service, we contribute to Dubai's reputation as a global real estate leader.";

const visionText =
  "To lead the transformation of real estate by creating iconic, sustainable developments that improve the living experience and inspire communities to 'Live in Prestige'.";

const stats = [
  {
    value: "20+",
    label: "Projects Completed",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 5.5h16M7 3v2.5M17 3v2.5M6 9h12a1 1 0 0 1 1 1V18a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-8a1 1 0 0 1 1-1Z" />
      </svg>
    ),
  },
  {
    value: "6.5K",
    label: "Brokers with us",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 12.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm-7 7c.7-2.7 3.3-4.5 7-4.5s6.3 1.8 7 4.5M8 9.5h.01M16 9.5h.01" />
      </svg>
    ),
  },
  {
    value: "127+",
    label: "Strategic Partners",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M8.5 10a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM4.5 19c.4-2.2 2.4-3.8 4.7-3.8 2.3 0 4.3 1.6 4.7 3.8m1.6 0c.3-1.8 1.9-3 3.7-3 .9 0 1.8.3 2.6.9" />
      </svg>
    ),
  },
  {
    value: "11.5K",
    label: "Satisfied Clients",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 20s-7-3.8-7-9.2a4.2 4.2 0 0 1 7-3 4.2 4.2 0 0 1 7 3C19 16.2 12 20 12 20Z" />
      </svg>
    ),
  },
];

const MissionVisionStatsSection = () => {
  return (
    <section className="po-mv-stats-section">
      <div className="container">
        <div className="po-mv-wrapper">
          <div className="po-mv-top-grid">
            <article className="po-mv-feature-card">
              <span className="po-mv-feature-icon">
                <img src="/assets/img/v2/icons/svg-image-18.svg" alt="Mission icon" />
              </span>
              <h3>Our mission</h3>
              <p>{missionText}</p>
            </article>

            <article className="po-mv-feature-card">
              <span className="po-mv-feature-icon">
                <img src="/assets/img/v2/icons/svg-image-19.svg" alt="Vision icon" />
              </span>
              <h3>Our vision</h3>
              <p>{visionText}</p>
            </article>
          </div>

          <div className="po-mv-stats-grid">
            {stats.map((item) => (
              <article className="po-mv-stat-card" key={item.label}>
                <span className="po-mv-stat-icon">{item.icon}</span>
                <div className="po-mv-stat-copy">
                  <h3>{item.value}</h3>
                  <p>{item.label}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionStatsSection;

