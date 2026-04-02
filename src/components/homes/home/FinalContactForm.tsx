"use client";

const projectOptions = [
  "Sanctuary Hive by Prestige One",
  "Sanctuary by Prestige One",
  "Hilton Residences Dubai Maritime City",
  "Berkeley Square North",
  "Berkeley Square South",
  "Luxury Canal Residences",
  "Coastal Haven",
  "The Boulevard",
  "Parkway",
  "Place",
  "The One",
  "Seaside",
  "The Waterway",
  "Vista",
  "The Residence",
  "Luxe Villa",
  "Seascape Villa",
];

const FinalContactForm = () => {
  return (
    <form className="po-contact-form" onSubmit={(e) => e.preventDefault()}>
      <div className="po-contact-grid">
        <input type="text" placeholder="Full Name*" required />
        <input type="email" placeholder="Email Address*" required />
        <input type="tel" placeholder="Phone Number*" required />
        <select defaultValue="" required>
          <option value="" disabled>
            Project*
          </option>
          {projectOptions.map((project) => (
            <option key={project} value={project}>
              {project}
            </option>
          ))}
        </select>
      </div>
      <textarea placeholder="Message*" rows={5} required />
      <button type="submit" className="btn po-contact-submit-btn">
        <span>Submit Request</span>
        <span>Submit Request</span>
      </button>
    </form>
  );
};

export default FinalContactForm;
