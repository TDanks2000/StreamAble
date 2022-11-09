import React from "react";
import { Container, Label, Radio } from "./Radio.styles";

const RadioInput = ({ label, id, disabled, ...rest }) => {
  return (
    <Container>
      <Radio type="radio" id={id} disabled={disabled} {...rest} />
      <Label htmlFor={id} disabled={disabled}>
        <span>{label}</span>
      </Label>
    </Container>
  );
};

export default RadioInput;
