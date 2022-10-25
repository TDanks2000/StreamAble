import React from "react";
import LogInComponent from "./Login";
import LoginNav from "./nav";
import { SignUpComponent } from "./SignUp";
import { LoginContainer, LoginOutside } from "./styles";

const LogInSignUp = ({ isSwitch }) => {
  return (
    <LoginOutside>
      <LoginContainer>
        <LoginNav />
        {isSwitch ? <LogInComponent /> : <SignUpComponent />}
      </LoginContainer>
    </LoginOutside>
  );
};

export default LogInSignUp;
