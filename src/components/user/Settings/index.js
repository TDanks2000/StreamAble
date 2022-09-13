import React from "react";
import { useState } from "react";
import ToggleSwitch from "../../Form/ToggleSwitch";
import {
  FormContainer,
  InputContainer,
  InputName,
  InputWrapper,
  UserContainer,
} from "../styles";

export const UserSettingsComponent = () => {
  const [autoPlay, setAutoPlay] = useState(false);

  return (
    <UserContainer>
      <FormContainer>
        <InputContainer>
          <InputName>AutoPlay</InputName>
          <InputWrapper>
            <ToggleSwitch
              Name={`AutoPlay`}
              isOn={autoPlay}
              handleToggle={() => setAutoPlay((prev) => !prev)}
            />
          </InputWrapper>
        </InputContainer>
      </FormContainer>
    </UserContainer>
  );
};
