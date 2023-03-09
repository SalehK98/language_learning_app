import React, { useState } from "react";
import Login from "../Login/Login";
import classes from "./Entry.module.css";
import Register from "../Register/Register";
import WelcomePage from "../Welcome/WelcomePage";

export default function Entry() {
  const [screen, setScreen] = useState("welcome");
  const [myClass, setMyClass] = useState(classes.entry_auth);
  const [buttonTxt, setButtonTxt] = useState("Register");
  return (
    <div className={classes.entry}>
      <div className={classes.entry_container}>
        <div className={classes.entry_overLay}>
          {screen === "welcome" ? (
            <div className={classes.entry_welcome}>
              <WelcomePage
                setScreen={setScreen}
                setMyClass={setMyClass}
                theClass={classes.entry_auth_change2}
              />
            </div>
          ) : (
            <div className={myClass}>
              <Login />
              <div className={classes.entry_auth_Or}>
                {buttonTxt === "Register" ? (
                  <>
                    <h1>Hi There</h1>
                    <p> Login here and Continue to have fun.</p>
                    <p>OR</p>
                    <p>
                      if you don't have an account yet. join us and start your
                      journey.
                    </p>
                  </>
                ) : (
                  <>
                    <h1>Start Fresh and Register Here</h1>
                    <p>join us and start your journey.</p>
                    <p>OR</p>
                    <p>
                      if you already have an account. Login here and Continue to
                      have fun.
                    </p>
                  </>
                )}
                <button
                  onClick={() => {
                    myClass === classes.entry_auth_change2
                      ? setMyClass(classes.entry_auth_change)
                      : myClass === classes.entry_auth
                      ? setMyClass(classes.entry_auth_change)
                      : setMyClass(classes.entry_auth);

                    buttonTxt === "Login"
                      ? setButtonTxt("Register")
                      : setButtonTxt("Login");
                  }}
                >
                  {buttonTxt}
                </button>
              </div>
              <Register />
              <div className={classes.entry_authVoid}>entry_authVoid</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
