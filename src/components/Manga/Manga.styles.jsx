import styled from "styled-components";

export const MangaContainer = styled.div`
  width: 100%;
  height: 100%;
  //   overflow: hidden;
`;

export const MangaTop = styled.div`
  width: 100%;
  height: 300px;
  position: absolute;
  left: 0;
  top: 0;
`;

export const MangaBG = styled.div`
  width: 100%;
  height: 100%;
  //   filter: blur(1px);
  & img {
    position: relative;
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
  }
  &:after {
    content: " ";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.55);
    transition: all 1s;
    -webkit-transition: all 1s;
  }
`;

export const TopInfo = styled.div`
  position: absolute;
  bottom: 0;
  left: 17%;
  width: 56%;
  z-index: 4;
  @media (min-width: 1700px) {
    left: calc(16% + 3.2rem);
  }
`;

export const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: bold;
  text-transform: uppercase;
  line-height: 1;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const MangaWrapper = styled.div`
  position: relative;
  //   overflow: hidden;
  margin-top: 4rem;
`;

export const MangaImage = styled.div`
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
`;

const MangaLR = styled.div`
  height: 100%;
  //   display: flex;
  //   align-items: center;
`;

export const Left = styled(MangaLR)`
  width: 15%;
  float: left;
  margin-top: 2rem;
`;

export const Right = styled(MangaLR)`
  width: calc(100% - 16%);
  float: right;
  margin-top: calc(300px - 37px - 2rem);
`;

export const Desc = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.text.offWhite};
  font-size: 0.9rem;
`;

export const Top = styled.div`
  width: 100%;
  overflow: hidden;
`;

export const Bottom = styled.div`
  width: 100%;
  overflow: hidden;
  margin-top: 2rem;
`;

export const BottomLeft = styled.div`
  float: left;
  width: 72%;
  // overflow: hidden;
`;

export const BottomRight = styled.div`
  float: right;
  width: 25%;
  overflow: hidden;
`;
