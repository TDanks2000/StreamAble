import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 0.4rem;
`;

export const Genre = styled.span`
  font-size: 1rem;
  font-weight: 500;
  text-transform: uppercase;
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.text.offWhite};
  margin-bottom: 0.5rem;
  cursor: pointer;
  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;
