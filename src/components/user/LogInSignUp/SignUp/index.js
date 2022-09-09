import React, { useState } from "react";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import {
  FormWrapper,
  Input,
  InputIcon,
  InputWrapper,
  LoginWrapper,
  Submit,
} from "../styles";

export const SignUpComponent = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <LoginWrapper onSubmit={handleSubmit}>
      <FormWrapper>
        <InputWrapper>
          <InputIcon>
            <FaEnvelope />
          </InputIcon>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </InputWrapper>
        <InputWrapper>
          <InputIcon>
            <FaUser />
          </InputIcon>
          <Input
            type="text"
            placeholder="Username"
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
          <InputIcon>
            <FaLock />
          </InputIcon>
          <Input
            type="Password"
            placeholder="Confirm Password"
            value={cPassword}
            onChange={(e) => setCPassword(e.target.value)}
          />
        </InputWrapper>
        <InputWrapper>
          <Submit>Sign Up</Submit>
        </InputWrapper>
      </FormWrapper>
    </LoginWrapper>
  );
};
