import React from "react";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";
import Head from "./Head";
import { Outlet } from "react-router-dom";
import useGetChannels from "../utils/hook/useGetChannels";

function Body() {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  // useGetChannels();
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
