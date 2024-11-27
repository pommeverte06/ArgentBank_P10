import React from "react";
import bankTree from "../../assets/img/bank-tree.jpeg"; 
import "./banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <img src={bankTree} alt="photo d'une plante verte" className="banner-image" />
      <div className="banner-content">
        <p className="banner-subtitle">
          No fees.  
        </p>
        <p className="banner-subtitle">
        No minimum deposit. 
        </p>
        <p className="banner-subtitle">
       High interest rates.
        </p>
        <p className="banner-txt">
          Open a savings account with Argent Bank today!
        </p>
      </div>
    </div>
  );
};

export default Banner;
