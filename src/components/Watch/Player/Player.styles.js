import styled from 'styled-components';

export const VideoWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  margin-inline: auto;
  background-color: black;
  overflow: hidden;
`;

export const VideoControlsContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  color: white;
  z-index: 100;
  transition: opacity 0.4s ease-in-out;
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.75), transparent);
    width: 100%;
    aspect-ratio: 6 / 1;
    z-index: -1;
    pointer-events: none;
  }
`;

export const FullContainer = styled.div`
  opacity: 1;
  &.hide {
    opacity: 0;
  }
  &.show {
    opacity: 1;
  }
`;
