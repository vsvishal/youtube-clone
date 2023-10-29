import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import videoSlice from "./videoSlice";
import channelSlice from "./channelSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    videos: videoSlice,
    channels: channelSlice,
    search: searchSlice,
    chat: chatSlice,
  },
});

export default store;
