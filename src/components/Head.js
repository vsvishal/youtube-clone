import React, { useEffect, useState } from "react";
import { AVATAR, HAMBURGER_ICON, LOGO, SEARCH_ICON } from "../utils/constants";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/redux/appSlice";
import { Link } from "react-router-dom";
import { getSearchSuggestion } from "../utils/getSearchSuggestion";
import SuggestionList from "./SuggestionList";

function Head() {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  // const searchCache = useSelector((store) => store.search);

  // const searchSuggestion = useGetSearchSuggestion(searchQuery);
  // console.log("searchSuggestion ", searchSuggestion);
  // setSuggestions(searchSuggestion);

  useEffect(() => {
    const getSuggestions = async () => {
      const suggestData = await getSearchSuggestion(searchQuery);
      setSuggestions(suggestData);
    };
    getSuggestions();
  }, [searchQuery]);

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

  const addSuggestionToSearch = (e) => {
    console.log("Suggestion ", e);
  };

  return (
    <div className="flex justify-between py-3 px-2 md:px-6 m-1 shadow-md sticky top-0 z-20 bg-white font-Roboto">
      <div className="flex col-span-1">
        <img
          src={HAMBURGER_ICON}
          alt="hamburger icon"
          className="hidden md:block w-12 h-8 mx-2 cursor-pointer"
          onClick={toggleMenuHandler}
        />
        <Link to={"/"}>
          <img src={LOGO} alt="logo" className="w-14 md:w-28 h-5 md:h-7" />
        </Link>
      </div>
      <div>
        <div className="flex">
          <input
            className="border border-gray-400 rounded-l-full text-sm md:text-base w-40 md:w-[572px] h-7 md:h-10 pl-5 outline-blue-300"
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setShowSuggestion(false)}
          />
          <button className="border border-gray-400 rounded-r-full w-8 md:w-16 h-7 md:h-10 bg-gray-100">
            <img
              alt="search-icon"
              className="h-3 md:h-5 mx-auto"
              src={SEARCH_ICON}
            />
          </button>
        </div>

        {showSuggestion && (
          <div className="fixed bg-white w-48 md:w-[572px] rounded-lg text-xs md:text-sm shadow-lg border border-gray-100">
            <ul>
              {suggestions?.map((suggestion) => (
                <SuggestionList suggestion={suggestion} />
              ))}
            </ul>
          </div>
        )}
      </div>
      <div>
        <img src={AVATAR} alt="avatar" className="w-7 md:w-12 h-7 md:h-12" />
      </div>
    </div>
  );
}

export default Head;
