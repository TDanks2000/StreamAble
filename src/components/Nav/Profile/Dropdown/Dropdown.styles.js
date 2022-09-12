import { rgba } from "polished";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

export const DropdownContainer = styled.div`
  display: ${({ open }) => (open ? "block" : "none")};
  position: absolute;
  top: calc(100% - 0.3rem);
  right: 0;
  left: auto;
  z-index: 1000;
  float: left;
  min-width: 10rem;
  padding: 0.5rem 0;
  margin: 0.125rem 0 0;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.text.secondary};
  text-align: left;
  list-style: none;
  background-color: #242424;
  background-clip: padding-box;
  border: 1px solid ${({ theme }) => rgba(theme.base.darkBg, 0.15)};
  padding-bottom: 0;
  border-radius: 10px;
  overflow: hidden;
`;

export const DropdownItem = styled(Link)`
  display: block;
  width: 100%;
  padding: 0.3rem 1.5rem;
  clear: both;
  font-weight: 400;
  color: ${({ theme }) => theme.text.secondary};
  text-align: inherit;
  white-space: nowrap;
  background-color: transparent;
  border: 0;
  display: flex;
  align-items: center;
  & span {
    margin-left: 0.4rem;
  }
  &:hover {
    background: ${({ theme }) => theme.base.navBg};
    color: ${({ theme }) => theme.text.offWhite};
  }
`;

export const DropdownLogout = styled(DropdownItem)`
  background: ${({ theme }) => theme.base.darkBg};
  padding: 0.5rem 1.5rem;
  &:hover {
    background: ${({ theme }) => theme.base.darkBg};
  }
`;
