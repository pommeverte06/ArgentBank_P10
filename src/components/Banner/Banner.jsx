import React from "react";
import "./banner.css";

const Banner = () => {
  return (
    <div className="hero">
      <div className="hero-image"></div>
      <div className="banner-content">
        <p className="banner-subtitle">No fees.</p>
        <p className="banner-subtitle">No minimum deposit.</p>
        <p className="banner-subtitle">High interest rates.</p>
        <p className="banner-txt">
          Open a savings account with Argent Bank today!
        </p>
      </div>
    </div>
  );
};

export default Banner;
