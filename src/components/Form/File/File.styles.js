import styled from "styled-components";

export const CustomFile = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
  height: calc(1.5em + 0.75rem + 2px);
  margin-bottom: 0;
`;

export const CustomFileInput = styled.input`
  position: relative;
  z-index: 2;
  width: 100%;
  height: calc(1.5em + 0.75rem + 2px);
  margin: 0;
  overflow: hidden;
  opacity: 0;
`;

export const CustomFileLabel = styled.label`
  font-size: 1.1rem;
  color: #777;
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.9rem;
  overflow: hidden;
  font-weight: 400;
  line-height: 1.5;
  background-color: #212121;
  border: 1px solid #303030;
  border-radius: 5px;
  &::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 3;
    display: block;
    height: calc(1.5em + 0.75rem);
    padding: 0.375rem 0.9rem;
    line-height: 1.5;
    color: #aaa;
    content: "${({ buttonText }) => (buttonText ? buttonText : "Browse")}";
    background-color: #666;
    border-left: inherit;
    border-radius: 0 5px 5px 0;
  }
`;
