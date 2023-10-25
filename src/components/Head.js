import React from "react";
import { AVATAR, HAMBURGER_ICON, LOGO, SEARCH_ICON } from "../utils/constants";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/redux/appSlice";
import { Link } from "react-router-dom";

function Head() {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="flex justify-between py-3 px-6 m-2 shadow-md sticky top-0 z-20 bg-white">
      <div className="flex col-span-1">
        <img
          src={HAMBURGER_ICON}
          alt="hamburger icon"
          className="w-12 h-8 mx-2 cursor-pointer"
          onClick={toggleMenuHandler}
        />
        <Link to={"/"}>
          <img src={LOGO} alt="logo" className="w-28 h-7" />
        </Link>
      </div>
      <div className="flex">
        <input
          className="border border-gray-400 rounded-l-full w-[572px] h-10 pl-5 outline-blue-300"
          type="text"
          placeholder="Search"
        />
        <button className="border border-gray-400 rounded-r-full w-16 h-10 bg-gray-100">
          <img alt="search-icon" className="h-5 mx-auto" src={SEARCH_ICON} />
        </button>
      </div>
      <div>
        <img src={AVATAR} alt="avatar" className="w-12 h-12" />
      </div>
    </div>
  );
}

export default Head;
