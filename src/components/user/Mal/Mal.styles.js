import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeadBar = styled.div`
  width: 130%;
  padding-left: 25px;
  padding-right: 25px;
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
  line-height: 1rem;
  border-bottom: 1px solid #292929;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  margin-left: -2rem;
  margin-right: -2rem;
  margin-bottom: 2.5rem;
`;

export const HeadBarTabs = styled.div`
  display: flex;
  color: #666;
`;

export const HeadBarTab = styled(NavLink)`
  text-transform: uppercase;
  cursor: pointer;
  margin-right: 1rem;
  font-weight: 500;
  transition: color 0.2s;
  padding-bottom: 8px;
  position: relative;
  color: ${({ theme }) => theme.text.secondary};
  &.active,
  &:hover {
    font-weight: 600;
    color: ${({ theme }) => theme.text.offWhite};
  }
  &.active::after,
  &:hover::after {
    position: absolute;
    bottom: -1px;
    left: 0;
    height: 1px;
    content: "";
    background: ${({ theme }) => theme.text.offWhite};
    width: 100%;
  }
`;

export const FileInputContainer = styled.div`
  width: auto;
`;
