import { Button } from "@mui/material";
import React, { useContext, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import classes from "./NavBar.module.css";
import { MyLoginContext } from "../LoginContext/LoginContext";
import { logOut } from "../../database/firebase.mjs";

export default function NavBar() {
  const navigate = useNavigate();
  // const { isLogged, setIsLogged, user, setUser } = useContext(MyLoginContext);
  const [isData, setIsData] = useState();
  const [color, setColor] = useState(classes.nav1);

  const { isLogged, user, userId } = JSON.parse(
    localStorage.getItem("loginInfo")
  );

  const onScroll = () => {
    if (window.scrollY >= 1) {
      console.log("scrolled");
      setColor(classes.nav2);
    } else {
      console.log("not scrolled");
      setColor(classes.nav1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
  });

  return (
    <nav className={color}>
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
                navigate("courses");
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
                navigate("login");
                logOut(setIsData);
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
