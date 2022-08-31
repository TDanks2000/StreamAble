import styled from "styled-components";

export const AppWrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0.5rem 1.5rem;
  background-color: ${({ theme }) => theme.base.bg};
  color: ${({ theme }) => theme.text.primary};
`;
