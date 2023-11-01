import React from "react";
import { AVATAR } from "../utils/constants";

function ChatMessage({ name, message }) {
  return (
    <div className="flex items-center shadow-sm py-1 font-Roboto">
      <img src={AVATAR} alt="avatar" className="w-6 h-6" />
      <span className="px-2 font-bold text-xs">{name}</span>
      <span className="text-sm">{message}</span>
    </div>
  );
}

export default ChatMessage;
