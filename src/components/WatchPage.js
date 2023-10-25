import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { toggleMenu } from "../utils/redux/appSlice";

function WatchPage() {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(toggleMenu());
  }, []);

  return (
    <div className="p-3">
      <iframe
        className="rounded-lg"
        width="760"
        height="315"
        src={
          "https://www.youtube.com/watch?v=" +
          searchParams.get("v") +
          "&ab_channel="
        }
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default WatchPage;
