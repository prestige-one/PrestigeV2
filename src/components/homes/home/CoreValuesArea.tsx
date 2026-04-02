"use client";

const coreValues = [
  {
    title: "Quality",
    icon: "/assets/img/v2/icons/svg-image-18.svg",
    description:
      "Prestige One Developments is committed to delivering only the highest standard in all its constructions, paying meticulous attention to every detail to ensure a superior quality of life for its residents.",
  },
  {
    title: "Innovation",
    icon: "/assets/img/v2/icons/svg-image-19.svg",
    description:
      "Prestige One Developments leads in architectural innovation, blending advanced technologies and visionary design to create distinctive landmarks, all driven by a commitment to excellence and core values.",
  },
  {
    title: "Sustainability",
    icon: "/assets/img/v2/icons/svg-image-20.svg",
    description:
      "Recognizing the critical importance of environmental responsibility, Prestige One Developments is dedicated to incorporating sustainable and energy-efficient practices in its projects.",
  },
  {
    title: "Integrity",
    icon: "/assets/img/v2/icons/svg-image-30.svg",
    description:
      "Prestige One Developments upholds a high standard of professionalism, transparency, and ethical practices in all its operations.",
  },
];

const CoreValuesArea = () => {
  return (
    <section className="po-core-values-section">
      <div className="container">
        <div className="po-core-values-heading text-center">
          <p>Our Core Values</p>
          <h2>Built On Trust, Excellence, And Vision</h2>
        </div>

        <div className="row g-4">
          {coreValues.map((value) => (
            <div className="col-12 col-md-6 col-xl-3" key={value.title}>
              <article className="po-core-card po-core-card-hover">
                <div className="po-core-card-top">
                  <span className="po-core-icon-wrap">
                    <img src={value.icon} alt={`${value.title} icon`} />
                  </span>
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValuesArea;
