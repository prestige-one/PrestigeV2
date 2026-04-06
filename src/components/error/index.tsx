import React from "react";
import Link from "next/link";
import PageHero from "@/common/PageHero";
import SiteHeader from "@/layouts/SiteHeader";
import SiteFooterBlock from "@/layouts/SiteFooterBlock";

const ErrorArea = () => {
  return (
    <>
      <SiteHeader />
      <PageHero
        kicker="Prestige One Developments"
        title="Page not found"
        description="The link you followed may be broken, or the page may have been removed."
      />
      <div className="error-content text-center">
        <div className="divider"></div>

        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="d-flex justify-content-center">
                <img className="pb-2 dark-mode-404" src="/assets/img/core-img/404.png" alt="" />
                <img className="pb-2 light-mode-404" src="/assets/img/core-img/404-light.png" alt="" />
              </div>
              <div className="section-heading mt-5">
                <Link href="/" className="btn btn-primary mt-4">
                  <span>BACK TO HOME</span>
                  <span>BACK TO HOME</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="divider"></div>
      </div>
      <SiteFooterBlock />
    </>
  );
};

export default ErrorArea;
