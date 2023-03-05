import { Button } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Register.module.css";
import signUp from "../../SignUp.mjs";

export default function Register() {
  const [didWork, setDidWork] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <div className={classes.register}>
      <div className={classes.register_container}>
        <h1>Register</h1>
        <div className={classes.register_content}>
          <h1>few clicks away from learning</h1>
        </div>
        <div className={classes.register_registerCard}>
          <form
            onSubmit={(event) => {
              event.preventDefault();
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
                signUp(email, password, setDidWork);
              }}
            >
              Sign up
            </Button>
          </form>
        </div>
      </div>
      {didWork ? navigate("/home") : <></>}
    </div>
  );
}
