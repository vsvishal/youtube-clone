import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/redux/appSlice";
import likeImg from "../images/likebtn.png";
import dislikeImg from "../images/dislike.png";
import shareImg from "../images/share.png";
import downloadImg from "../images/download.png";
import notificationImg from "../images/notifification.png";
import optionImg from "../images/option.png";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import useGetChannels from "../utils/hook/useGetChannels";
import useGetSubscribersCount from "../utils/hook/useGetSubscribersCount";
import { abbreviateNumber } from "../utils/helper";

function WatchPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  const mostPopularVideos = useSelector(
    (store) => store.videos.mostPopularVideos
  );

  // if (mostPopularVideos.length === 0) {
  //   navigate("/");
  // }

  const filteredVideo = mostPopularVideos.filter(
    (video) => video.id === searchParams.get("v")
  );

  const { snippet, statistics } = filteredVideo[0] || [];

  const { channelTitle, title, channelId } = snippet || {};

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  const subscribers = useGetSubscribersCount(channelId);
  const subscribersCount = subscribers?.statistics?.subscriberCount;

  const channelData = useGetChannels(channelId);
  if (!channelData || channelData.length === 0) return null;

  return (
    <>
      <div className="flex mx-1 md:mx-auto py-3 font-Roboto">
        <div>
          <iframe
            className="rounded-none md:rounded-2xl w-full md:w-[720px] h-56 md:h-[400px]"
            // width="720"
            // height="400"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <h1 className="text-base md:text-xl font-bold w-full md:w-[710px] my-2">
            {title}
          </h1>
          <div className="flex flex-col md:flex-row justify-between w-full md:w-[720px]">
            <div className="flex items-center justify-start md:justify-center pr-2">
              <img
                src={channelData?.[0]?.snippet?.thumbnails?.medium.url}
                alt="avatar"
                className="mr-2 w-6 md:w-8 rounded-full"
              />
              <div>
                <h4 className="text-sm md:text-base font-semibold">
                  {channelTitle}
                </h4>
                <h4 className="text-xs">
                  {abbreviateNumber(subscribersCount)} subscribers
                </h4>
              </div>
            </div>
            <div className="flex text-xs md:text-sm">
              <div className="flex items-center justify-center py-2 px-3 bg-gray-100 border rounded-full">
                <img
                  src={notificationImg}
                  alt="notification"
                  className="w-4 md:w-5"
                />
                <h2 className="ml-1 md:ml-2">Subscribe</h2>
                <img
                  src={optionImg}
                  alt="option"
                  className="hidden md:block w-6 px-1"
                />
              </div>
              <div className="flex items-center justify-center ml-2 py-2 px-3 bg-gray-100 border rounded-l-full border-r-black">
                <img src={likeImg} alt="like" className="w-5 md:w-6 mr-2" />
                <h2>{abbreviateNumber(statistics?.likeCount)}</h2>
              </div>
              <div className="py-2 px-3 bg-gray-100 border rounded-r-full">
                <img src={dislikeImg} alt="like" className="w-4 md:w-5 mt-1" />
              </div>
              <div className="ml-2 flex items-center justify-center py-2 px-3 bg-gray-100 border rounded-full">
                <img src={shareImg} alt="share" className="w-4 md:w-5" />
                <h2 className="ml-2">Share</h2>
              </div>
              <div className="ml-2 flex items-center justify-center py-2 px-3 bg-gray-100 border rounded-full">
                <img src={downloadImg} alt="download" className="w-5" />
                <h2 className="hidden md:block ml-2">Download</h2>
              </div>
            </div>
          </div>
          <div className="py-5">
            <CommentsContainer
              totalComment={abbreviateNumber(statistics.commentCount)}
            />
          </div>
        </div>
        <div className="ml-0 md:ml-6">
          <LiveChat />
        </div>
      </div>
    </>
  );
}

export default WatchPage;
