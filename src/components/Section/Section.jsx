import React from "react";

function Section({ icon, title, description }) {
  return (
    <div className="section">
      <img src={icon} alt={`${title} icon`} className="section-icon" />
      <h3 className="section-title">{title}</h3>
      <p className="section-description">{description}</p>
    </div>
  );
}

export default Section;
