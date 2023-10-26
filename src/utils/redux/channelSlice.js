import { createSlice } from "@reduxjs/toolkit";

const channelSlice = createSlice({
  name: "channel",
  initialState: {
    channelList: [],
  },
  reducers: {
    addChannels: (state, action) => {
      state.channelList = action.payload;
    },
  },
});

export const { addChannels } = channelSlice.actions;
export default channelSlice.reducer;
