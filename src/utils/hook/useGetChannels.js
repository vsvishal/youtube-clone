import { useEffect } from "react";
import { CHANNELS_URL } from "../constants";
import { useDispatch } from "react-redux";
import { addChannels } from "../redux/channelSlice";

const useGetChannels = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchChannels();
  }, []);

  const fetchChannels = async () => {
    const response = await fetch(CHANNELS_URL);
    const data = await response.json();
    dispatch(addChannels(data));
  };
};

export default useGetChannels;
