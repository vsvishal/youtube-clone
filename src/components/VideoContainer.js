import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_URL } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addMostPopularVideos } from "../utils/redux/videoSlice";

function VideoContainer() {
  const [videos, setVideos] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_URL);
    const json = await data.json();
    setVideos(json.items);
    dispatch(addMostPopularVideos(json.items));
  };

  return (
    <div className="flex flex-wrap justify-center">
      {videos.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCard video_info={video} />
        </Link>
      ))}
    </div>
  );
}

export default VideoContainer;
