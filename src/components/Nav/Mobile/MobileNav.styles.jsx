import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled(Link)`
  width: 180px;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  font-size: 2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.base.mainColor};
  & img {
    pointer-events: none;
    width: 100%;
    height: 100%;
  }
`;

export const Menu = styled.div`
  display: inline-block;
  display: flex;
  align-items: center;
  font-size: 1.7rem;
`;
