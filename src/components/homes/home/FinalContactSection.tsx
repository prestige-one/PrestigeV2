"use client";

import FinalContactForm from "./FinalContactForm";
import DubaiDestinationsMap from "./DubaiDestinationsMap";

const FinalContactSection = () => {
  return (
    <section className="po-final-contact-section">
      <div className="container-fluid px-0">
        <div className="row g-0">
          <div className="col-12 col-lg-3">
            <div className="po-final-contact-left">
              <img src="/assets/img/v2/project-featured-images/marina-plaza.jpg" alt="Prestige One contact" />
            </div>
          </div>

          <div className="col-12 col-lg-9 po-final-contact-right-col">
          <div className="po-final-contact-topbar-wrapper">
           
            <div className="po-final-contact-topbar">
              <div className="po-final-contact-head po-final-contact-head-left">
                <p>Contact with us now</p>
                <h2>Let's Collaborate With Us!</h2>
              </div>
              <div className="po-final-contact-head po-final-contact-head-right">
                <div className="po-final-contact-meta">
                  <a href="mailto:info@prestigeone.ae">Email<br/>info@prestigeone.ae</a>
                  <a href="tel:80077378443">Hotline<br/>800 PRESTIGE (77378443)</a>
                </div>
              </div>
            </div>

            <div className="row g-0">
              <div className="col-12 col-lg-6">
                <div className="po-final-contact-form-wrap">
                  <FinalContactForm />
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <div className="po-final-contact-map">
                  <DubaiDestinationsMap />
                </div>
              </div>
            </div>

            </div>


          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalContactSection;
