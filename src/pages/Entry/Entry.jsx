import React, { useState } from "react";
import Login from "../Login/Login";
import classes from "./Entry.module.css";
import Register from "../Register/Register";
import WelcomePage from "../Welcome/WelcomePage";

export default function Entry() {
  const [ifLogin, setIfLogin] = useState(true);
  const [screen, setScreen] = useState("welcome");
  return (
    <div className={classes.entry}>
      <div className={classes.entry_container}>
        <div className={classes.entry_overLay}>
          {screen === "welcome" ? (
            <div className={classes.entry_welcome}>
              <WelcomePage />
            </div>
          ) : ifLogin ? (
            <div className={classes.entry_auth}>
              <Login />
            </div>
          ) : (
            <div className={classes.entry_auth}>
              <Register />
            </div>
          )}
          <button
            onClick={() => {
              setIfLogin(!ifLogin);
            }}
          >
            onClick
          </button>
        </div>
      </div>
    </div>
  );
}
