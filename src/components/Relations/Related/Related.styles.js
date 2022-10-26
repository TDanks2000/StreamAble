import { Link } from "react-router-dom";
import styled from "styled-components";

export const Inner = styled.div`
  padding: 1rem 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.55);
  border-radius: 8px;
  //   border: 1px solid ${({ theme }) => theme.base.mainColor};
`;

const RelatedText = styled.p`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  line-height: 1;
  text-transform: uppercase;
`;

export const RelatedName = styled(RelatedText)`
  font-weight: bold;
`;
export const RelatedType = styled(RelatedText)`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.text.offWhite};
  font-weight: 500;
`;

export const Container = styled(Link)`
  width: 200px;
  background: url(${({ image }) => image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  &:hover,
  &:focus {
    & ${RelatedName} {
    text-decoration: underline;
  }
`;
