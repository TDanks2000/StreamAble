import styled from "styled-components";

export const ReadContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const PageImage = styled.div`
  display: flex;
  justify-content: center;
  // align-items: center;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  & img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    // background: ${({ color }) => (color ? color : "black")};
    pointer-events: none;
  }
`;

export const PageSelectorButton = styled.div`
  position: absolute;
  top: 0;
  display: inline-block;
  width: 350px;
  height: 100%;
  cursor: pointer;
  // background: red;
  & * {
    display: inline-flex;
    align-items: center;
  }
  &:hover,
  &:focus {
  }
  &.disabled {
    &:hover {
      cursor: default;
    }
  }
`;

export const LastPage = styled(PageSelectorButton)`
  left: calc(450px - 10rem);
`;
export const NextPage = styled(PageSelectorButton)`
  right: calc(450px - 10rem);
`;

export const CurrentPage = styled.div`
  font-weight: bold;
`;
