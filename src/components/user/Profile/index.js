import React from "react";
import {
  FormContainer,
  InputContainer,
  UserProfileContainer,
} from "./UserProfile.styles";

export const UserProfileComponent = () => {
  return (
    <UserProfileContainer>
      <FormContainer>
        <InputContainer>
          Join date <input type="text" value="jul 11, 2017" disabled />
        </InputContainer>
        <InputContainer>
          Email address <input type="email" value="random@hotmail.com" />
        </InputContainer>
        <InputContainer>
          Username <input type="text" value="UserName" />
        </InputContainer>
      </FormContainer>
    </UserProfileContainer>
  );
};
