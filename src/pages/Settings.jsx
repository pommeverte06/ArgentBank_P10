import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import EditUserName from "../components/EditUserName/EditUserName";

const Settings = () => {
  return (
    <>
      <Header />
      <main className="main bg-dark">
        <EditUserName />
      </main>
      <Footer />
    </>
  );
};

export default Settings;
