"use client";

import PropTypes from "prop-types";

const GradientButton = ({ children, className = "", onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-8 py-3 z-20 text-white font-semibold w-fit
        relative overflow-hidden
        rounded-lg 
        bg-gradient-to-r from-purple-600 to-blue-500
        ${className}
        after:absolute after:inset-0 after:z-[1]
        after:bg-gradient-to-r after:from-purple-500 after:to-blue-400
        after:opacity-0
        after:transition-opacity after:duration-700 after:ease-in-out
        hover:after:opacity-100
        before:absolute before:inset-0 before:z-[2]
        before:bg-gradient-to-r before:from-transparent before:via-purple-300 before:to-transparent
        before:translate-x-[-100%]
        before:transition-transform before:duration-700 before:ease-in-out
        hover:before:translate-x-[100%]`}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
};

GradientButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default GradientButton;
