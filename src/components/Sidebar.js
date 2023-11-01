import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="hidden md:block p-4 w-48 shadow-lg font-Roboto">
      <div>
        <ul>
          <Link to={"/"}>
            <li>Home</li>
          </Link>
          <li>Sorts</li>
          <li>Subscriptions</li>
        </ul>
      </div>
      <div className="pt-4">
        <ul>
          <li>Library</li>
          <li>History</li>
          <li>Your videos</li>
          <li>Watch Later</li>
          <li>Liked Videos</li>
          <li>Show more</li>
        </ul>
      </div>
      <div className="pt-4">
        <h1 className="font-bold">Subscriptions</h1>
        <ul>
          <li>Vishal Sharma</li>
          <li>Elon Musk</li>
          <li>Virat Kohli</li>
          <li>MS Dhoni</li>
          <li>Show more</li>
        </ul>
      </div>
      <div className="pt-4">
        <h1 className="font-bold">Explore</h1>
        <ul>
          <li>Trending</li>
          <li>Shoping</li>
          <li>Music</li>
          <li>Films</li>
          <li>Live</li>
          <li>Gaming</li>
          <li>Sports</li>
          <li>Learning</li>
          <li>Fashion & beauty</li>
          <li>Podcasts</li>
        </ul>
      </div>
      <div className="pt-4">
        <h1 className="font-bold">More from YouTube</h1>
        <ul>
          <li>YouTube Premium</li>
          <li>YouTube Studio</li>
          <li>YouTube Music</li>
          <li>YouTube Kids</li>
          <li></li>
        </ul>
      </div>
      <div className="pt-4">
        <ul>
          <li>Settings</li>
          <li>Report history</li>
          <li>Help</li>
          <li>Send Feedback</li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
