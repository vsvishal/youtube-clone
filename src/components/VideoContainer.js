import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_URL } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addMostPopularVideos } from "../utils/redux/videoSlice";
import Shimmer from "./Shimmer";

function VideoContainer() {
  const [videos, setVideos] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const getVideos = async () => {
      const data = await fetch(YOUTUBE_VIDEOS_URL);
      const json = await data.json();
      setVideos(json.items);
      dispatch(addMostPopularVideos(json.items));
    };

    getVideos();
  }, [dispatch]);

  if (!videos) return <Shimmer />;

  return (
    <div className="flex flex-wrap justify-center font-Roboto">
      {videos.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCard video_info={video} />
        </Link>
      ))}
    </div>
  );
}

export default VideoContainer;
