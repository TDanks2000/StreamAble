import React from "react";
import FileInput from "../../Form/File";
import RadioButtonGroup from "../../Form/Radio";
import { ButtonContainer } from "../Profile/UserProfile.styles";
import {
  FormContainer,
  FormText,
  InputContainer,
  InputName,
  InputWrapper,
  UserContainer,
} from "../styles";
import { HeadBar, HeadBarTab, HeadBarTabs } from "./Mal.styles";

const importModeOptions = [
  {
    label: "Merge",
    name: "importModeRadio",
  },
  {
    label: "Replace",
    name: "importModeRadio",
  },
];

export const UserMalComponent = () => {
  return (
    <UserContainer>
      <HeadBar>
        <HeadBarTabs>
          <HeadBarTab to={"/user/mal"}>Import</HeadBarTab>
          <HeadBarTab to={"/user/mal/export"}>Export</HeadBarTab>
        </HeadBarTabs>
      </HeadBar>
      <FormContainer>
        <InputContainer>
          <InputName>Mal Username</InputName>
          <InputWrapper>
            <input type="text" placeholder="Enter your username here" />
          </InputWrapper>
        </InputContainer>
        <InputContainer>
          <InputName>or use a mal text file</InputName>
          <InputWrapper>
            <FileInput name={"malTextFile"} fileText="Choose file" />
            <FormText>
              You can upload a text file (TXT) that contains a list of MAL urls
              <br />
              that you want to import. If you choose file to import, above field
              (MAL username) will be ignored.
            </FormText>
          </InputWrapper>
        </InputContainer>
        <InputContainer>
          <InputName>Import Mode</InputName>
          <InputWrapper>
            <RadioButtonGroup options={importModeOptions} />
            <FormText>
              Merge: Merge your existing list with your MAL list.
              <br />
              Replace: Delete your existing list, then import your MAL list.
            </FormText>
          </InputWrapper>
        </InputContainer>
        <ButtonContainer>
          <input type="submit" value="IMPORT" />
        </ButtonContainer>
      </FormContainer>
    </UserContainer>
  );
};
