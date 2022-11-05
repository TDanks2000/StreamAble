import styled from "styled-components";

export const CharactersContainer = styled.div`
  padding: 1rem 0;
`;

export const CharactersTitle = styled.h2`
  width: 100%;
  font-size: 2rem;
  text-transform: uppercase;
`;

export const CharactersWrapper = styled.div`
  margin-top: 10px;
  overflow-x: auto;
  overscroll-behavior-inline: contain;

  scroll-snap-type: inline mandatory;
  scroll-padding-inline: 2rem;

  display: flex;
  flex-direction: row;
  flex-wrap: no-wrap;
  gap: 1rem;
  // padding: 0 5px;
  padding-bottom: 1rem;

  & > * {
    scroll-snap-align: start;
  }
`;
