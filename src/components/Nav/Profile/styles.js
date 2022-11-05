import { Link } from "react-router-dom";
import styled from "styled-components";

export const ProfileContainer = styled.div`
  position: relative;
  width: 200px;
  padding: 10px;
`;

export const ProfileImage = styled.div`
  width: 25px;
  height: 25px;
//   border: 0.1rem solid ${({ theme }) => theme.base.mainColor};
  border-radius 50%;
  overflow:hidden;
  flex-shrink: 0;
  flex-grow: 0;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ProfileUserName = styled.div`
  font-size: 1rem;
  font-weight: 500;
  flex-shrink: 0;
  flex-grow: 0;
  transition: opacity 0.2s ease-in-out;
  color: ${({ theme }) => theme.text.offWhite};
`;

export const ProfileLink = styled(Link)`
  text-transform: uppercase;
  text-align: right;
  display: inline-block;
  font-size: 1.1rem;
  margin-right: 10px;
  &:last-of-type {
    margin-right: 0;
  }
  &.active {
    border: none;
  }
`;

export const ProfileContent = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
  flex-wrap: nowrap;
  overflow: hidden;
  cursor: pointer;
  &:hover ${ProfileUserName} {
    opacity: 0.8;
  }
`;
