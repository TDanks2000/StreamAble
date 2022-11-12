import styled from "styled-components";

export const Wrapper = styled.div`
  display: inline-block;
  margin-top: 1rem;
  margin-left: 1rem;
  width: calc(100% - 350px - 1rem);
  @media (max-width: 1400px) {
    margin: 1rem 0;
    width: 100%;
  }
`;
