import React, { useState } from "react";
import "./LoginPage.css";
import logo from "../../assets/newLogo.png";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBwiqMAi7rKdGhlDh9s5JFJ8b7VNbCy0BY",
  authDomain: "teencodehub-e5229.firebaseapp.com",
  databaseURL: "https://teencodehub-e5229-default-rtdb.firebaseio.com",
  projectId: "teencodehub-e5229",
  storageBucket: "teencodehub-e5229.appspot.com",
  messagingSenderId: "553839024992",
  appId: "1:553839024992:web:9330b5cace3f8a55761c05",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [mode, changeMode] = useState(false);

  const handleClick = () => {
    changeMode(!mode);
  };

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleUsernameChange = (e) => setUsername(e.target.value);

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        user.updateProfile({
          displayName: username,
        });
        set(ref(database, "users/" + user.uid), {
          username: username,
          email: email,
        });
        console.log("User signed up and data written:", user);
      })
      .catch((error) => {
        console.error("Error signing up:", error);
      });
  };

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("User logged in:", user);
      })
      .catch((error) => {
        console.error("Error logging in:", error);
      });
  };

  const handleGoogleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log("Google user logged in:", user);
      })
      .catch((error) => {
        console.error("Error with Google login:", error);
      });
  };

  const handleGitHubLogin = () => {
    const provider = new GithubAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log("GitHub user logged in:", user);
      })
      .catch((error) => {
        console.error("Error with GitHub login:", error);
      });
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
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
            <input
              style={{ display: mode ? "none" : "block" }}
              type="text"
              placeholder="Username"
              value={username}
              onChange={handleUsernameChange}
            />
            <y onClick={handleClick}>
              {mode
                ? "Don't have an account? Create one!"
                : "Already have an account? Login!"}
            </y>
            <button
              style={{ display: mode ? "none" : "block" }}
              onClick={handleSignUp}
            >
              Continue
            </button>
            <button
              style={{ display: mode ? "block" : "none" }}
              onClick={handleLogin}
            >
              Login
            </button>
            <button onClick={handleGoogleLogin}>Login with Google</button>
            <button onClick={handleGitHubLogin}>Login with GitHub</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
