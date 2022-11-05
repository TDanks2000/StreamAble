import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  overflow: hidden;
  width: 30px;
  text-align: center;
  background: ${({ theme }) => theme.base.darkBg};
`;

export const WatchedAmount = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: ${({ progress }) => progress}%;
  background: ${({ theme }) => theme.base.mainColor};
  overflow: hidden;
`;

export const WatchedAmountText = styled.span`
  width: 100px;
  text-align: left;
  height: 40px;
  transform: rotate(-90deg);
  position: absolute;
  bottom: 100px;
  width: 140px;
  line-height: 40px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  left: -56px;
  top: -15px;
  text-transform: uppercase;
  font-size: 1.5rem;
  z-index: 2;
`;
