import React, { useState } from "react";
import Login from "../Login/Login";
import classes from "./Entry.module.css";
import Register from "../Register/Register";
import WelcomePage from "../Welcome/WelcomePage";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

export default function Entry() {
  const [screen, setScreen] = useState("welcome");
  const [myClass, setMyClass] = useState(classes.entry_auth);
  const [buttonTxt, setButtonTxt] = useState("Register");
  const [icon, setIcon] = useState("Left");
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
                    <div>
                      <h1>Hi There</h1>
                      <p> Login here and Continue to have fun.</p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-evenly",
                        width: "100%",
                      }}
                    >
                      <hr />
                      <p>OR</p>
                      <hr />
                    </div>
                    <div>
                      <p>
                        if you don't have an account yet. join us and start your
                        journey.
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <h1>Start Fresh and Register Here</h1>
                      <p>join us and start your journey.</p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-evenly",
                        width: "100%",
                      }}
                    >
                      <hr />
                      <p>OR</p>
                      <hr />
                    </div>
                    <div>
                      <p>
                        if you already have an account. Login here and Continue
                        to have fun.
                      </p>
                    </div>
                  </>
                )}
                <button
                  className={classes.entry_change_button}
                  onClick={() => {
                    myClass === classes.entry_auth_change2
                      ? setMyClass(classes.entry_auth_change)
                      : myClass === classes.entry_auth
                      ? setMyClass(classes.entry_auth_change)
                      : setMyClass(classes.entry_auth);

                    buttonTxt === "Login"
                      ? setButtonTxt("Register")
                      : setButtonTxt("Login");

                    icon === "Left" ? setIcon("Right") : setIcon("Left");
                  }}
                >
                  {icon === "Right" ? (
                    <AiOutlineArrowLeft style={{ marginRight: "20px" }} />
                  ) : (
                    <></>
                  )}
                  {buttonTxt}
                  {icon === "Left" ? (
                    <AiOutlineArrowRight style={{ marginLeft: "20px" }} />
                  ) : (
                    <></>
                  )}
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
