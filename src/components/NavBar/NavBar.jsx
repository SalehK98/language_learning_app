import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import classes from "./NavBar.module.css";

export default function NavBar() {
  const navigate = useNavigate();

  return (
    <nav>
      <div>logo</div>
      <div>
        <ul></ul>
      </div>
      <div>
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
        <Button
          variant="outlined"
          onClick={() => {
            navigate("exercise");
          }}
        >
          exercise
        </Button>
      </div>
    </nav>
  );
}
