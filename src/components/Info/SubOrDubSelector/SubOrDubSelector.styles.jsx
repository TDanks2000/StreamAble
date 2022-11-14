import styled from "styled-components";

export const Button = styled.button`
  font-size: 1.6rem;
  transition: all 0.25s ease-in-out;
  cursor: pointer;
  color: ${({ theme }) => theme.text.offWhite};
  &:hover {
    color: ${({ theme }) => theme.text.secondary};
    opacity: 0.8;
  }
  & * {
    display: flex;
    align-items: center;
  }
  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;
