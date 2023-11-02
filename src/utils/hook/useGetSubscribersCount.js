import { useEffect, useState } from "react";
import { API_KEY } from "../constants";

const useGetSubscribersCount = (channelId) => {
  const [subscribers, setSubscribers] = useState();

  useEffect(() => {
    getSubscriberCount();
  }, []);

  const getSubscriberCount = async () => {
    try {
      const data = await fetch(
        `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${API_KEY}`
      );
      const json = await data.json();
      setSubscribers(json.items[0]);
    } catch (error) {
      // console.log(error);
    }
  };

  return subscribers;
};

export default useGetSubscribersCount;
