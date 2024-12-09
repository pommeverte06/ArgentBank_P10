import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Settings = () => {
  return (
    <>
      <Header />
      <main className="main bg-dark">
        <div className="settings">
          <h1>Settings Page</h1>
          <p>Here you can edit your user information.</p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Settings;
