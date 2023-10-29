import { useEffect, useState } from "react";
import { API_KEY, CHANNELS_URL } from "../constants";

const useGetChannels = (channelId) => {
  const [channelData, setChannelData] = useState([]);

  useEffect(() => {
    fetchChannels();
  }, []);

  const fetchChannels = async () => {
    const response = await fetch(CHANNELS_URL + channelId + "&key=" + API_KEY);
    const data = await response.json();
    setChannelData(data.items);
  };
  return channelData;
};

export default useGetChannels;
