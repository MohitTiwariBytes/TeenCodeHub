import React from "react";
import "./LandingPage.css";
import Navbar from "../../Components/Navbar";
import FirstSection from "./Sections/FirstSection";

const LandingPage = () => {
  return (
    <div className="main-landing-page">
      <div className="landingPage">
        <Navbar></Navbar>
        <FirstSection></FirstSection>
      </div>
    </div>
  );
};

export default LandingPage;
