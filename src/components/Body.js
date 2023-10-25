import React from "react";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";
import Head from "./Head";
import { Outlet } from "react-router-dom";

function Body() {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  console.log("isMenuOpen", isMenuOpen);
  return (
    <>
      <Head />
      <div className="flex">
        {isMenuOpen && <Sidebar />}
        <Outlet />
      </div>
    </>
  );
}

export default Body;
