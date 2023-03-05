import { Button } from "@mui/material";
import React, { useState } from "react";
import classes from "./Login.module.css";
import firebase from "../../firebase.mjs";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [isUser, setIsUser] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <div className={classes.login}>
      <div className={classes.login_container}>
        <h1>Login</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <label>
            Email{" "}
            <input
              type="email"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
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
          <Button
            variant="contained"
            onClick={() => {
              firebase(email, password, setIsUser);
            }}
          >
            Login
          </Button>
        </form>
      </div>
      {isUser ? navigate("/home") : <></>}
    </div>
  );
}
