import React from "react";
import { Link } from "react-router-dom";
import { AVATAR } from "../utils/constants";
import {
  shortsImg,
  homeImg,
  subscriptionImg,
  nextImg,
  historyImg,
  showMoreImg,
  videoImg,
  watchLaterImg,
  downloadImg,
  filmImg,
  gameImg,
  liveImg,
  musicImg,
  shoppingImg,
  trendingImg,
  sporstImg,
  learningImg,
  fashionImg,
  podcastImg,
  youtubeStudioImg,
  youtubeMusicImg,
  youtubeKidsImg,
  reportImg,
  settingImg,
  feedbackImg,
  helpImg,
} from ".";

function Sidebar() {
  return (
    <div className="hidden md:block h-full overflow-y-scroll px-2 py-2 w-56 shadow-lg font-Roboto absolute bg-white">
      <div className="py-2 border-b-2">
        <ul>
          <Link to={"/"}>
            <li className="flex px-3 py-2 hover:bg-gray-100 rounded-xl text-sm">
              <img src={homeImg} alt="home" className="w-5 h-4 mr-5" /> Home
            </li>
          </Link>
          <li className="flex px-3 py-2 hover:bg-gray-100 rounded-xl text-sm">
            <img src={shortsImg} alt="shorts" className="w-5 h-5 mr-5" /> Shorts
          </li>
          <li className="flex px-3 py-2 hover:bg-gray-100 rounded-xl text-sm">
            <img src={subscriptionImg} alt="shorts" className="w-5 h-5 mr-5" />
            Subscriptions
          </li>
        </ul>
      </div>
      <div className="pt-2 py-2 border-b-2">
        <ul>
          <li className="flex px-3 py-2 hover:bg-gray-100 rounded-xl text-sm">
            <span className="font-bold mr-2">You</span>
            <img src={nextImg} alt="home" className="w-4 h-5 " />
          </li>
          <li className="flex px-3 py-2 hover:bg-gray-100 rounded-xl text-sm">
            <img src={AVATAR} alt="home" className="w-6 h-6 mr-4" />
            Your Channel
          </li>
          <li className="flex px-3 py-2 hover:bg-gray-100 rounded-xl text-sm">
            <img src={historyImg} alt="shorts" className="w-5 h-5 mr-5" />
            History
          </li>
          <li className="flex px-3 py-2 hover:bg-gray-100 rounded-xl text-sm">
            <img src={videoImg} alt="shorts" className="w-5 h-5 mr-5" />
            Your videos
          </li>
          <li className="flex px-3 py-2 hover:bg-gray-100 rounded-xl text-sm">
            <img src={watchLaterImg} alt="shorts" className="w-5 h-5 mr-5" />
            Watch Later
          </li>
          <li className="flex px-3 py-2 hover:bg-gray-100 rounded-xl text-sm">
            <img src={downloadImg} alt="shorts" className="w-5 h-5 mr-5" />
            Downloads
          </li>
          <li className="flex px-3 py-2 hover:bg-gray-100 rounded-xl text-sm">
            <img src={showMoreImg} alt="shorts" className="w-4 h-5 mr-5" />
            Show more
          </li>
        </ul>
      </div>
      <div className="pt-2 py-2 border-b-2">
        <h1 className="font-bold px-3 py-2">Subscriptions</h1>
        <ul>
          <li className="flex px-3 py-2 hover:bg-gray-100 rounded-xl text-sm">
            <img src={AVATAR} alt="home" className="w-6 h-6 mr-4" />
            Namaste Javascript
          </li>
          <li className="flex px-3 py-2 hover:bg-gray-100 rounded-xl text-sm">
            <img src={AVATAR} alt="home" className="w-6 h-6 mr-4" />
            Chai aur Code
          </li>
          <li className="flex px-3 py-2 hover:bg-gray-100 rounded-xl text-sm">
            <img src={AVATAR} alt="home" className="w-6 h-6 mr-4" />
            Akshay Saini
          </li>
          <li className="flex px-3 py-2 hover:bg-gray-100 rounded-xl text-sm">
            <img src={AVATAR} alt="home" className="w-6 h-6 mr-4" />
            Elon Musk
          </li>
          <li className="flex px-3 py-2 hover:bg-gray-100 rounded-xl text-sm">
            <img src={AVATAR} alt="home" className="w-6 h-6 mr-4" />
            Virat Kohli
          </li>
          <li className="flex px-3 py-2 hover:bg-gray-100 rounded-xl text-sm">
            <img src={AVATAR} alt="home" className="w-6 h-6 mr-4" />
            MS Dhoni
          </li>
          <li className="flex px-3 py-2 hover:bg-gray-100 rounded-xl text-sm">
            <img src={AVATAR} alt="home" className="w-6 h-6 mr-4" />
            Hitesh Choudhary
          </li>
          <li className="flex px-3 py-2 hover:bg-gray-100 rounded-xl text-sm">
            <img src={showMoreImg} alt="shorts" className="w-4 h-5 mr-5" />
            Show 120 more
          </li>
        </ul>
      </div>
      <div className="pt-2 py-2 border-b-2">
        <h1 className="font-bold px-3 py-2">Explore</h1>
        <ul>
          <li className="flex px-3 py-2 hover:bg-gray-100 rounded-xl text-sm">
            <img src={trendingImg} alt="trending" className="w-6 h-6 mr-5" />
            Trending
          </li>
          <li className="flex px-3 py-2 hover:bg-gray-100 rounded-xl text-sm">
            <img src={shoppingImg} alt="shopping" className="w-6 h-6 mr-5" />
            Shoping
          </li>
          <li className="flex px-3 py-2 hover:bg-gray-100 rounded-xl text-sm">
            <img src={musicImg} alt="music" className="w-6 h-6 mr-5" />
            Music
          </li>
          <li className="flex px-3 py-2 hover:bg-gray-100 rounded-xl text-sm">
            <img src={filmImg} alt="film" className="w-6 h-6 mr-5" />
            Films
          </li>
          <li className="flex px-3 py-2 hover:bg-gray-100 rounded-xl text-sm">
            <img src={liveImg} alt="live" className="w-6 h-6 mr-5" />
            Live
          </li>
          <li className="flex px-3 py-2 hover:bg-gray-100 rounded-xl text-sm">
            <img src={gameImg} alt="gaming" className="w-6 h-6 mr-5" />
            Gaming
          </li>
          <li className="flex px-3 py-2 hover:bg-gray-100 rounded-xl text-sm">
            <img src={sporstImg} alt="sports" className="w-6 h-6 mr-5" />
            Sports
          </li>
          <li className="flex px-2 py-2 hover:bg-gray-100 rounded-xl text-sm">
            <img src={learningImg} alt="learning" className="w-8 h-7 mr-4" />
            Learning
          </li>
          <li className="flex px-3 py-2 hover:bg-gray-100 rounded-xl text-sm">
            <img src={fashionImg} alt="fashion" className="w-6 h-6 mr-5" />
            Fashion & beauty
          </li>
          <li className="flex px-3 py-2 hover:bg-gray-100 rounded-xl text-sm">
            <img src={podcastImg} alt="podcast" className="w-6 h-6 mr-5" />
            Podcasts
          </li>
        </ul>
      </div>
      <div className="pt-2 py-2 border-b-2">
        <h1 className="font-bold px-3 py-2">More from YouTube</h1>
        <ul>
          <li className="flex px-3 py-2 hover:bg-gray-100 rounded-xl text-sm">
            <img
              src={videoImg}
              alt="youtube-premium"
              className="w-6 h-6 mr-5"
            />
            YouTube Premium
          </li>
          <li className="flex px-2 py-2 hover:bg-gray-100 rounded-xl text-sm">
            <img
              src={youtubeStudioImg}
              alt="youtube-studio"
              className="w-7 h-7 mr-5"
            />
            YouTube Studio
          </li>
          <li className="flex px-2 py-2 hover:bg-gray-100 rounded-xl text-sm">
            <img
              src={youtubeMusicImg}
              alt="youtube-music"
              className="w-7 h-7 mr-5"
            />
            YouTube Music
          </li>
          <li className="flex px-1 py-2 hover:bg-gray-100 rounded-xl text-sm">
            <img
              src={youtubeKidsImg}
              alt="youtube-kids"
              className="w-10 h-8 mr-3"
            />
            YouTube Kids
          </li>
        </ul>
      </div>
      <div className="pt-4">
        <ul>
          <li className="flex px-3 py-2 hover:bg-gray-100 rounded-xl text-sm">
            <img src={settingImg} alt="setting" className="w-5 h-5 mr-5" />
            Settings
          </li>
          <li className="flex px-3 py-2 hover:bg-gray-100 rounded-xl text-sm">
            <img
              src={reportImg}
              alt="report-history"
              className="w-5 h-5 mr-5"
            />
            Report history
          </li>
          <li className="flex px-3 py-2 hover:bg-gray-100 rounded-xl text-sm">
            <img src={helpImg} alt="help" className="w-5 h-5 mr-5" />
            Help
          </li>
          <li className="flex px-3 py-2 hover:bg-gray-100 rounded-xl text-sm">
            <img src={feedbackImg} alt="feedback" className="w-5 h-5 mr-5" />
            Send Feedback
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
