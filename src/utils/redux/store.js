import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import videoSlice from "./videoSlice";
import channelSlice from "./channelSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    videos: videoSlice,
    channels: channelSlice,
  },
});

export default store;
