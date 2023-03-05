import React from "react";
import classes from "./WelcomePage.module.css";
import source from "../../assets/images/background2.png";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export default function WelcomePage() {
  let navigate = useNavigate();
  return (
    <div className={classes.welcome}>
      <div className={classes.welcome_container}>
        <div className={classes.welcome_img}>
          <img src={source} />
        </div>
        <div className={classes.welcome_content}>
          <h1>
            Open More Doors, <br /> Connect to New People. <br />
            All by Learning a New Language
          </h1>
          <Button
            variant="contained"
            style={{ backgroundColor: "#3e69a4" }}
            onClick={() => {
              navigate("register");
            }}
          >
            Start Learning
          </Button>
        </div>
      </div>
    </div>
  );
}
