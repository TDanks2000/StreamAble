import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div``;

export const Button = styled(Link)`
  font-size: 1.6rem;
  transition: all 0.25s ease-in-out;
  cursor: pointer;
  color: ${({ theme }) => theme.text.offWhite};
  &:hover,
  &:focus {
    color: ${({ theme }) => theme.text.secondary};
    opacity: 0.8;
  }
  &:focus {
    outline: 3px solid rgba(0, 0, 0, 0.4);
  }
  & * {
    display: flex;
    align-items: center;
  }
  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;
