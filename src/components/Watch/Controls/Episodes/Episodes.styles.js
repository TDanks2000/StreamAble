import styled, { keyframes } from "styled-components";
import { CgStack } from "react-icons/cg";

export const EpisodesContainer = styled.div`
  position: relative;
`;

export const EpisodesWrapper = styled.div`
  opacity: 0;
  visibility: hidden;
  position: absolute;
  width: 300px;
  max-height: 400px;
  overflow: auto;
  background: black;
  bottom: calc(100% + 1.5rem);
  right: calc(100% - 2rem);
  transition: opacity 0.25s ease-in-out;
  border-radius: 8px;
  &.toggle {
    opacity: 1;
    visibility: visible;
  }
`;

export const EpisodeIcon = styled(CgStack)``;
