import React from "react";
import "./ButtonStyles.scss";

function Button({ children, isGoogleSignIn, ...otherProps }) {
  return (
    <button
      className={`custom-button ${isGoogleSignIn && "google-signin"}`}
      {...otherProps}
    >
      {children}
    </button>
  );
}

export default Button;
