import React from "react";

const buttonStyles = {
  margin: "30px auto",
  padding: "10px 20px",
  textAlign: "center",
  fontSize: "16px",
  lineHeight: "20px",
  fontFamily: "inherit",
  fontWeight: "bold",
  letterSpacing: "1px",
  clear: "both"
};

const Button = ({ type, label }) => {
  return (
    <button type={type} style={buttonStyles}>
      {label}
    </button>
  );
};

export default Button;
