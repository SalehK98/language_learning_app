import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

export default function LayoutWrapper() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}
