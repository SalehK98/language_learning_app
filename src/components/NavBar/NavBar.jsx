import { Button } from "@mui/material";
import React, { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import classes from "./NavBar.module.css";
import { MyLoginContext } from "../LoginContext/LoginContext";
import { logOut } from "../../database/firebase.mjs";

export default function NavBar() {
  const navigate = useNavigate();
  const { isLogged, setIsLogged, user, setUser } = useContext(MyLoginContext);

  return (
    <nav>
      <div>logo</div>
      {/* <div>
        <ul></ul>
      </div> */}
      <div>
        {isLogged ? (
          <>
            <Button
              variant="outlined"
              onClick={() => {
                navigate("dashBoard");
              }}
            >
              dashBoard
            </Button>
            <Button
              variant="outlined"
              onClick={() => {
                navigate("dashBoard/myCoursesPage");
              }}
            >
              My Course
            </Button>
            <Button
              variant="outlined"
              onClick={() => {
                navigate("dashBoard");
              }}
            >
              browse
            </Button>
            <Button
              variant="outlined"
              onClick={() => {
                navigate("translate");
              }}
            >
              translate
            </Button>
            <Button
              variant="outlined"
              onClick={() => {
                // navigate("translate");
              }}
            >
              connect
            </Button>
            <Button
              variant="outlined"
              onClick={() => {
                logOut(setIsLogged, setUser);
                navigate("login");
              }}
            >
              logout
            </Button>
          </>
        ) : (
          <>
            <Button
              variant="outlined"
              onClick={() => {
                navigate("login");
              }}
            >
              Login
            </Button>
            <Button
              variant="outlined"
              onClick={() => {
                navigate("register");
              }}
            >
              Register
            </Button>
          </>
        )}
      </div>
    </nav>
  );
}
