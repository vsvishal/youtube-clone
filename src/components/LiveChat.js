import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/redux/chatSlice";
import { AVATAR } from "../utils/constants";
import submitIcon from "../images/submitIcon.png";
import { generateRandomMessage, generateRandomNames } from "../utils/helper";

function LiveChat() {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomNames(),
          message: generateRandomMessage(),
        })
      );
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="">
      <div className="border bg-slate-50 border-gray-300 rounded-tr-2xl rounded-tl-2xl shadow-lg font-Roboto">
        <h1 className="py-2 px-6">Live chat</h1>
      </div>
      <div className="py-4 px-6 w-[450px] h-[350px] bg-slate-50 border border-gray-300 shadow-lg overflow-y-scroll flex flex-col-reverse font-Roboto">
        {chatMessages.map((message, index) => (
          <ChatMessage
            key={index}
            name={message.name}
            message={message.message}
          />
        ))}
      </div>
      <form
        className="flex py-4 px-6 w-[450px] border bg-slate-50 border-gray-300 rounded-bl-2xl
         rounded-br-2xl shadow-lg font-Roboto"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "user",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <img src={AVATAR} alt="avatar" className="mr-2 w-8 h-8" />
        <input
          type="text"
          placeholder="Vishal Sharma Chat...."
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
          className="w-72 mr-4 px-4 py-1 bg-slate-50 border border-b-gray-500"
        />
        <button>
          <img src={submitIcon} alt="submit" className="h-7 w-7" />
        </button>
      </form>
    </div>
  );
}

export default LiveChat;
