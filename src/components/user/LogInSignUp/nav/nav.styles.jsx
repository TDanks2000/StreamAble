import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const LoginNavContainer = styled.div`
  width: 100%;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.base.darkBg};
  color: ${({ theme }) => theme.text.primary};
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

export const LoginLink = styled(NavLink)`
  text-transform: uppercase;
  color: inherit;
  font-size: 1.5rem;
  font-weight: 400;
  &.active {
    font-weight: bold;
  }
`;
