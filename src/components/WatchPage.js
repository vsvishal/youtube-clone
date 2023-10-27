import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/redux/appSlice";
import likeImg from "../images/likebtn.png";
import dislikeImg from "../images/dislike.png";
import shareImg from "../images/share.png";
import CommentsContainer from "./CommentsContainer";

function WatchPage() {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  const mostPopularVideos = useSelector(
    (store) => store.videos.mostPopularVideos
  );

  const filteredVideo = mostPopularVideos.filter(
    (video) => video.id === searchParams.get("v")
  );

  const { snippet, statistics } = filteredVideo[0] || [];
  const { channelTitle, title, thumbnails } = snippet || {};
  console.log("filteredVideo: ", filteredVideo);

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <>
      <div className="py-3 px-10">
        <div>
          <iframe
            className="rounded-2xl"
            width="750"
            height="400"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <h1 className="font-bold w-[710px] my-2">{title}</h1>
          <div className="flex ">
            <div className="flex items-center justify-center py-0 px-4 ">
              <img
                src="https://yt3.ggpht.com/ytc/APkrFKbQLrfs_n2agg77lR3XB_w9ndT4rbrkItmdTVbUwg=s88-c-k-c0x00ffffff-no-rj"
                alt="avatar"
                className="mr-2 w-8"
              />
              <h2>{channelTitle}</h2>
            </div>
            <div className="flex items-center justify-center py-2 px-4 bg-gray-200 border rounded-l-full border-r-black">
              <img src={likeImg} alt="like" className="w-7 mr-2" />
              <h2>{statistics?.likeCount}</h2>
            </div>
            <div className="py-2 px-4 bg-gray-200 border rounded-r-full">
              <img src={dislikeImg} alt="like" className="w-5 mt-1" />
            </div>
            <div className="flex items-center justify-center ml-8 py-2 px-4 bg-gray-200 border rounded-full">
              <img src={shareImg} alt="share" className="w-5" />
              <h2>Share</h2>
            </div>
          </div>
        </div>
        <div className="py-5">
          <CommentsContainer />
        </div>
      </div>
    </>
  );
}

export default WatchPage;
