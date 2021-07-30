import React from "react";
import { Outlet } from "react-router";
import Navbar from "../../components/navbar";

function Template() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Template;
