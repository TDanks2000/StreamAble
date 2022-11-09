import React from "react";
import { LoginLink, LoginNavContainer } from "./nav.styles";

const LoginNav = () => {
  return (
    <LoginNavContainer>
      <LoginLink to={"/user/signIn"}>Sign In</LoginLink>
      <LoginLink to={"/user/signUp"}>Sign Up</LoginLink>
    </LoginNavContainer>
  );
};

export default LoginNav;
