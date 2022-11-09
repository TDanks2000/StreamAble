import styled from "styled-components";

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-right: 10px;
  padding-left: 10px;
  flex: 0 0 41.66666667%;
  max-width: 41.66666667%;
`;

export const NumberInput = styled.input`
  width: 90px !important;
  display: block;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.9rem;
  font-size: 1.1rem;
  font-weight: 400;
  line-height: 1.5;
  color: ${({ theme }) => theme.text.secondary};
  background-color: #212121;
  background-clip: padding-box;
  border: 1px solid #303030;
  border-radius: 5px;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;

const SeparatorMargin = "1.5rem";
export const InputSeparator = styled.div`
  position: relative;
  left: 0;
  width: 130%;
  margin: ${SeparatorMargin} 0 ${SeparatorMargin} -5rem;
  height: 1px;
  border-top: 0.1rem dotted ${({ theme }) => theme.text.offWhite};
`;
