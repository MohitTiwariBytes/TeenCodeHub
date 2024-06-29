import React, { useState } from "react";
import "./LoginPage.css";
import logo from "../../assets/newLogo.png";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [mode, changeMode] = useState(false);

  const handleClick = () => {
    changeMode(!mode);
  };

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
            <h1>{mode ? "Login" : "Sign Up!"}</h1>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input
              style={{ display: mode ? "none" : "block" }}
              type="text"
              placeholder="Username"
            />
            <y onClick={handleClick}>
              {mode
                ? "Don't have an account ? Create one!"
                : "Already have an account ? Login!"}
            </y>
            <button style={{ display: mode ? "none" : "block" }}>
              Continue
            </button>
            <button style={{ display: mode ? "block" : "none" }}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
