import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../assets/newLogo.png";
import gsap from "gsap";

const Navbar = () => {
  const [active, setActive] = useState(false);

  function handleClick() {
    setActive(!active);
  }
  return (
    <div>
      <div className="rightHamButton">
        <div className="ham-menu">
          <div onClick={handleClick} className="ham-menu-btn">
            <div className={active ? "bar1 active" : "bar1"}></div>
            <div className={active ? "bar2 active" : "bar2"}></div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: active ? "0px" : "-1800px" }} className="menu">
        <div className="ham-items">
          <span className="ham-item">Home</span>
          <span className="ham-item">About</span>
          <span className="ham-item">Explore</span>
          <button className="loginBtn">LOG IN</button>
          <button className="signupBtn">Sign Up</button>
        </div>
      </div>
      <div className="main-navbar">
        <div className="navbar">
          <div className="left">
            <img height={"120px"} src={logo} alt="" />
            <div className="navigation">
              <span>Home</span>
              <span>About</span>
              <span>Explore</span>
            </div>
          </div>

          <div className="right">
            <button className="loginBtn">LOG IN</button>
            <button className="signupBtn">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
