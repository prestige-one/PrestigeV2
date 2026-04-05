import type { ReactNode } from "react";

function IconPin({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path
        d="M12 21s7-4.35 7-11a7 7 0 10-14 0c0 6.65 7 11 7 11z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10" r="2.25" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function IconPhone({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path
        d="M6.5 3h3l1.5 5.5-2 1.1a11 11 0 006.4 6.4l1.1-2L22 15.5v3a2 2 0 01-2 2c-9.4 0-17-7.6-17-17a2 2 0 012-2z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconEmail({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconGlobe({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M3 12h18M12 3c2.8 4 4.2 7.2 4.2 9s-1.4 5-4.2 9c-2.8-4-4.2-7.2-4.2-9s1.4-5 4.2-9z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const icons = {
  pin: IconPin,
  phone: IconPhone,
  email: IconEmail,
  globe: IconGlobe,
} as const;

export type ContactDetailCardIcon = keyof typeof icons;

export type ContactDetailCardItem = {
  icon: ContactDetailCardIcon;
  label: string;
  value: string;
  href?: string;
};

const PRESTIGE_SOCIAL_LINKS = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/ByPrestigeOne/",
    viewBox: "0 0 512 512",
    path:
      "M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/byprestigeone",
    viewBox: "0 0 448 512",
    path:
      "M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/byprestigeone/",
    viewBox: "0 0 448 512",
    path:
      "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@byprestigeone",
    viewBox: "0 0 576 512",
    path:
      "M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z",
  },
  {
    name: "X",
    href: "https://x.com/ByPrestigeOne",
    viewBox: "0 0 512 512",
    path: "M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z",
  },
] as const;

function CardValue({ href, children }: { href?: string; children: ReactNode }) {
  if (href) {
    return (
      <a href={href} className="po-contact-detail-card-value po-contact-detail-card-value--link">
        {children}
      </a>
    );
  }
  return <p className="po-contact-detail-card-value">{children}</p>;
}

function ContactSocialRow() {
  return (
    <ul className="po-contact-detail-social" aria-label="Prestige One on social media">
      {PRESTIGE_SOCIAL_LINKS.map((item) => (
        <li key={item.name} className="po-contact-detail-social-item">
          <a
            className="po-contact-detail-social-link"
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="visually-hidden">{item.name}</span>
            <svg viewBox={item.viewBox} xmlns="http://www.w3.org/2000/svg" aria-hidden className="po-contact-detail-social-svg">
              <path fill="currentColor" d={item.path} />
            </svg>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default function ContactDetailCardsSection({
  headingId = "po-contact-detail-heading",
  heading,
  items,
  ariaLabel = "Contact information",
  showSocial = false,
  className,
}: {
  headingId?: string;
  heading?: string;
  items: ContactDetailCardItem[];
  ariaLabel?: string;
  showSocial?: boolean;
  /** Appended to `po-contact-detail-strip` (shared modifiers, e.g. `po-contact-detail-strip--hero-glass`). */
  className?: string;
}) {
  const hasHeading = Boolean(heading);
  const stripClass = ["po-contact-detail-strip", className].filter(Boolean).join(" ");

  return (
    <section
      className={stripClass}
      {...(hasHeading ? { "aria-labelledby": headingId } : { "aria-label": ariaLabel })}
    >
      <div className="container">
        {hasHeading ? (
          <h2 id={headingId} className="po-contact-detail-heading">
            {heading}
          </h2>
        ) : null}
        <div className="po-contact-detail-panel">
          <div className="po-contact-detail-grid">
            {items.map((item) => {
              const Icon = icons[item.icon];
              return (
                <article key={item.label} className="po-contact-detail-card">
                  <div className="po-contact-detail-card-icon-wrap" aria-hidden="true">
                    <Icon className="po-contact-detail-card-icon" />
                  </div>
                  <div className="po-contact-detail-card-text">
                    <h3 className="po-contact-detail-card-label">{item.label}</h3>
                    <CardValue href={item.href}>{item.value}</CardValue>
                  </div>
                </article>
              );
            })}
          </div>
          {showSocial ? <ContactSocialRow /> : null}
        </div>
      </div>
    </section>
  );
}
