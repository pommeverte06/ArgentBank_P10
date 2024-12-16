import React from "react";
import Footer from "../components/Footer/Footer";
import EditUserName from "../components/EditUserName/EditUserName";

const Settings = () => {
  return (
    <>
      <main className="main bg-dark">
        <EditUserName />
      </main>
      <Footer />
    </>
  );
};

export default Settings;
