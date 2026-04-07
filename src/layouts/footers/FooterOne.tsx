import Link from "next/link";

type FooterNavItem = {
  label: string;
  href: string;
};

function isExternalHref(href: string) {
  return href.startsWith("http://") || href.startsWith("https://") || href.startsWith("mailto:") || href.startsWith("tel:");
}

function FooterNavLink({ label, href }: FooterNavItem) {
  if (isExternalHref(href)) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {label}
      </a>
    );
  }
  return <Link href={href}>{label}</Link>;
}

const corporate: FooterNavItem[] = [
  { label: "About Prestige One", href: "/about-us" },
  { label: "Invest in Prestige One", href: "/investments" },
  { label: "Broker Registration", href: "/broker-registration" },
  { label: "Project Documents", href: "/project-documents" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-conditions" },
  { label: "Marketing Terms & Conditions", href: "/marketing-terms-conditions" },
  { label: "Corporate Social Responsibility", href: "/corporate-social-responsibility" },
];

const areas: FooterNavItem[] = [
  { label: "Majan City", href: "#" },
  { label: "Dubai Maritime City", href: "/our-destinations/dubai-maritime-city" },
  { label: "Barsha Heights", href: "/our-destinations/barsha-heights" },
  { label: "Dubai Islands", href: "/our-destinations/dubai-islands" },
  { label: "Dubai Sports City", href: "/our-destinations/dubai-sports-city" },
  { label: "Jumeirah Village Circle (JVC)", href: "/our-destinations/jumeirah-village-circle" },
  { label: "Mohammed Bin Rashid City", href: "#" },
  { label: "Palm Jumeirah", href: "/our-destinations/palm-jumeirah" },
];

const mediaCenter: FooterNavItem[] = [
  { label: "Construction Updates", href: "/construction-updates" },
  { label: "Press Release", href: "#" },
  { label: "Blog Posts", href: "#" },
  { label: "Industry News", href: "#" },
];

const topProjects: FooterNavItem[] = [
  { label: "Boulevard by prestige one", href: "#" },
  { label: "Vista by prestige one", href: "#" },
  { label: "Hilton by prestige one", href: "/projects/hilton-residences-dubai-maritime-city" },
  { label: "Sanctuary by prestige one", href: "#" },
  { label: "Coastal Haven by prestige one", href: "#" },
];

const socialLinks: { href: string; label: string; iconClass: string }[] = [
  { href: "https://www.facebook.com/ByPrestigeOne/", label: "Facebook", iconClass: "fa-brands fa-facebook-f" },
  { href: "https://www.instagram.com/byprestigeone/", label: "Instagram", iconClass: "fa-brands fa-instagram" },
  { href: "https://www.linkedin.com/company/byprestigeone", label: "LinkedIn", iconClass: "fa-brands fa-linkedin-in" },
  { href: "https://www.youtube.com/@byprestigeone", label: "YouTube", iconClass: "fa-brands fa-youtube" },
];

const FooterOne = () => {
  return (
    <>
      <footer className="footer-wrapper">
        <div className="divider"></div>

        <div className="container">
          <div className="row g-4">
            <div className="col-12 col-lg-3">
              <div className="footer-card footer-card-logo">
                <Link href="/">
                  <img className="dark-logo" src="/assets/img/v2/AFA-logo-400.webp" alt="Prestige One Developments" />
                  <img className="light-logo" src="/assets/img/v2/AFA-logo-400.webp" alt="Prestige One Developments" />
                </Link>
                <p className="mb-0">
                  Prestige One Developments creates premium residences and commercial destinations with a strong focus on design,
                  quality, and long-term value.
                </p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4 col-xl-2">
              <div className="footer-card">
                <h5 className="mb-0">CORPORATE</h5>
                <ul className="footer-nav">
                  {corporate.map((item) => (
                    <li key={item.label}>
                      <FooterNavLink {...item} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4 col-xl-2">
              <div className="footer-card">
                <h5 className="mb-0">POPULAR AREAS</h5>
                <ul className="footer-nav">
                  {areas.map((item) => (
                    <li key={item.label}>
                      <FooterNavLink {...item} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-6 col-xl-2">
              <div className="footer-card">
                <h5 className="mb-0">MEDIA CENTER</h5>
                <ul className="footer-nav">
                  {mediaCenter.map((item) => (
                    <li key={item.label}>
                      <FooterNavLink {...item} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-6 col-xl-3">
              <div className="footer-card">
                <h5 className="mb-0">TOP SEARCHED PROJECTS</h5>
                <ul className="footer-nav">
                  {topProjects.map((item) => (
                    <li key={item.label}>
                      <FooterNavLink {...item} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="footer-line"></div>
        </div>

        <div className="container footer-copyright-wrapper">
          <div className="row align-items-center">
            <div className="col-6">
              <p className="mb-0 copyright text-start">
                Copyright © {new Date().getFullYear()} Prestige One Developments. All rights reserved.
              </p>
            </div>
            <div className="col-6">
              <div className="social-nav text-end">
                {socialLinks.map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                    <i className={s.iconClass} aria-hidden="true"></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="divider-sm"></div>
      </footer>
    </>
  );
};

export default FooterOne;

