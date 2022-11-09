import styled, { keyframes } from "styled-components";
import { ImSpinner8 } from "react-icons/im";

const spin = keyframes`
from {
    transform:rotate(0deg);
}
to {
    transform:rotate(360deg);
}
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
`;

export const BufferIcon = styled(ImSpinner8)`
  font-size: 5rem;
  color: ${({ theme }) => theme.text.primary};
  animation-name: ${spin};
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;
