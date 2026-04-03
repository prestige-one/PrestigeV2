import React from "react";

type BreacrumbProps = {
  title: string;
  subtitle?: string;
};

const Breacrumb = ({ title }: BreacrumbProps) => {
  return (
    <>
   <div className="breadcrumb-wrapper bg-img jarallax bg-overlay" data-jarallax="" data-speed="0.6"
      style={{backgroundImage: "url(/assets/img/v2/buliding-map-1-1.webp)"}}>
      <div className="container h-100">
         <div className="breadcrumb-content h-100">
            <h2 className="wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="700ms">{title}</h2>
         </div>
      </div>
   </div>
    </>
  );
};

export default Breacrumb;
