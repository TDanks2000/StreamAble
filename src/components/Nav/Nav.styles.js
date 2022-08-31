import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavContainer = styled.nav`
  width: 100%;
  padding: 0.7rem 1.5rem;
  display: flex;
  justify-content: flex-start;
  gap: 1.5rem;
  align-items: center;
  background-color: ${({ theme }) => theme.base.navBg};
  color: ${({ theme }) => theme.text.primary};
`;

export const Logo = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-size: 2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.base.mainColor};
`;

export const LinkContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  gap: 1rem;
`;
export const Link = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  &.active {
    color: ${({ theme }) => theme.base.mainColor};
    border-bottom: 1px solid ${({ theme }) => theme.base.mainColor};
    margin-bottom: 3px;
  }
`;

export const Right = styled.div`
  margin-left: auto;
`;

export const ProfileLink = styled(Link)`
  font-size: 1.5rem;
  &.active {
    border: none;
  }
`;

export const SearchContainer = styled.div`
  display: block;
  position: relative;
  width: 400px;
  height: 100%;
`;
