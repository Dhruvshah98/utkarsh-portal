import React from "react";

function Button({ type, text, onClick }) {
  return (
    <button type={type} className="button-start okay-input" onClick={onClick}>
      <span>{text}</span>
      <em>{text}</em>
    </button>
  );
}

export default Button;
