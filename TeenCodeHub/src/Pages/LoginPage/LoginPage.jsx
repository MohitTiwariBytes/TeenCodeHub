import React from "react";
import "./LoginPage.css";
import logo from "../../assets/newLogo.png";

const LoginPage = () => {
  console.log("22" + "22");
  return (
    <div className="mainLoginPage">
      <div className="LoginPageLeft">
        <div className="img">
          <img src={logo} alt="" />
        </div>
        <div className="textLoginPage">
          <h1>TeenCodeHub</h1>
        </div>
      </div>
      <div className="LoginPageRight">
        <div className="formParent">
          <div className="form">
            <h1>SignUp!</h1>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="text" placeholder="Username" />
            <button>Continue</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
