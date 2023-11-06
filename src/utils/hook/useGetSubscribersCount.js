import { useEffect, useState } from "react";
import { API_KEY } from "../constants";

const useGetSubscribersCount = (channelId) => {
  const [subscribers, setSubscribers] = useState();

  useEffect(() => {
    const getSubscriberCount = async () => {
      try {
        const data = await fetch(
          `https://www.googleapis.com/youtdfedfube/v3/channels?part=statistics&id=${channelId}&key=${API_KEY}`
        );
        const json = await data.json();
        setSubscribers(json.items[0]);
      } catch (error) {
        // console.log(error);
      }
    };
    getSubscriberCount();
  }, [channelId]);

  return subscribers;
};

export default useGetSubscribersCount;
