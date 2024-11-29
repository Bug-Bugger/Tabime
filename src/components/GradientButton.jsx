import PropTypes from "prop-types";

const GradientButton = ({
  children,
  onClick = () => {
    console.log("Onclick not implemented");
  },
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`px-8 py-3 z-20 text-white font-semibold 
        relative overflow-hidden
        rounded-lg 
        bg-gradient-to-r from-purple-600 to-blue-500
        transition-all duration-500 ease
        hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-400
        ${className}
        before:absolute before:inset-0
        before:bg-gradient-to-r before:from-transparent before:via-purple-300 before:to-transparent
        before:translate-x-[-100%]
        before:transition-transform before:duration-500 before:ease-in-out
        hover:before:translate-x-[100%]`}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
};

GradientButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default GradientButton;
