import React from "react";
import { Outlet } from "react-router-dom";
// import LoginContext from "../LoginContext/LoginContext";
import NavBar from "../NavBar/NavBar";

localStorage.setItem(
  "loginInfo",
  JSON.stringify({ isLogged: false, user: "", userId: "" })
);

export default function LayoutWrapper() {
  return (
    // <LoginContext>
    <>
      <NavBar />
      <Outlet />
    </>
    // </LoginContext>
  );
}
