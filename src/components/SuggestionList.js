import React from "react";
import { SEARCH_ICON } from "../utils/constants";

function SuggestionList({ suggestion, setSearchQuery }) {
  return (
    <div onClick={() => console.log("hello")}>
      <li
        className="flex py-1 px-2 md:px-4 m-1 hover:bg-gray-100 cursor-pointer"
        onMouseDown={(e) => {
          setSearchQuery("");
          setSearchQuery(e.target.innerText);
        }}
      >
        <img
          alt="search-icon"
          className="mr-2 md:mr-3 h-3 md:h-4"
          src={SEARCH_ICON}
        />
        {suggestion}
      </li>
    </div>
  );
}

export default SuggestionList;
