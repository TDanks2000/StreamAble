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
  justify-content: center;
  gap: 2rem;
`;

export const TopNavLink = styled(NavLink)`
  font-size: 1.5rem;
  text-transform: uppercase;
  font-weight: 300;
  &.active {
    font-weight: 600;
  }
`;
