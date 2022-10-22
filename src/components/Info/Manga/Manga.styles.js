import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const Button = styled.div`
  display: inline-block;
  padding: 5px 10px;
  background: ${({ theme }) => theme.base.mainColor};
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  font-size: 0.8rem;
  &:hover,
  &:focus {
    opacity: 0.8;
  }
  &:focus {
    outline: 3px solid rgba(0, 0, 0, 0.4);
  }
`;
