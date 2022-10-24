import styled from "styled-components";

export const ReadContainer = styled.div`
  width: 360px;
  height: 100%;
`;

export const PageImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 540px;
  margin: 1rem auto;
  & img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    background: ${({ color }) => (color ? color : "black")};
  }
`;

export const PageSelectorContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  text-align: center;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
  gap: 10px;
`;

export const PageSelectorButton = styled.div`
  width: 100px;
  padding: 10px 15px;
  border-radius: 8px;
  background: ${({ theme }) => theme.base.mainColor};
  font-size: 1.1rem;
  font-weight: bold;
  text-transform: uppercase;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.15s ease-in-out;
  display: inline-block;
  & * {
    display: inline-flex;
    align-items: center;
  }
  &:hover,
  &:focus {
    transform: scale(1.1);
  }
  &.disabled {
    &:hover {
      transform: scale(1);
      cursor: default;
    }
    background: ${({ theme }) => theme.text.secondary};
  }
`;

export const LastPage = styled(PageSelectorButton)``;
export const NextPage = styled(PageSelectorButton)``;

export const CurrentPage = styled.div`
  font-weight: bold;
`;
