import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const EpisodesContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.base.navBg};
  overflow: hidden;
  // margin-top: 0.5rem;
`;

export const EpisodesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 0;
  width: 100%;
  max-height: 93%;
  overflow-y: auto;
`;

export const Episode = styled(NavLink)`
  width: 100%;
  font-size: 1rem;
  font-weight: 500;
  text-transform: uppercase;
  background: ${({ theme }) => theme.base.navBg};
  padding: 0.6rem 0.8rem;
  transition: all 0.1s ease-in-out;
  cursor: pointer;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  &:hover,
  &.active {
    background: ${({ theme }) => theme.base.mainColor};
    color: black;
  }
`;

export const EpisodesTitle = styled.h1`
  font-size: 1.5rem;
  text-align: center;
  background: ${({ theme }) => theme.base.navBg};
  padding: 0.3rem 0;
  text-transform: uppercase;
  font-weight: bold;
`;
