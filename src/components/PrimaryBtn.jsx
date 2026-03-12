import React from "react";

const PrimaryBtn = ({ ariaLabel, onClick, title, className = "" }) => {
  return (
    <button
      aria-label={ariaLabel}
      onClick={onClick}
      className={`bg-lime-yellow text-black text-xl font-medium uppercase px-6 pt-3 py-2.5 md:pt-3.5 md:py-2.5 rounded-xl hover:scale-103 active:scale-90 cursor-pointer transition-transform duration-300 ease-in-out ${className}`}
    >
      {title}
    </button>
  );
};

export default PrimaryBtn;
