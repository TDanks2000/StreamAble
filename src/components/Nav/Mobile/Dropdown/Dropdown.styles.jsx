import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  position: relative;
`;

export const Wrapper = styled.div`
  width: 120px;
  position: absolute;
  top: calc(100% + 2.7rem);
  z-index: 100;
  right: -1rem;
  background: ${({ theme }) => theme.base.navBg};
  padding: 1rem 1.5rem;
  border-radius: 8px;
  overflow: hidden;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 0.8rem;
`;

export const ListItem = styled.li`
  color: ${({ theme }) => theme.text.offWhite};
  transition: all 0.25s ease-in-out;
  font-size: 1rem;
  text-transform: uppercase;
  &:hover,
  &:focus {
    opacity: 0.8;
  }
`;

export const ListItemLink = styled(NavLink)``;
