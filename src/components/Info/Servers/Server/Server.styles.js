import styled from "styled-components";

export const ServerContainer = styled.div`
  padding: 0.45rem 0.75rem;
  background: ${({ theme }) => theme.base.offDarkBg};
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    opacity: 0.8;
  }
  &.active {
    background: ${({ theme }) => theme.base.mainColor};
  }
`;
