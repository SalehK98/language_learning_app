import { Button, Input, TextField } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import React, { useState, useEffect, useContext, useRef } from "react";
import classes from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import { login } from "../../database/firebase.mjs";
import { MyLoginContext } from "../../components/LoginContext/LoginContext";
import { inputHandler } from "./LoginHelper";
import { LoadingButton } from "@mui/lab";

export default function Login() {
  const [isData, setIsData] = useState("");
  const navigate = useNavigate();
  // const { isLogged, setIsLogged, user, setUser } = useContext(MyLoginContext);
  const [logged, setLogged] = useState(false);

  // useEffect(() => {
  //   navigate("/dashBoard");
  // }, [logged]);

  useEffect(() => {
    if (logged) {
      navigate("/dashBoard");
    }
  });

  const [emailTextFieldTypeRequired, setEmailTextFieldTypeRequired] =
    useState(true);
  const [passwordTextFieldTypeRequired, setPasswordTextFieldTypeRequired] =
    useState(true);
  const [emailHelperText, setEmailHelperText] = useState();
  const [passwordHelperText, setPasswordHelperText] = useState();
  const [loading, setLoading] = useState(false);
  const [variant, setVariant] = useState("contained");

  const myUser = useRef({});

  let data = JSON.parse(localStorage.getItem("loginInfo"));

  const CssTextField = {
    "& label.Mui-focused": {
      color: "#000",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#CBE4DE",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#CBE4DE",
      },
      "&:hover fieldset": {
        borderColor: "#CBE4DE",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#CBE4DE",
      },
    },
  };

  return (
    <>
      {/* {data.isLogged ? (
        navigate("/dashBoard")
      ) : ( */}
      <div className={classes.login}>
        <div className={classes.login_container}>
          <h1>Login</h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className={classes.login_form}
          >
            <label>
              <TextField
                required={emailTextFieldTypeRequired}
                error={!emailTextFieldTypeRequired}
                helperText={emailHelperText}
                id="outlined-required-login-email"
                label="Email"
                type="email"
                size="small"
                color="success"
                sx={CssTextField}
                onChange={(event) => {
                  myUser.current = {
                    ...myUser.current,
                    ...{ email: event.target.value },
                  };
                }}
                onFocus={(event) => {
                  setEmailHelperText("");
                  setPasswordHelperText("");
                  setEmailTextFieldTypeRequired(true);
                  setPasswordTextFieldTypeRequired(true);
                }}
              />
            </label>
            <label>
              <TextField
                required={passwordTextFieldTypeRequired}
                error={!passwordTextFieldTypeRequired}
                helperText={passwordHelperText}
                id="outlined-required-login-password"
                label="Password"
                size="small"
                sx={CssTextField}
                type="password"
                onChange={(event) => {
                  myUser.current = {
                    ...myUser.current,
                    ...{ password: event.target.value },
                  };
                }}
                onFocus={(event) => {
                  setEmailHelperText("");
                  setPasswordHelperText("");
                  setEmailTextFieldTypeRequired(true);
                  setPasswordTextFieldTypeRequired(true);
                }}
              />
            </label>
            <LoadingButton
              variant={variant}
              loading={loading}
              onClick={(event) => {
                inputHandler(
                  myUser.current,
                  setIsData,
                  setPasswordTextFieldTypeRequired,
                  setEmailTextFieldTypeRequired,
                  setEmailHelperText,
                  setPasswordHelperText,
                  setVariant,
                  setLoading,
                  setLogged
                );
              }}
            >
              Login
            </LoadingButton>
          </form>
        </div>
      </div>
      {/* )} */}
    </>
  );
}
