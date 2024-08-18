import PropTypes from "prop-types";

const Button = ({ text, color, bgColor, className, onClick }) => {
  return (
    <button
      className={`px-4 py-2 rounded text-${color} ${className}`}
      style={{ backgroundColor: bgColor }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  bgColor: PropTypes.string,
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  bgColor: "",
  color: "#3b82f6", // Default Tailwind blue color
  className: "", // Allow additional classes
  onClick: () => {}, // Default no-op function
};

export default Button;
