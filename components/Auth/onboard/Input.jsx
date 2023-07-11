import React from "react";

const Input = ({ onchange, type, value, placeholder, style }) => {
  return (
    <>
      <input
        type={type}
        className="my-4"
        style={style}
        placeholder={placeholder}
        onChange={onchange}
        value={value}
      />
    </>
  );
};

export default Input;
