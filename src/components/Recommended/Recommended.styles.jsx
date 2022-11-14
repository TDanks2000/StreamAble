import styled from "styled-components";

export const Container = styled.div`
  float: left;
  margin-top: 0.5rem;
  width: 100%;
  overflow: hidden;
  @media (max-width: 750px) {
    display: none;
    opacity: 0;
  }
`;

export const Wrapper = styled.div`
  margin-top: 0.25rem;
  width: 100%;
  overflow-y: auto;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  text-align: center;
  padding: 0.5rem 0;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  font-weight: bold;
  background: ${({ theme }) => theme.base.navBg};
  border-radius: 4px;
  overflow: hidden;
`;
