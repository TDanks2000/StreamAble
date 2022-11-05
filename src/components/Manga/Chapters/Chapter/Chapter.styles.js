import styled from "styled-components";

export const Container = styled.div`
  padding: 5px 7px;
  width: 90px;
  text-align: center;
  background: ${({ theme }) => theme.base.mainColor};
  font-size: 0.6rem;
  font-weight: bold;
  border-radius: 5px;
  overflow: hidden;
  transition: transform 0.15s ease-in-out;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  float: left;
  &:hover {
    position: relative;
    z-index: 5;
    text-decoration: underline;
  }
`;
