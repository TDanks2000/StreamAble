import React, { useRef, useState } from "react";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../../contexts/AuthContext";
import {
  toastErrorNotify,
  toastSuccessNotify,
} from "../../../../utils/toast/Notify";
import {
  FormWrapper,
  Input,
  InputIcon,
  InputWrapper,
  LoginWrapper,
  Submit,
} from "../styles";

export const SignUpComponent = () => {
  const navigate = useNavigate();
  const emailRef = useRef();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const cPasswordRef = useRef();
  //eslint-disable-next-line no-unused-vars
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { signUp } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = emailRef?.current;
    const username = usernameRef?.current;
    const password = passwordRef?.current;
    const cPassword = cPasswordRef?.current;

    if (password.value !== cPassword.value)
      return setError("Passwords do not match");

    try {
      setError("");
      setLoading(true);

      await signUp(email.value, password.value, username.value)
        .then(() => {
          toastSuccessNotify("Successfully logged in");
          return navigate("/");
        })
        .catch((err) => {
          console.log("err", err);
          toastErrorNotify(err.code.replace("auth/", ""));
        });
    } catch (err) {
      console.log(err);
      toastErrorNotify("Failed to sign up: ");
    }
    setLoading(false);
  };

  return (
    <LoginWrapper onSubmit={handleSubmit}>
      <FormWrapper>
        <InputWrapper>
          <InputIcon>
            <FaEnvelope />
          </InputIcon>
          <Input type="email" placeholder="Email" ref={emailRef} />
        </InputWrapper>
        <InputWrapper>
          <InputIcon>
            <FaUser />
          </InputIcon>
          <Input type="text" placeholder="Username" ref={usernameRef} />
        </InputWrapper>
        <InputWrapper>
          <InputIcon>
            <FaLock />
          </InputIcon>
          <Input type="Password" placeholder="Password" ref={passwordRef} />
        </InputWrapper>
        <InputWrapper>
          <InputIcon>
            <FaLock />
          </InputIcon>
          <Input
            type="Password"
            placeholder="Confirm Password"
            ref={cPasswordRef}
          />
        </InputWrapper>
        <InputWrapper>
          <Submit disabled={loading}>Sign Up</Submit>
        </InputWrapper>
      </FormWrapper>
    </LoginWrapper>
  );
};
