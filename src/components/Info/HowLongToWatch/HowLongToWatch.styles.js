import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-top: 0.5rem;
  font-size: 1.1rem;
  &:first-letter {
    text-transform: capitalize;
  }
  & bold {
    text-transform: uppercase;
    font-weight: bold;
  }
`;
