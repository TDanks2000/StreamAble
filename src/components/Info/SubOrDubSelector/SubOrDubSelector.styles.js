import styled from "styled-components";

export const Button = styled.button`
  padding: 0.3rem 0.5rem;
  background: ${({ theme }) => theme.base.mainColor};
  color: ${({ theme }) => theme.text.mainColor};
  text-transform: uppercase;
  cursor: pointer;
  border-radius 5px;
  margin-bottom: 1rem;
  &:hover {
    opacity: .8;
  }
`;
