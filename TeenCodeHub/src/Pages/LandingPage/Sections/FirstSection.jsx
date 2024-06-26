import React, { useEffect } from "react";
import gsap from "gsap";
import "./FirstSection.css";

const FirstSection = () => {
  useEffect(() => {
    gsap.from(".text h1", {
      y: 1800, // // Starting opacity
      duration: 0.8,
      stagger: 0.1, // Animation duration
      animation: "power4.inOut", // Easing function
    });
    gsap.to(".text h1", {
      y: 0, // // Starting opacity
      duration: 0.8,
      stagger: 0.1, // Animation duration
      animation: "power4.inOut", // Easing function
    });
  }, []);

  return (
    <div className="first-section">
      <div className="text">
        <h1>
          A better place built by a <z>Teenager</z> for a <z>Teenager,</z>
        </h1>
        <h1> Where you can collaborate with developers around the world!</h1>
      </div>

      <button
        onClick={function () {
          window.location.replace("/signup");
        }}
        id="lets-go-btn"
      >
        Let's Go!
      </button>
    </div>
  );
};

export default FirstSection;
