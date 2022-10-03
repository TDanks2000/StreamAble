import styled from "styled-components";

export const LikeContainer = styled.div`
  font-size: 1.5rem;
  transition: all 0.25s ease-in-out;
  cursor: pointer;
  color: ${({ theme }) => theme.base.mainColor};
  &:hover {
    opacity: 0.8;
  }
  & * {
    display: flex;
    align-items: center;
  }
`;
