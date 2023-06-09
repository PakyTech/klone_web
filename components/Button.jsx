import React from "react";

const Button = ({ text, className, style, onClick }) => {
  return (
    <button style={style} className={className} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
