import React from "react";

const Icon = ({ ariaLabel, onClick, path, className = "" }) => {
  return (
    <button
      aria-label={ariaLabel}
      onClick={onClick}
      className={`text-white/80 hover:text-lime-yellow hover:scale-103 active:scale-95 cursor-pointer transition-all duration-300 ease-in-out ${className}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.6}
        stroke="currentColor"
        className={className}
      >
        <path d={path} />
      </svg>
    </button>
  );
};

export default Icon;
