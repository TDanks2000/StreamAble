import React from "react";
import { useState } from "react";
import RadioButtonGroup from "../../Form/Radio";
import ToggleSwitch from "../../Form/ToggleSwitch";
import { ButtonContainer } from "../Profile/UserProfile.styles";
import {
  FormContainer,
  InputContainer,
  InputName,
  UserContainer,
} from "../styles";
import { NumberInput, InputWrapper, InputSeparator } from "./settings.styles";

const languageOptions = [
  {
    label: "English",
    name: "languageRadio",
  },
  {
    label: "Japanese",
    name: "languageRadio",
  },
];

const subDubOptions = [
  {
    label: "Sub",
    name: "SubDubRadio",
  },
  {
    label: "Dub",
    name: "SubDubRadio",
  },
  {
    label: "Both",
    name: "SubDubRadio",
  },
];

export const UserSettingsComponent = () => {
  const [language, setLanguage] = useState("en");
  const [autoPlay, setAutoPlay] = useState(false);

  const radioHandler = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <UserContainer>
      <FormContainer>
        <InputContainer>
          <InputName>Anime title language</InputName>
          <InputWrapper>
            <RadioButtonGroup
              options={languageOptions}
              onChange={radioHandler}
            />
          </InputWrapper>
        </InputContainer>

        <InputContainer>
          <InputName>Show continue watching on the home page</InputName>
          <InputWrapper>
            <ToggleSwitch Name={`ContinueWatchingHomePage`} />
          </InputWrapper>
        </InputContainer>

        <InputSeparator />

        <InputContainer>
          <InputName>Auto select language</InputName>
          <InputWrapper>
            <RadioButtonGroup options={subDubOptions} />
          </InputWrapper>
        </InputContainer>

        <InputContainer>
          <InputName>Auto Play</InputName>
          <InputWrapper>
            <ToggleSwitch
              Name={`AutoPlay`}
              checked={autoPlay}
              handleToggle={() => setAutoPlay((prev) => !prev)}
            />
          </InputWrapper>
        </InputContainer>

        <InputContainer>
          <InputName>Auto Next</InputName>
          <InputWrapper>
            <ToggleSwitch Name={`AutoNext`} />
          </InputWrapper>
        </InputContainer>

        <InputContainer>
          <InputName>Skip seconds</InputName>
          <InputWrapper>
            <NumberInput type="number" min={1} max={10} value={10} />
          </InputWrapper>
        </InputContainer>

        <InputContainer>
          <InputName>Auto skip into</InputName>
          <InputWrapper>
            <ToggleSwitch Name={`AutoIntroSkip`} />
          </InputWrapper>
        </InputContainer>

        <InputContainer>
          <InputName>Auto skip outro</InputName>
          <InputWrapper>
            <ToggleSwitch Name={`AutoIntroOutro`} />
          </InputWrapper>
        </InputContainer>
        <ButtonContainer>
          <input type="submit" value="UPDATE" />
        </ButtonContainer>
      </FormContainer>
    </UserContainer>
  );
};
