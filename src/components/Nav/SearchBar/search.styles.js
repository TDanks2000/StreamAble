import styled from "styled-components";

export const SearchContainer = styled.form`
  width: 450px;
  height: 100%;
  position: relative;
  display: flex;
  background: #1f1e1e;
  font-size: 1.1rem;
  padding: 0 10px;
  height: 36px;
  line-height: 36px;
  border-radius: 0.5rem;
`;

export const SearchBar = styled.input`
  z-index: 102;
  font-weight: 500;
  color: #aaa;
  flex-grow: 1;
  padding: 0 10px;
`;

export const SearchButton = styled.button`
  z-index: 102;
  width: 10%;
  text-align: center;
  padding: 4px 5px;
  color: ${({ theme }) => theme.text.offWhite};
  font-size: 1.5rem;
  transition: color 0.2s;
  border-left: none;
  cursor: pointer;
`;
