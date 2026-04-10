
import React from 'react';

const AboutArea = () => {
  return (
    <>
      <div className="about-us-wrapper light-mode">
        <div className="divider"></div>

        <div className="container">
          <div className="row g-4 g-xl-5 align-items-center">

            <div className="col-12 col-md-6">
              <div className="about-us-thumbnail po-about-media">
                <div className="po-project-media">
                    <video autoPlay muted loop playsInline preload="metadata">
                      <source src="/assets/images/v2/project-features-videos/prestigeone_corporate_video.mp4" type="video/mp4" />
                    </video> 
                </div>


                <div className="top-content">

                  <div className="clients-images">
                    <img src="/assets/images/v2/pages/5.jpg" alt="" />
                    <img src="/assets/images/v2/pages/4.jpg" alt="" />
                    <img src="/assets/images/v2/pages/3.jpg" alt="" />
                    <img src="/assets/images/v2/pages/2.jpg" alt="" />
                  </div>
                  <h6 className="mb-0">2566+ More Then Clients Global Reviews</h6>
                </div>
              </div>
            </div>


            <div className="col-12 col-md-6">
              <div className="about-us-text-content ps-md-4">
                <div className="section-heading">
                  <h2 className="mb-0">PRESTIGE ONE DEVELOPMENTS</h2>
                </div>
                <p className="mb-0">Prestige One Developments is a global force in real estate, known for shaping more than just homes—we create immersive living experiences.

With a focus on customer needs, community values, and visionary design, we are a leading Dubai-based developer committed to crafting high-end lifestyles for discerning buyers. Each Prestige One project reflects a deep understanding of experiential living, from striking architecture and elegant interiors to carefully curated amenities, all designed to enrich the lives of our residents and the communities they call home. </p>
 

                <div>
                  <a href="#" className="btn btn-primary mt-1"><span>CONTACT US</span><span>CONTACT US</span></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider"></div>
      </div>
    </>
  );
};

export default AboutArea;