import React from "react";
import "./LoginPage.css";
import logo from "../../assets/newLogo.png";

const LoginPage = () => {
  return (
    <div className="mainLoginPage">
      <div className="left">
        <img src={logo} alt="" />
      </div>
      <div className="right"></div>
    </div>
  );
};

export default LoginPage;
