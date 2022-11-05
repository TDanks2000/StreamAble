import { rgba } from "polished";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const NewsPostContainer = styled.div`
  position: relative;
  width: 450px;
  background: ${({ theme }) => rgba(theme.base.darkBg, 0.75)};
  border-radius: 5px;
  overflow: hidden;
`;

export const NewsPostImg = styled.div`
  position: relative;
  width: 100%;
  height: 225px;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
  }
`;

export const NewsPostTopic = styled(Link)`
  position: absolute;
  left: 0;
  top: 0;
  padding: 8px 11px;
  border-bottom-right-radius: 5px;
  background: ${({ theme }) => theme.base.mainColor};
  overflow: hidden;
  & * {
    font-weight: bold;
    text-transform: uppercase;
  }
  &:hover {
    text-decoration: underline;
  }
`;

export const NewsPostAfterImg = styled.div`
  padding: 5px;
  &::before {
    background-size: 100%;
    background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 90%,
      rgba(0, 0, 0, 0.9) 100%
    );
    content: " ";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    pointer-events: none;
  }
`;

export const NewsPostTitle = styled.div`
  margin-top: 0.15rem;
  margin-bottom: 0.25rem;
  width: 100%;
  font-size: 1rem;
  color: ${({ theme }) => theme.text.offWhite};
`;
export const NewsPostDate = styled.div`
  margin: 0.25rem 0;
  width: 100%;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.text.secondary};
`;

export const NewsPostDesc = styled.div`
  width: 100%;
  font-size: 0.85rem;
  color: ${({ theme }) => theme.text.secondary};
  & span {
    color: ${({ theme }) => theme.text.offWhite};
  }
`;
