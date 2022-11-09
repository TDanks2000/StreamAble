import styled from "styled-components";

export const ControlsWrapper = styled.div`
  display: flex;
  gap: 0.25rem;
  padding: 0.8rem 0.5rem;
  align-items: center;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  outline: none;
  color: inherit;
  padding: 0;
  height: 30px;
  width: 30px;
  font-size: 1.1rem;
  cursor: pointer;
  opacity: 0.85;
  transition: opacity 150ms ease-in-out;
`;
