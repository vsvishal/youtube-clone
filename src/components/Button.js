import React from "react";

function Button({ name }) {
  return (
    <div>
      <button className="py-1 md:py-2 px-2 md:px-5 m-1 md:m-2 bg-gray-200 rounded-lg text-xs md:text-sm font-semibold">
        {name}
      </button>
    </div>
  );
}

export default Button;
