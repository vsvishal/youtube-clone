import { MESSAGE_LIST } from "./mock/messageList";
import { NAME_LIST } from "./mock/nameList";

export function generateRandomNames() {
  return NAME_LIST[Math.floor(Math.random() * NAME_LIST.length)];
}

export function generateRandomMessage() {
  return MESSAGE_LIST[Math.floor(Math.random() * MESSAGE_LIST.length)];
}
