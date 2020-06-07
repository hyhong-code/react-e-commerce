import React from "react";
import "./ButtonStyles.scss";

function Button({ children, isGoogleSignIn, isInverted, ...otherProps }) {
  return (
    <button
      className={`custom-button ${isGoogleSignIn && "google-signin"} ${
        isInverted && "inverted"
      }`}
      {...otherProps}
    >
      {children}
    </button>
  );
}

export default Button;
