import React from "react";
import { CustomFile, CustomFileInput, CustomFileLabel } from "./File.styles";

const FileInput = ({ name, buttonText, fileText }) => {
  return (
    <CustomFile>
      <CustomFileInput type="file" id={name} name={name} />
      <CustomFileLabel buttonText={buttonText} for={name}>
        {fileText}
      </CustomFileLabel>
    </CustomFile>
  );
};

export default FileInput;
