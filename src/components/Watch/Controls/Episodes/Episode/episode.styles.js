import styled from "styled-components";

export const EpisodeContainer = styled.div`
  width: 100%;
  height: 55px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.text.offWhite};
  cursor: pointer;
  &.active {
    background: rgba(255, 255, 255, 0.2);
  }
  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
`;

const LR = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

export const Left = styled(LR)`
  width: 90px;
`;

export const ImgContainer = styled.div`
  width: 100%;
  height: 100%;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Right = styled(LR)`
  width: calc(100% - 95px);
  padding: 0.5rem;
  float: right;
`;

export const EpisodeName = styled.p`
  font-weight: 500;
  font-size: 0.8rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  line-clamp: 2;
  -webkit-box-orient: vertical;
  text-align: left;
`;
