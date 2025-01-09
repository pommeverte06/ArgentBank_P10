import React from "react";
import Banner from "../components/Banner/Banner";
import ShowSection from "../components/ShowSection/ShowSection";

import "./styles/home.css";

function Home() {
  return (
    <div className="home">
      <Banner />
      <ShowSection />
    </div>
  );
}

export default Home;
