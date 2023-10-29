import React from "react";
import Button from "./Button";
import { BUTTON_NAME_LIST } from "../utils/constants";

function ButtonList() {
  return (
    <div className="flex flex-wrap justify-center font-Roboto">
      {BUTTON_NAME_LIST.map((btnName) => (
        <Button key={btnName} name={btnName} />
      ))}
    </div>
  );
}

export default ButtonList;
