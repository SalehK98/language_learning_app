import { Button } from "@mui/material";
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Register.module.css";
import { signUp } from "../../database/firebase.mjs";
import { MyLoginContext } from "../../components/LoginContext/LoginContext";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newUser, steNewUser] = useState({});
  const [data, setIsData] = useState();

  const navigate = useNavigate();
  // const { isLogged, setIsLogged, user, setUser } = useContext(MyLoginContext);

  const { isLogged, user, userId } = JSON.parse(
    localStorage.getItem("loginInfo")
  );

  return (
    <>
      {isLogged ? (
        navigate("/dashBoard")
      ) : (
        <div className={classes.register}>
          <div className={classes.register_container}>
            <h1>Register</h1>
            <form
              onSubmit={(event) => {
                event.preventDefault();
              }}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <label>
                Email{" "}
                <input
                  type="email"
                  onChange={(event) => {
                    setEmail(event.target.value);
                    steNewUser({
                      ...newUser,
                      ...{ email: event.target.value },
                    });
                  }}
                />
              </label>
              <label>
                Password{" "}
                <input
                  type="password"
                  onChange={(event) => {
                    setPassword(event.target.value);
                    steNewUser({
                      ...newUser,
                      ...{ password: event.target.value },
                    });
                  }}
                />
              </label>
              <label>
                name{" "}
                <input
                  type="text"
                  onChange={(event) => {
                    // setPassword(event.target.value);
                    steNewUser({
                      ...newUser,
                      ...{ name: event.target.value },
                    });
                  }}
                />
              </label>
              <label>
                phone number{" "}
                <input
                  type="tel"
                  onChange={(event) => {
                    // setPassword(event.target.value);
                    steNewUser({
                      ...newUser,
                      ...{ phoneNumber: event.target.value },
                    });
                  }}
                />
              </label>
              <Button
                variant="contained"
                onClick={() => {
                  console.log("newuser from register ", newUser);
                  signUp(
                    email,
                    password,
                    // setIsLogged,
                    // setUser,
                    // isLogged,
                    newUser,
                    setIsData
                  );
                  // console.log("cb1", cb);
                  // cb ? navigate("dashBoard") : alert("sth is wrong");
                }}
              >
                Sign up
              </Button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
