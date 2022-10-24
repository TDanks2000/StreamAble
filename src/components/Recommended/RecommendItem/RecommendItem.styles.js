import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(Link)`
  display: flex;
  position: relative;
  margin-bottom: 0.5rem;
  cursor: pointer;
  &:hover img {
    transform: scale(1.1);
  }
`;

export const Inner = styled.div`
  background: ${({ theme }) => theme.base.navBg};
  border-radius: 5px;
  overflow: hidden;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
`;

export const Left = styled.div`
  width: 70px;
  flex-shrink: 0;
  position: relative;

  overflow: hidden;
`;

export const Poster = styled.span`
  position: relative;
  width: 100%;
  padding-bottom: 130%;
  display: block;
  & img {
    transition: all 0.25s ease-in-out;
    position: absolute;
    width: 100%;
    height: 100%;
  }
`;

export const Right = styled.div`
  padding: 5px 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.div`
  color: ${({ theme }) => theme.text.secondary};
  font-weight: 500;
  margin-bottom: 6px;
  display: block;
  font-size: 1.2rem;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  line-height: 1.5rem;
  max-height: 3rem;
  overflow: hidden;
`;

export const Meta = styled.div`
  font-size: 0.95rem;
`;

export const Dot = styled.span`
  text-transform: uppercase;
  & + ::before {
    content: "";
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: ${({ theme }) => theme.text.secondary};
    vertical-align: middle;
    display: inline-block;
    margin: 0 8px;
  }
`;
