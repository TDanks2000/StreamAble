import styled from "styled-components";

export const PaginateItem = styled.li`
  padding: 0 12px;
  height: 32px;
  text-align: center;
  margin: auto 4px;
  color: ${({ theme }) => theme.text.primary};
  display: flex;
  box-sizing: border-box;
  align-items: center;
  letter-spacing: 0.01071em;
  border-radius: 16px;
  line-height: 1.43;
  font-size: 13px;
  min-width: 32px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
    cursor: pointer;
  }
  &.selected {
    background-color: rgba(0, 0, 0, 0.08);
  }
  &.disabled {
    pointer-events: none;
    &:hover {
      background-color: transparent;
      cursor: default;
    }
  }
`;

export const PaginationContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style-type: none;
`;

export const Dots = styled(PaginateItem)`
  &::hover {
    background-color: transparent;
    cursor: default;
  }
`;

export const Arrow = styled(PaginateItem)`
  display: inline-block;
  font-size: 1rem;
  margin-top: 0.45rem;
`;
