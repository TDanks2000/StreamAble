import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  margin: 0 0.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 95%;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 1rem 1.5rem;
  background: ${({ theme }) => theme.base.navBg};
  border-radius: 5px;
  overflow: hidden;
`;

export const GenreItem = styled(Link)`
  font-size: 1.2rem;
  border-radius: 5px;
  background: ${({ theme }) => theme.base.offDarkBg};
  padding: 0.5rem 1rem;
  text-align: center;
  transition: all 0.2s ease-in-out;
  &:hover,
  &:focus {
    opacity: 0.5;
  }
`;
