import React from "react";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import "./SignInSignUpPageStyles.scss";

function SignInSignUpPage(props) {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
}

export default SignInSignUpPage;
