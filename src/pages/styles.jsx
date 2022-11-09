import { Link } from "react-router-dom";
import styled from "styled-components";

export const Error = styled.div`
  width: 100%;
  padding-top: 1rem;
  font-weight: 500;
  text-align: center;
  font-size: 2rem;
  color: ${({ theme }) => theme.text.danger};
  text-transform: uppercase;
`;

const GoBackContainer = styled.div`
  width: 100%;
  text-align: center;
`;

const GoBackButton = styled(Link)`
  font-weight: bold;
  text-transform: uppercase;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text.warning};
  transition: 0.2s ease;
  &:hover {
    opacity: 0.6;
  }
`;

export const GoBack = () => (
  <GoBackContainer>
    <GoBackButton to={"/"}>Go Back</GoBackButton>
  </GoBackContainer>
);
