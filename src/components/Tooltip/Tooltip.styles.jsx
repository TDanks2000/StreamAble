import styled from "styled-components";

const margin = "30px";

export const TooltipWrapper = styled.div`
  display: inline-block;
  position: relative;
`;

export const TooltipTip = styled.div`
  position: absolute;
  border-radius: 4px;
  left: 50%;
  transform: translateX(-50%);
  padding: 6px;
  color: ${({ theme }) => theme.text.secondary};
  background: ${({ theme }) => theme.text.offWhite};
  font-size: 14px;
  line-height: 1;
  z-index: 100;
  white-space: nowrap;
  &.top {
    top: calc(${margin} * -1);
  }
  &.right {
    left: calc(100% + ${margin});
    top: 50%;
    transform: translateX(0) translateY(-50%);
  }
  &.bottom {
    bottom: calc(${margin} * -1);
  }
  &.left {
    left: auto;
    right: calc(100% + ${margin});
    top: 50%;
    transform: translateX(0) translateY(-50%);
  }
`;
