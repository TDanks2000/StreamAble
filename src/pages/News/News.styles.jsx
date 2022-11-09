import styled from "styled-components";

export const Container = styled.div``;

export const Title = styled.div`
  margin-bottom: 10px;
  font-size: 2.2rem;
  text-transform: uppercase;
`;

export const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  display: grid;
  gap: 1rem;
  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;