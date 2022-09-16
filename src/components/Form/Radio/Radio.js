import React from "react";
import { Container, Label, Radio, Wrapper } from "./Radio.styles";

const RadioInput = ({ label, id, disabled, ...rest }) => {
  return (
    <Wrapper>
      <Container>
        <Radio type="radio" id={id} disabled={disabled} {...rest} />
        <Label htmlFor={id} disabled={disabled}>
          <span>{label}</span>
        </Label>
      </Container>
    </Wrapper>
  );
};

export default RadioInput;
