import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const TopNavContainer = styled.div`
  display: inline-block;
  margin-left: 10px;
  padding: 1rem;
  margin-left: 1rem;
  width: calc(100% - 350px - 1rem);
  background: ${({ theme }) => theme.base.navBg};
  border-radius: 7px;
`;

export const TopNavLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 2.5rem;
`;

export const TopNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.text.offWhite};
  font-weight: 500;
  font-size: 1rem;
  text-transform: uppercase;
  & *:not(span) {
    margin-right: 0.3rem;
    display: flex;
    align-items: center;
  }
  &.active {
    font-weight: 600;
  }
`;
