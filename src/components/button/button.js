import React from "react";
const Button = ({ btnColor, radius, textColor, onPress, label, type }) => {
  return (
    <div>
      <button
        onClick={onPress}
        className={[
          "btn",
          type && type ==='outline' ? `btn-outline-${btnColor}`:`btn-${btnColor}`,
          radius && `rounded-${radius}`,
          `text-${textColor}`,
        ].join(" ")}
      >
        {label}
      </button>
    </div>
  );
};
export default Button;
