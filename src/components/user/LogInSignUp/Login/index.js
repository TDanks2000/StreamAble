import React, { useRef, useState } from "react";
import {
  ForgottenPassword,
  FormWrapper,
  Input,
  InputIcon,
  InputWrapper,
  LoginWrapper,
  Submit,
} from "../styles";
import { FaLock, FaUser } from "react-icons/fa";
import { useAuth } from "../../../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const LogInComponent = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = emailRef.current;
    const password = passwordRef.current;

    await login(email.value, password.value).then(() => navigate("/"));
  };

  return (
    <LoginWrapper>
      <FormWrapper onSubmit={handleSubmit}>
        <InputWrapper>
          <InputIcon>
            <FaUser />
          </InputIcon>
          <Input type="text" placeholder="Email" ref={emailRef} />
        </InputWrapper>
        <InputWrapper>
          <InputIcon>
            <FaLock />
          </InputIcon>
          <Input type="Password" placeholder="Password" ref={passwordRef} />
        </InputWrapper>
        <InputWrapper>
          <ForgottenPassword>Forgotten Password</ForgottenPassword>
        </InputWrapper>
        <InputWrapper>
          <Submit>Sign In</Submit>
        </InputWrapper>
      </FormWrapper>
    </LoginWrapper>
  );
};

export default LogInComponent;
