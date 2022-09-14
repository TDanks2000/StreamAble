import React from "react";
import { InputName, UserContainer } from "../styles";
import { FormContainer, InputContainer, InputWrapper } from "../styles";
import { ButtonContainer } from "./UserProfile.styles";

export const UserProfileComponent = () => {
  return (
    <UserContainer>
      <FormContainer>
        <InputContainer>
          <InputName>Join date</InputName>
          <InputWrapper>
            <input type="text" readOnly value="jul 11, 2017" />
          </InputWrapper>
        </InputContainer>
        <InputContainer>
          <InputName>Email address</InputName>
          <InputWrapper>
            <input type="email" value="random@hotmail.com" />
          </InputWrapper>
        </InputContainer>
        <InputContainer>
          <InputName>Username</InputName>
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
