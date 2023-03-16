import React from "react";

// -webkit-touch-callout: none;
//   -webkit-user-select: none;
//   -khtml-user-select: none;
//   -moz-user-select: none;
//   -ms-user-select: none;
//   user-select: none;

function BlueButton({ title, onClick }) {
  return (
    <button
      style={{ WebkitUserSelect: "none", userSelect: "none", outline: "none", cursor: "pointer" }}
      onClick={onClick}
      className="shadow-lg bg-black text-white hover:bg-gray-200 hover:text-black transition-all h-12 w-24 rounded-xl"
    >
      {title}
    </button>
  );
}

export default BlueButton;
