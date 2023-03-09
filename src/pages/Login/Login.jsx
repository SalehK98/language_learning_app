import { Button, Input } from "@mui/material";
import React, { useState, useEffect, useContext } from "react";
import classes from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import { login } from "../../database/firebase.mjs";
import { MyLoginContext } from "../../components/LoginContext/LoginContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isData, setIsData] = useState("");
  const navigate = useNavigate();
  const { isLogged, setIsLogged, user, setUser } = useContext(MyLoginContext);

  function loginHandler() {
    login(email, password, setIsLogged, setUser, isLogged, user, setIsData);
  }

  console.log("isLogged from login", isLogged);
  let data = JSON.parse(localStorage.getItem("loginInfo"));
  // console.log(data);

  return (
    <>
      {data.isLogged ? (
        navigate("/dashBoard")
      ) : (
        <div className={classes.login}>
          <div className={classes.login_container}>
            <h1>Login</h1>
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <label>
                Email{" "}
                <Input
                  variant="outlined"
                  // color="white"
                  type="email"
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                  // style={{ backgroundColor: "white" }}
                />
              </label>
              <label>
                Password{" "}
                <input
                  type="password"
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                />
              </label>
              <Button variant="contained" onClick={loginHandler}>
                Login
              </Button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
