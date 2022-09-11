import React from "react";
import { UserContainer } from "../styles";
import {
  ButtonContainer,
  FormContainer,
  InputContainer,
  InputWrapper,
} from "./UserProfile.styles";

export const UserProfileComponent = () => {
  return (
    <UserContainer>
      <FormContainer>
        <InputContainer>
          <label>Join date</label>
          <InputWrapper>
            <input type="text" readOnly value="jul 11, 2017" />
          </InputWrapper>
        </InputContainer>
        <InputContainer>
          <label>Email address</label>
          <InputWrapper>
            <input type="email" value="random@hotmail.com" />
          </InputWrapper>
        </InputContainer>
        <InputContainer>
          <label>Username</label>
          <InputWrapper>
            <input type="text" value="UserName" />
          </InputWrapper>
        </InputContainer>
        <ButtonContainer>
          <input type="submit" value="UPDATE" />
        </ButtonContainer>
      </FormContainer>
    </UserContainer>
  );
};
