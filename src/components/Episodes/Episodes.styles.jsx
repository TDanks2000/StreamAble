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

export const Episode = styled(NavLink)`
  position: relative;
  width: 100%;
  font-size: 1rem;
  font-weight: 500;
  text-transform: uppercase;
  background: ${({ theme }) => theme.base.navBg};
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  color: ${({ isFiller, theme }) =>
    isFiller ? theme.base.mainColor : "inherit"};
  &:hover,
  &.active {
    // background: ${({ theme }) => theme.base.mainColor};
    background: url(${({ image }) => image});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    color: ${({ isFiller, theme }) =>
      isFiller ? theme.text.warning : "inherit"};
  }
`;

export const EpisodeInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(5px);
  padding: 0.6rem 0.8rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  & span {
    position: relative;
    z-index: 1;
  }
  &:hover,
  &.active {
    background: rgba(0, 0, 0, 0.75);
  }
`;

export const EpisodesTitle = styled.h1`
  position: relative;
  font-size: 1.5rem;
  text-align: center;
  background: ${({ theme }) => theme.base.navBg};
  padding: 0.3rem 0;
  text-transform: uppercase;
  font-weight: bold;
  z-index: 1;
`;

export const EpisodesWrapper = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: flex-start;
  gap: 0;
  width: 100%;
  max-height: 80%;
  overflow-y: auto;
  &.name {
    justify-content: flex-end;
  }
  &.number {
    padding: 10px;
    justify-content: space-between;
    gap: 10px;
    & ${Episode} {
      font-size: 0.6rem;
      text-align: center;
      font-weight: bold;
      width: 13%;
      border-radius: 8px;
      overflow: hidden;
      & ${EpisodeInner} {
        background: rgba(0, 0, 0, 0.5);
      }
    }
  }
`;

export const PaginationContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 0.5rem 1rem;
  background: ${({ theme }) => theme.base.navBg};
  color: ${({ theme }) => theme.text.primary};
`;

export const NoEpisode = styled.div`
  width: 100%;
  font-size: 1.3rem;
  font-weight: 500;
  text-transform: uppercase;
  text-align: center;
  background: ${({ theme }) => theme.base.navBg};
  transition: all 0.2s ease-in-out;
  & ${EpisodeInner} {
    &:hover {
      background: none;
    }
  }
`;

export const IsFillerBg = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  // justify-content: flex-end;
  // justify-content: center;
  align-items: center;
  padding: 0 0.25rem;
  color: ${({ theme }) => theme.text.primary};
  z-index: 0;

  font-weight: bold;
  font-size: 2rem;
  letter-spacing: 0.5rem;
  opacity: 0.15;
`;
