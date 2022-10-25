import styled from "styled-components";
import { CgStack } from "react-icons/cg";
import { rgba } from "polished";

export const EpisodesContainer = styled.div`
  position: relative;
`;
export const EpisodesPreWrapper = styled.div`
  position: absolute;
  width: 300px;
  visibility: hidden;
  bottom: calc(100% + 1.5rem);
  right: calc(100% - 2rem);
  transition: opacity 0.25s ease-in-out;
  opacity: 0;
  max-height: 400px;
  background: black;
  border-radius: 8px;
  overflow: hidden;
  &.toggle {
    opacity: 1;
    visibility: visible;
  }
`;

export const EpisodesTitle = styled.div`
  background: ${({ theme }) => theme.base.darkBg};
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  font-weight: 500;
  border-bottom: 1px solid ${({ theme }) => rgba(theme.text.offWhite, 0.3)};
`;

export const EpisodesWrapper = styled.div`
  max-height: 300px;
  overflow: auto;
`;

export const EpisodeIcon = styled(CgStack)``;
