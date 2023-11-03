import React from "react";
import { SEARCH_ICON } from "../utils/constants";

function SuggestionList({ suggestion }) {
  return (
    <>
      <li
        key={suggestion}
        className="flex py-1 px-2 md:px-4 m-1 hover:bg-gray-100"
        onClick={() => console.log("hello")}
      >
        <img
          alt="search-icon"
          className="mr-2 md:mr-3 h-3 md:h-4"
          src={SEARCH_ICON}
        />
        {suggestion}
      </li>
    </>
  );
}

export default SuggestionList;
