import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
  name: "video",
  initialState: {
    mostPopularVideos: [],
  },
  reducers: {
    addMostPopularVideos: (state, action) => {
      state.mostPopularVideos = action.payload;
    },
  },
});

export const { addMostPopularVideos } = videoSlice.actions;

export default videoSlice.reducer;
