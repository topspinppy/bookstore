import React from "react";

function StepUpIcon({ ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="6"
      height="5"
      fill="none"
      viewBox="0 0 6 5"
      { ...props }
    >
      <path
        stroke="#8C8C8C"
        strokeLinecap="round"
        strokeWidth="1.6"
        d="M1 4l2-2 2 2"
      ></path>
    </svg>
  );
}

export default StepUpIcon;
