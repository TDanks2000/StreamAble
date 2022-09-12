import styled from "styled-components";
import { Link } from "react-router-dom";

export const PostContainer = styled(Link)`
  position: relative;
  width: 170px;
  height: 240px;
  background-image: url(${({ image }) => image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin-bottom: 10px;
  overflow: hidden;
  border-radius: 7px;
  transition: all 0.1s ease-in;
  &:hover {
    transform: scale(1.01);
  }
  @media (min-width: 1700px) {
    width: 215px;
    height: 310px;
  }
`;

export const PostWrapper = styled.div`
  padding: 5px;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent);
`;

const PostPos = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  padding: inherit;
`;

export const PostBottom = styled(PostPos)`
  bottom: 0;
`;

export const PostTitle = styled.p`
  width: 100%;
  height: 100%;
  font-size: 0.9rem;
  font-weight: bold;
  color: #fff;
  text-align: left;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

export const PostTop = styled(PostPos)`
  display: flex;
  justify-content: flex-start;
  top: 0;
`;

export const PostRatingWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const PostRating = styled.span`
  background: rgba(0, 0, 0, 0.7);
  padding: 0.3rem 0.6rem;
  border-radius: 5px;
  overflow: hidden;
  font-weight: 500;
  font-size: 0.8rem;
`;

export const PostMeta = styled.div`
  margin-top: 0.25rem;
  font-size: 0.75rem;
`;

export const Dot = styled.span`
  & + ::before {
    content: "";
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: ${({ theme }) => theme.text.secondary};
    vertical-align: middle;
    display: inline-block;
    margin: 0 8px;
  }
`;
