import styled from "styled-components";

export const TopContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  color: white;
  z-index: 100;
  transition: opacity 0.4s ease-in-out;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.55), transparent);
    width: 100%;
    aspect-ratio: 11 / 1;
    z-index: -1;
    pointer-events: none;
  }
`;

export const TopWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0.5rem;
  align-items: center;
`;

export const EpTitle = styled.h2`
  font-size: 1.2rem;
  text-transform: uppercase;
  font-weight: 300;
  color: #fff;
  width: 100%;
  margin-top: -3px;
`;

export const TopTitle = styled.h2`
  font-size: 1.5rem;
  text-transform: uppercase;
  font-weight: bold;
  color: #fff;
  width: 100%;
`;
