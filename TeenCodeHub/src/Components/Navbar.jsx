import React from "react";
import "./Navbar.css";
import logo from "../assets/newLogo.png";

const Navbar = () => {
  return (
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
  );
};

export default Navbar;
