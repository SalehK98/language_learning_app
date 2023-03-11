import { TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import React, { useState, useContext, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Register.module.css";
import { MyLoginContext } from "../../components/LoginContext/LoginContext";
import { inputHandler } from "./RegisterHelper";

export default function Register() {
  const [data, setIsData] = useState();
  const [emailTextFieldTypeRequired, setEmailTextFieldTypeRequired] =
    useState(true);
  const [passwordTextFieldTypeRequired, setPasswordTextFieldTypeRequired] =
    useState(true);
  const [emailHelperText, setEmailHelperText] = useState();
  const [passwordHelperText, setPasswordHelperText] = useState();
  const [nameRequired, setNameRequired] = useState(true);
  const [nameHelperText, setNameHelperText] = useState();
  const [loading, setLoading] = useState(false);
  const [variant, setVariant] = useState("contained");

  const [logged, setLogged] = useState(false);
  useEffect(() => {
    if (logged) {
      navigate("/dashBoard");
    }
  });

  const myUser = useRef({});

  const navigate = useNavigate();
  // const { isLogged, setIsLogged, user, setUser } = useContext(MyLoginContext);

  const { isLogged, user, userId } = JSON.parse(
    localStorage.getItem("loginInfo")
  );

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
      {/* {isLogged ? (
        navigate("/dashBoard")
      ) : ( */}
      <div className={classes.register}>
        <div className={classes.register_container}>
          <h1>Register</h1>
          <form
            className={classes.register_form}
            onSubmit={(event) => {
              event.preventDefault();
            }}
          >
            <label>
              <TextField
                required={nameRequired}
                error={!nameRequired}
                id="outlined-required-register-name"
                label="name"
                size="small"
                helperText={nameHelperText}
                type="text"
                onChange={(event) => {
                  myUser.current = {
                    ...myUser.current,
                    ...{ name: event.target.value },
                  };
                }}
                onFocus={(event) => {
                  setNameHelperText("");
                  setNameRequired(true);
                }}
                sx={CssTextField}
              />
            </label>
            <label>
              <TextField
                required={emailTextFieldTypeRequired}
                error={!emailTextFieldTypeRequired}
                id="outlined-required-register-email"
                label="email"
                size="small"
                helperText={emailHelperText}
                type="email"
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
                sx={CssTextField}
              />
            </label>
            <label>
              <TextField
                required={passwordTextFieldTypeRequired}
                error={!passwordTextFieldTypeRequired}
                id="outlined-required-register-password"
                label="password"
                size="small"
                helperText={passwordHelperText}
                type="password"
                onChange={(event) => {
                  myUser.current = {
                    ...myUser.current,
                    ...{ password: event.target.value },
                  };
                }}
                onFocus={(event) => {
                  setEmailTextFieldTypeRequired(true);
                  setPasswordTextFieldTypeRequired(true);
                  setEmailHelperText("");
                  setPasswordHelperText("");
                }}
                sx={CssTextField}
              />
            </label>
            {/* <label>
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
              </label> */}
            <LoadingButton
              loading={loading}
              variant={variant}
              disabled={loading}
              onClick={() => {
                console.log("myUSer from register ", myUser.current);
                inputHandler(
                  myUser.current,
                  setIsData,
                  setPasswordTextFieldTypeRequired,
                  setEmailTextFieldTypeRequired,
                  setEmailHelperText,
                  setPasswordHelperText,
                  setVariant,
                  setLoading,
                  setLogged,
                  setNameRequired,
                  setNameHelperText
                );
              }}
            >
              Sign up
            </LoadingButton>
          </form>
        </div>
      </div>
      {/* )} */}
    </>
  );
}
