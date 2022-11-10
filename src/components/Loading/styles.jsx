import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  & span {
    animation: ${rotate} 4s linear infinite;
    transform-origin: center;
    font-size: 2rem;
  }
`;
