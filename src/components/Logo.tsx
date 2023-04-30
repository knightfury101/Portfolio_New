import React from "react";

function Logo() {
  return (
    <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <title>Logo</title>
    <g>
      <path
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M 50, 5
            L 11, 27
            L 11, 72
            L 50, 95
            L 89, 73
            L 89, 28 z"
      />
      <g id="A" transform="translate(35, 35) scale(0.8)">
        <path d="M 0, 25 L 10, 0 L 20, 25 M 5, 15 L 15, 15" stroke="currentColor" strokeWidth="5" fill="none" />
      </g>
    </g>
  </svg>
  

  );
}

export default Logo;
