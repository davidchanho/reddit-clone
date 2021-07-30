import React from "react";
import Brand from "./Brand";
import Menu from "./Menu";
import Nav from "./Nav";
import Profile from "./Profile";
import Search from "./Search";

function Navbar() {
  return (
    <header className="h-1/5 p-2 grid grid-cols-5 bg-white">
      <Brand />
      <Nav />
      <Search />
      <Menu />
      <Profile />
    </header>
  );
}

export default Navbar;
