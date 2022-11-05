import styled from "styled-components";

export const AppWrapper = styled.div`
  position: relative;
  margin-top: 0;
  background-color: ${({ theme }) => theme.base.bg};
  color: ${({ theme }) => theme.text.primary};
  width: 100%;
  min-height: 100vh;
  padding-bottom: 9rem;
`;

export const AppContainer = styled.div`
  padding: 1rem 1.5rem;
  margin: 0 auto;
  width: 100%;
  max-width: 1800px;
  height: 100%;
`;
