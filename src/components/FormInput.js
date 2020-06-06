import React from "react";
import "./FormInputStyles.scss";

function FormInput({ handleChange, label, value, ...otherProps }) {
  return (
    <div className="group">
      <input className="form-input" onChange={handleChange} {...otherProps} />
      {label && (
        <label className={`form-input-label ${value.length && "shrink"}`}>
          {label}
        </label>
      )}
    </div>
  );
}

export default FormInput;
