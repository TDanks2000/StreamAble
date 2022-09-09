import React, { useState } from "react";
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

const LogInComponent = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <LoginWrapper onSubmit={handleSubmit}>
      <FormWrapper>
        <InputWrapper>
          <InputIcon>
            <FaUser />
          </InputIcon>
          <Input
            type="text"
            placeholder="Email/Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </InputWrapper>
        <InputWrapper>
          <InputIcon>
            <FaLock />
          </InputIcon>
          <Input
            type="Password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
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
