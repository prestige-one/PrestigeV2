"use client";

import React, { useEffect, useMemo, useState } from "react";

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

type StatMeta = {
  target: number; // animated numeric part (no suffix)
  suffix: string; // e.g. "K"
  decimals: number; // for K values
  plus: boolean; // for "+"" values
};

const parseStatValue = (value: string): StatMeta => {
  const plus = value.includes("+");
  const raw = value.replace("+", "").trim();

  if (raw.endsWith("K")) {
    const numStr = raw.replace("K", "");
    const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0;
    return { target: parseFloat(numStr), suffix: "K", decimals, plus: false };
  }

  const decimals = raw.includes(".") ? raw.split(".")[1].length : 0;
  return { target: parseFloat(raw), suffix: "", decimals, plus };
};

const formatStatValue = (num: number, meta: StatMeta) => {
  if (meta.suffix === "K") return `${num.toFixed(meta.decimals)}K`;
  if (meta.plus) return `${Math.round(num)}+`;
  if (meta.decimals > 0) return num.toFixed(meta.decimals);
  return `${Math.round(num)}`;
};

const MissionVisionStatsSection = () => {
  const metas = useMemo(() => stats.map((s) => parseStatValue(s.value)), []);
  const [displayNums, setDisplayNums] = useState<number[]>(() => metas.map(() => 0));
  const [hasEnteredViewport, setHasEnteredViewport] = useState(false);
  const sectionRef = React.useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el || hasEnteredViewport) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setHasEnteredViewport(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasEnteredViewport]);

  useEffect(() => {
    if (!hasEnteredViewport) return;

    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (reduced) {
      setDisplayNums(metas.map((m) => m.target));
      return;
    }

    const durationMs = 1200;
    const start = performance.now();

    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, Math.max(0, (now - start) / durationMs));
      const eased = easeOutCubic(t);
      setDisplayNums(metas.map((m) => m.target * eased));

      if (t < 1) raf = window.requestAnimationFrame(tick);
    };

    raf = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(raf);
  }, [hasEnteredViewport, metas]);

  return (
    <section className="po-mv-stats-section" ref={sectionRef}>
      <div className="container">
        <div className="po-mv-wrapper">
          <div className="po-mv-top-grid">
            <article className="po-mv-feature-card">
              <span className="po-mv-feature-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="12" cy="12" r="8.5" fill="none" stroke="#ffffff" strokeWidth="1.35" />
                  <circle cx="12" cy="12" r="3.2" fill="none" stroke="#ffffff" strokeWidth="1.35" />
                  <path d="M12 3.6V7.1M20.4 12H17M12 20.4V17M3.6 12H7.1" fill="none" stroke="#ffffff" strokeWidth="1.35" strokeLinecap="round" />
                </svg>
              </span>
              <h3>Our mission</h3>
              <p>{missionText}</p>
            </article>

            <article className="po-mv-feature-card">
              <span className="po-mv-feature-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M2.5 12s3.6-7 9.5-7 9.5 7 9.5 7-3.6 7-9.5 7-9.5-7-9.5-7Z" fill="none" stroke="#ffffff" strokeWidth="1.35" strokeLinejoin="round" />
                  <circle cx="12" cy="12" r="3.2" fill="none" stroke="#ffffff" strokeWidth="1.35" />
                  <path d="M15.6 8.6 17.6 6.6" fill="none" stroke="#ffffff" strokeWidth="1.35" strokeLinecap="round" />
                </svg>
              </span>
              <h3>Our vision</h3>
              <p>{visionText}</p>
            </article>
          </div>

          <div className="po-mv-stats-grid">
            {stats.map((item, index) => (
              <article className="po-mv-stat-card" key={item.label}>
                <span className="po-mv-stat-icon">{item.icon}</span>
                <div className="po-mv-stat-copy">
                  <h3>{formatStatValue(displayNums[index] ?? 0, metas[index])}</h3>
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

