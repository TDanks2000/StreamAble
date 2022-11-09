import styled from "styled-components";

export const Select = styled.select`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: button;
  -webkit-user-select: none;
  -moz-user-select: none;
  padding-left: 5px;
  border: none;
  outline: none;
  background: transparent;
  color: #fff;
  text-transform: uppercase;
  border-radius: 0;
  option {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: button;
    -webkit-user-select: none;
    -moz-user-select: none;
    border: none;
    outline: none;
    border-radius: 0;
    background: rgba(0, 0, 0, 0.2);
    font-weight: bold;
  }
`;
