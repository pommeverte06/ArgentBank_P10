import React from "react";
import Banner from "../components/Banner/Banner";
import ShowSection from "../components/ShowSection/ShowSection";
import Footer from "../components/Footer/Footer";


import "./styles/home.css"; 

const Home = () => {
    return (
        <div className="home">
            <Banner />
            <ShowSection />
            <Footer />
        </div>
    );
};

export default Home;
