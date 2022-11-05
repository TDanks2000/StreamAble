import React, { useState } from "react";
import { useAuth } from "../../../contexts/AuthContext";
import { InputName, UserContainer } from "../styles";
import { FormContainer, InputContainer, InputWrapper } from "../styles";
import { ButtonContainer } from "./UserProfile.styles";

export const UserProfileComponent = () => {
  const { currentUser } = useAuth();
  // eslint-disable-next-line no-unused-vars
  const [email, setEmail] = useState(currentUser.email);
  // eslint-disable-next-line no-unused-vars
  const [displayName, setDisplayName] = useState(currentUser.displayName);

  let d = new Date(currentUser.metadata.creationTime);
  const creationDate = new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(d);

  return (
    <UserContainer>
      <FormContainer>
        <InputContainer>
          <InputName>Join date</InputName>
          <InputWrapper>
            <input type="text" readOnly value={creationDate} />
          </InputWrapper>
        </InputContainer>
        <InputContainer>
          <InputName>Email address</InputName>
          <InputWrapper>
            <input type="email" value={email} />
          </InputWrapper>
        </InputContainer>
        <InputContainer>
          <InputName>Username</InputName>
          <InputWrapper>
            <input type="text" value={displayName} />
          </InputWrapper>
        </InputContainer>
        <ButtonContainer>
          <input type="submit" value="UPDATE" />
        </ButtonContainer>
      </FormContainer>
    </UserContainer>
  );
};
