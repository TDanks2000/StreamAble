import { Link } from "react-router-dom";
import styled from "styled-components";

export const ItemContainer = styled(Link)`
  display: flex;
  padding: 15px 15px;
  position: relative;
  transition: all 0.3s ease;
  &:hover {
    background: ${({ theme }) => theme.base.mainColor};
  }
`;

export const Poster = styled.div`
  width: 45px;
  flex-shrink: 0;
  position: relative;
  & span {
    position: relative;
    width: 100%;
    padding-bottom: 130%;
    display: block;
    & img {
      position: absolute;
      width: 100%;
      height: 100%;
    }
  }
`;

export const Info = styled.div`
  margin-left: 10px;
`;

export const Name = styled.div`
  color: ${({ theme }) => theme.text.offWhite};
  font-weight: 500;
  margin-bottom: 6px;
  display: block;
  font-size: 1.1rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-height: 1.5rem;
  max-height: 3rem;
  overflow: hidden;
`;

export const Meta = styled.div`
  color: #515151;
  font-size: 1rem;
`;
