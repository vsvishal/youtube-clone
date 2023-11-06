import { useEffect, useState } from "react";
import { SEARCH_URL } from "../constants";

const useSearchVideos = (query) => {
  //   console.log("query: ", SEARCH_URL + query);
  const [searchedVideos, setSearchedVideos] = useState([]);

  useEffect(() => {
    const getSearchedVides = async () => {
      const data = await fetch(SEARCH_URL + query);
      const json = await data.json();
      setSearchedVideos(json.items);
    };
    getSearchedVides();
  }, [query]);

  return searchedVideos;
};

export default useSearchVideos;
