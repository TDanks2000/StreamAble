import styled from "styled-components";

export const SearchOutputContainer = styled.div`
  display: none;
  background: #171717;
  position: absolute;
  padding-top: 39.6px;
  top: -1px;
  left: -1px;
  right: -1px;
  border-radius: 0.5rem;
  overflow: hidden;
  font-size: 1.1rem;
  line-height: normal;
  border: 1px solid #292929;
  z-index: 101;
  width: 100%;
  &.show {
    display: block;
  }
  &.hide {
    display: none;
  }
`;
