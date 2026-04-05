"use client";

import { COMPANY_CONTACT, COMPANY_OFFICES } from "@/data/company-contact";
import React from "react";

const ContactArea = () => {
  return (
    <div className="po-contact-page-details">
 
      <div className="container py-5">
        <div className="row g-4 justify-content-center po-contact-page-cards-row">
          <div className="col-12 col-md-6 col-lg-4 d-flex">
            <div className="contact-info-card po-contact-page-card w-100">
              <div className="icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden>
                  <g clipPath="url(#poContactClipPhone)">
                    <path
                      d="M39.8523 29.6017C39.5773 28.0233 38.2257 26.765 36.564 26.5433L27.349 25.31C25.6773 25.0817 24.0207 25.97 23.329 27.46C23.1523 27.84 23.004 28.235 22.884 28.6417C20.3023 27.565 17.9857 26.01 15.9857 24.0117C13.9857 22.0133 12.4323 19.6967 11.3557 17.115C11.764 16.9933 12.1573 16.845 12.5373 16.6667C14.0273 15.9733 14.909 14.3217 14.6857 12.6483L13.4523 3.435C13.2307 1.77333 11.974 0.42 10.3657 0.141667C9.78067 0.045 9.29401 0 8.82901 0C5.80401 0 2.94234 1.59833 1.36067 4.17333C-0.349328 6.96 -0.110994 10.5267 0.285672 13.3217C1.18734 19.6517 4.43901 26.0167 9.20901 30.7867C12.754 34.3317 17.1357 36.9883 21.879 38.4683C24.294 39.2233 27.3173 40.01 30.2273 40.01C32.4057 40.01 34.5207 39.5683 36.269 38.3433C38.6057 36.7033 39.999 34.0217 39.999 31.1667C39.999 30.7017 39.954 30.2133 39.8523 29.6017Z"
                      fill="#ffffff"
                    />
                  </g>
                  <defs>
                    <clipPath id="poContactClipPhone">
                      <rect width="40" height="40" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>

              <p className="mb-0 po-contact-page-card-label">Phone number</p>
              <h4 className="po-contact-page-card-value">
                <a href={COMPANY_CONTACT.phoneTel} className="text-decoration-none">
                  {COMPANY_CONTACT.phoneDisplay}
                </a>
              </h4>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4 d-flex">
            <div className="contact-info-card po-contact-page-card w-100">
              <div className="icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden>
                  <path
                    d="M32.5 4.16602H19.1667C15.9117 4.16602 13.1633 6.26268 12.1267 9.16602H20.8333C25.8867 9.16602 30 13.2777 30 18.3327V24.166H32.5C36.635 24.166 40 20.801 40 16.666V11.666C40 7.53102 36.635 4.16602 32.5 4.16602ZM28.3333 18.3327C28.3333 14.1977 24.9683 10.8327 20.8333 10.8327H7.5C3.365 10.8327 0 14.1977 0 18.3327V23.3327C0 27.4677 3.365 30.8327 7.5 30.8327H8.33333V34.9993C8.33333 35.336 8.53667 35.641 8.84833 35.7693C8.95167 35.8127 9.06 35.8327 9.16667 35.8327C9.38333 35.8327 9.59667 35.7477 9.75667 35.5893L14.5133 30.8327H20.835C24.97 30.8327 28.335 27.4677 28.335 23.3327V19.9993L28.3333 18.3327Z"
                    fill="#ffffff"
                  />
                </svg>
              </div>

              <p className="mb-0 po-contact-page-card-label">Email address</p>
              <h4 className="po-contact-page-card-value">
                <a href={COMPANY_CONTACT.emailMailto} className="text-decoration-none">
                  {COMPANY_CONTACT.email}
                </a>
              </h4>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4 d-flex">
            <div className="contact-info-card po-contact-page-card w-100">
              <div className="icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden>
                  <path
                    d="M20.0026 0C12.1909 0 5.83594 6.355 5.83594 14.1667C5.83594 27.8633 18.9009 39.3167 19.4576 39.7967C19.6143 39.9317 19.8093 40 20.0026 40C20.1959 40 20.3909 39.9317 20.5476 39.7967C21.1043 39.315 34.1693 27.8617 34.1693 14.1667C34.1693 6.355 27.8143 0 20.0026 0ZM20.0026 21.6667C15.8609 21.6667 12.5026 18.3083 12.5026 14.1667C12.5026 10.025 15.8609 6.66667 20.0026 6.66667C24.1443 6.66667 27.5026 10.025 27.5026 14.1667C27.5026 18.3083 24.1443 21.6667 20.0026 21.6667Z"
                    fill="#ffffff"
                  />
                </svg>
              </div>

              <p className="mb-0 po-contact-page-card-label">Offices</p>
              <h4 className="po-contact-page-card-value po-contact-page-offices-value">
                {COMPANY_OFFICES.map((office, i) => (
                  <React.Fragment key={office.mapUrl}>
                    {i > 0 ? (
                      <>
                        <br />
                        <br />
                      </>
                    ) : null}
                    <a
                      href={office.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none"
                    >
                      {office.label}
                    </a>
                  </React.Fragment>
                ))}
              </h4>
            </div>
          </div>
        </div>
      </div>
 
    </div>
  );
};

export default ContactArea;
