import React from "react";
import RadioInput from "./Radio";
import { Fieldset, Wrapper } from "./RadioButtonGroup.styles";

const RadioButtonGroup = ({ label, options, onChange }) => {
  const renderOptions = () => {
    return options.map(({ label, name, disabled }, index) => {
      const shortenedOptionLabel = label.replace(/\s+/g, "");
      const optionId = `radio-option-${shortenedOptionLabel}`;

      return (
        <RadioInput
          value={label}
          label={label}
          key={optionId}
          id={optionId}
          name={name}
          disabled={disabled}
          defaultChecked={index === 0}
          onChange={onChange}
        />
      );
    });
  };
  return (
    <Fieldset>
      <Wrapper>{renderOptions()}</Wrapper>
    </Fieldset>
  );
};

export default RadioButtonGroup;
