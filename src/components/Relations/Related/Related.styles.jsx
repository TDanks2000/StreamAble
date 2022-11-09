import { Link } from "react-router-dom";
import styled from "styled-components";

export const Inner = styled.div`
  transition: all 0.2s ease-in-out;
  position: relative;
  padding: 1.5rem 0;
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
  transition: all 0.2s ease-in-out;
  font-weight: bold;
`;

export const RelatedType = styled(RelatedText)`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.text.offWhite};
  font-weight: 500;
`;

export const RelatedTitle = styled(RelatedText)`
  font-size: 0.5rem;
  color: ${({ theme }) => theme.text.offWhite};
  font-weight: 500;
  margin-top: 3px;
`;

export const Container = styled.div`
  position: relative;
  width: 220px;
  background: url(${({ image }) => image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
  border-radius: 8px;
  overflow: hidden;
`;

export const Wrapper = styled(Link)`
  width: 100%;
  height: 100%;
  &:hover,
  &:focus {
    & ${RelatedName} {
      text-decoration: underline;
    }
    & ${Inner} {
      background: rgba(0, 0, 0, 0.7);
    }
  }
`;
