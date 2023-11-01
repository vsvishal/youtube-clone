import React, { useEffect, useState } from "react";
import {
  AVATAR,
  HAMBURGER_ICON,
  LOGO,
  SEARCH_ICON,
  YOUTUBE_SEARCH_API,
} from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/redux/appSlice";
import { Link } from "react-router-dom";
import { cacheResults } from "../utils/redux/searchSlice";
import { getSearchSuggestion } from "../utils/getSearchSuggestion";
// import useSearchVideos from "../utils/hook/useSearchVideos";

function Head() {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const searchCache = useSelector((store) => store.search);

  // const searchSuggestion = useGetSearchSuggestion(searchQuery);
  // console.log("searchSuggestion ", searchSuggestion);
  // setSuggestions(searchSuggestion);

  useEffect(() => {
    getSuggestions();
  }, [searchQuery]);

  const getSuggestions = async () => {
    const suggestData = await getSearchSuggestion(searchQuery);
    setSuggestions(suggestData);
  };

  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  // make an API call after every key press
  // but if the diff between 2 api calls is <200ms
  // otherwise decline the api call
  // useEffect(() => {
  //   // Debouncing
  //   const timer = setTimeout(() => {
  //     if (searchCache[searchQuery]) {
  //       setSuggestions(searchCache[searchQuery]);
  //     } else {
  //       getSearchSuggestion();
  //     }
  //   }, 200);

  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, [searchQuery]);

  // const getSearchSuggestion = async () => {
  //   const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
  //   const json = await data.json();
  //   setSuggestions(json[1]);
  //   dispatch(
  //     cacheResults({
  //       [searchQuery]: json[1],
  //     })
  //   );
  // };

  // console.log("searchQuery ", searchQuery);
  // console.log("useSearchVideos(searchQuery)", useSearchVideos(searchQuery));
  // console.log(typeof useSearchVideos(searchQuery));

  return (
    <div className="flex justify-between py-3 px-6 m-2 shadow-md sticky top-0 z-20 bg-white font-Roboto">
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
      <div>
        <div className="flex">
          <input
            className="border border-gray-400 rounded-l-full w-[572px] h-10 pl-5 outline-blue-300"
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setShowSuggestion(false)}
          />
          <button className="border border-gray-400 rounded-r-full w-16 h-10 bg-gray-100">
            <img alt="search-icon" className="h-5 mx-auto" src={SEARCH_ICON} />
          </button>
        </div>

        {showSuggestion && (
          <div className="fixed bg-white w-[572px] rounded-lg shadow-lg border border-gray-100">
            <ul>
              {suggestions?.map((suggestion) => (
                <li
                  key={suggestion}
                  className="flex py-1 px-4 m-1 hover:bg-gray-100"
                >
                  <img
                    alt="search-icon"
                    className="mr-3 h-4"
                    src={SEARCH_ICON}
                  />
                  {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div>
        <img src={AVATAR} alt="avatar" className="w-12 h-12" />
      </div>
    </div>
  );
}

export default Head;
