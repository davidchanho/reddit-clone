import React from "react";
import { Outlet } from "react-router";
import Navbar from "../../components/navbar";

function Template() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="py-10">
        <div className="max-w-3xl mx-auto sm:px-6 lg:max-w-full lg:px-8 lg:grid lg:grid-cols-12 lg:gap-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Template;
