import React from "react";

const Input = ({ name, label, value, type, handleChange }) => {
  return (
    <>
      <label htmlFor={name}>{label}: </label>
      <input
        type={type}
        value={value}
        name={name}
        id={name}
        placeholder={`Enter ${name}...`}
        onChange={(e) => handleChange(e)}
      />
    </>
  );
};

export default Input;
