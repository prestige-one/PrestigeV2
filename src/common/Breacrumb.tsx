
import Link from 'next/link';
import { title } from 'node:process';
import React from 'react';

const Breacrumb = ({title, subtitle}: any) => {
  return (
    <>
         <div className="breadcrumb-wrapper bg-img jarallax bg-overlay" data-jarallax="" data-speed="0.6"
      style={{backgroundImage: "url(/assets/img/v2/buliding-map-1.webp)", backgroundAttachment: "fixed"}}>
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