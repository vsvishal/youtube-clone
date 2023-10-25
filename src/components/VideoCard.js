import React from "react";

function VideoCard({ video_info }) {
  const { snippet, statistics } = video_info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="p-2 m-2 shadow-lg h-96">
      <img
        className="w-96 rounded-lg hover:rounded-none"
        src={thumbnails.medium.url}
        alt="thumbnail"
      />
      <ul className="w-80">
        <li className="py-2 font-bold">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
}

export default VideoCard;
