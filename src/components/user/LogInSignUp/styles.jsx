import styled from "styled-components";
import bg from "../../../assets/images/login-bg.png";

export const LoginOutside = styled.div`
  width: 100%;
  height: 100%;
  padding: 1.5rem 0;
  // background: url(${bg});
  // background-repeat: no-repeat;
  // background-size: 700px;
  // background-position: top right 2.5rem;
`;

export const LoginContainer = styled.div`
  width: 500px;
  min-height: 460px;
  margin: 0 auto;
  background: ${({ theme }) => theme.base.navBg};
  border-radius: 7px;
  overflow: hidden;
`;

export const LoginWrapper = styled.div`
  padding: 0.5rem 2rem;
`;

export const FormWrapper = styled.form`
  margin-top: 1rem;
`;

export const InputWrapper = styled.div`
  position: relative;
  margin-bottom: 1.4rem;
`;

export const InputIcon = styled.div`
  position: absolute;
  left: 0;
  line-height: 3rem;
  width: 3rem;
  text-align: center;
  font-size: 1.1rem;
`;

export const Input = styled.input`
  padding-left: 3rem;
  font-size: 1.1rem;
  height: 3rem;
  line-height: 3rem;
  display: block;
  width: 100%;
  font-weight: 400;
  color: #aaa;
  background-color: #212121;
  background-clip: padding-box;
  border: 1px solid #303030;
  border-radius: 5px;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;

export const ForgottenPassword = styled.a`
  opacity: 0.5;
  padding-left: 0;
  padding-right: 0;
  transition: opacity 0.2s ease-in-out;
  background-color: transparent;
  border-color: transparent;
  color: ${({ theme }) => theme.text.offWhite};
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

export const Submit = styled.button`
  width: 100%;
  padding: 1rem 1.5rem;
  background: ${({ theme }) => theme.base.mainColor};
  border-radius: 5px;
  overflow: hidden;
  text-align: center;
  opacity: 0.9;
  transition: opacity 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;
