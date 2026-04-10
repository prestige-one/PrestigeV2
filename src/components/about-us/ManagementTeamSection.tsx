"use client";

import React from "react";

const members = [
  {
    name: "Sulaiman Saifi",
    role: "Vice Chairman",
    image: "/assets/images/v2/pages/Sulaiman_Saifi.webp",
  },
  {
    name: "Ajmal Saifi",
    role: "CEO",
    image: "/assets/images/v2/pages/Ajmal-CEO.webp",
  },
];

const ManagementTeamSection = () => {
  return (
    <section className="po-management-section">
      <div className="container">
        <div className="po-management-head">
          <p>Our Team</p>
          <h2>Meet The Management</h2>
        </div>

        <div className="po-management-grid">
          {members.map((member) => (
            <article className="po-management-card" key={member.name}>
              <div className="po-management-media">
                <img src={member.image} alt={member.name} />
              </div>
              <div className="po-management-meta">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ManagementTeamSection;

