import React from "react";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import ShowSection from "../components/ShowSection/ShowSection";
import Footer from "../components/Footer/Footer";

const Home = () => {
    return (
        <div className="home">
            <Header />
            <Banner />
            <ShowSection />
            <Footer />
        </div>
    );
};

export default Home;
