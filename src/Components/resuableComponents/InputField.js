import React from "react";

function InputField({ name, placeholder, value, onChange }) {
  return (
    <div className="answer-input-area">
      <input
        type="text"
        className="form-field"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default InputField;
