import React from "react";
import useGetChannels from "../utils/hook/useGetChannels";
import { abbreviateNumber, getDifferenceBetweenDates } from "../utils/helper";

function VideoCard({ video_info }) {
  const { snippet, statistics } = video_info;
  // console.log("video_info ", video_info);
  const { channelTitle, title, thumbnails, channelId, publishedAt } = snippet;

  const channelData = useGetChannels(channelId);
  if (channelData.length === 0) return null;

  return (
    <div className="p-2 m-2 shadow-xl h-[95%] font-Roboto">
      <img
        className="w-96 md:w-fit rounded-lg hover:rounded-none"
        src={thumbnails.medium.url}
        alt="thumbnail"
      />
      <div className="w-80 py-2 flex">
        <div className="w-16">
          <img
            src={channelData?.[0]?.snippet?.thumbnails?.medium.url}
            alt="channel watermark"
            className="w-8 h-8 rounded-full"
          />
        </div>
        <div className="w-96 text-sm md:text-base">
          <p className="font-bold">
            {title.length > 75 ? title.substring(0, 75) + "..." : title}
          </p>
          <h3>{channelTitle}</h3>
          <div className="flex">
            <h3>{abbreviateNumber(statistics.viewCount)} views </h3>
            <span className="ml-2">
              {abbreviateNumber(getDifferenceBetweenDates(publishedAt))}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
