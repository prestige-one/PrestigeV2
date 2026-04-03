
import React from 'react';

const FooterOne = () => {
  const corporate = [
    "About Prestige One",
    "Invest in Prestige One",
    "Broker Registration",    
    "Project Documents",
    "Privacy Policy",
    "Terms & Conditions",
    "Marketing Terms & Conditions",
    "Corporate Social Responsibility",
  ];

  const areas = [
    "Majan City",
    "Dubai Maritime City",
    "Barsha Heights",
    "Dubai Islands",
    "Dubai Sports City",
    "Jumeirah Village Circle (JVC)",
    "Mohammed Bin Rashid City",
    "Palm Jumeirah",
  ];

  const mediaCenter = [
    "Construction Updates",
    "Press Release",
    "Blog Posts",
    "Industry News",
  ];

  const topProjects = [
    "Boulevard by prestige one",
    "Vista by prestige one",
    "Hilton by prestige one",
    "Sanctuary by prestige one",
    "Coastal Haven by prestige one",
  ];

  return (
    <>
      <footer className="footer-wrapper">
        <div className="divider"></div>

        <div className="container">
          <div className="row g-4">
            <div className="col-12 col-lg-3">
              <div className="footer-card footer-card-logo">
                <a href="#">
                  <img className="dark-logo" src="/assets/img/v2/AFA-logo-400.webp" alt="Prestige One Developments" />
                  <img className="light-logo" src="/assets/img/v2/AFA-logo-400.webp" alt="Prestige One Developments" />
                </a>
                <p className="mb-0">
                  Prestige One Developments creates premium residences and commercial destinations
                  with a strong focus on design, quality, and long-term value.
                </p>                
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4 col-xl-2">
              <div className="footer-card">
                <h5 className="mb-0">CORPORATE</h5>
                <ul className="footer-nav">
                  {corporate.map((item) => (
                    <li key={item}>
                      <a href={item === "Project Documents" ? "/project-documents" : "#"}>{item}</a>
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
                    <li key={item}><a href="#">{item}</a></li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-6 col-xl-2">
              <div className="footer-card">
                <h5 className="mb-0">MEDIA CENTER</h5>
                <ul className="footer-nav">
                  {mediaCenter.map((item) => (
                    <li key={item}><a href="#">{item}</a></li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-6 col-xl-3">
              <div className="footer-card">
                <h5 className="mb-0">TOP SEARCHED PROJECTS</h5>
                <ul className="footer-nav">
                  {topProjects.map((item) => (
                    <li key={item}><a href="#">{item}</a></li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="footer-line"></div>
        </div>

        <div className="container">
          <div className="row align-items-center">
            <div className="col-6">
              <p className="mb-0 copyright text-start">
                Copyright © {new Date().getFullYear()} Prestige One Developments. All rights reserved.
              </p>
            </div>
            <div className="col-6">
              <div className="social-nav text-end">
                  <a href="#" aria-label="Facebook">
                    <i className="fa-brands fa-facebook-f" aria-hidden="true"></i>
                  </a>
                  <a href="#" aria-label="Instagram">
                    <i className="fa-brands fa-instagram" aria-hidden="true"></i>
                  </a>
                  <a href="#" aria-label="LinkedIn">
                    <i className="fa-brands fa-linkedin-in" aria-hidden="true"></i>
                  </a>
                  <a href="#" aria-label="YouTube">
                    <i className="fa-brands fa-youtube" aria-hidden="true"></i>
                  </a>
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