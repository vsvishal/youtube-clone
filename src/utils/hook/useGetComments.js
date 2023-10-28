import { useEffect, useState } from "react";
import { API_KEY, COMMENTS_URL } from "../constants";

const useGetComments = (searchParams) => {
  const [commentData, setCommentData] = useState([]);

  useEffect(() => {
    getCommentData();
  }, []);

  const getCommentData = async () => {
    const data = await fetch(COMMENTS_URL + `${searchParams}&key=${API_KEY}`);
    const json = await data.json();
    setCommentData(json.items);
  };
  return commentData;
};

export default useGetComments;
