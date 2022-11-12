import styled from "styled-components";

export const LeftNavWrapper = styled.div`
  position: relative;
  width: 350px;
  @media (max-width: 1400px) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
`;

export const LeftNavContainer = styled.div`
  position: relative;
  width: 350px;
  background: ${({ theme }) => theme.base.navBg};
  padding: 2rem 3rem;
  border-radius: 7px;
  float: left;
  @media (max-width: 700px) {
    width: 300px;
    padding: 2rem 3rem;
  }

  @media (max-width: 1400px) {
    width: 500px;
  }
`;

export const UserIconWrapper = styled.div`
  position: relative;
  width: 100%;
  text-align: center;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const ImageHiddenInput = styled.input`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const ImageHover = styled.div`
  visibility: hidden;
  opacity: 0;
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  pointer-events: none;
  transition: all 0.25s ease-in-out;
  & span {
    font-size: 1rem;
    font-weight: bold;
  }
`;

export const UserIcon = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 0.5rem solid ${({ theme }) => theme.base.mainColor};
  background: ${({ theme }) => theme.base.mainColor};
  cursor: pointer;
  overflow: hidden;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &:hover ${ImageHover} {
    visibility: visible;
    opacity: 1;
  }
`;

export const UserName = styled.h1`
  font-size: 1.7rem;
  text-align: center;
  margin-top: 1rem;
`;

export const UnderInfo = styled.div`
  color: ${({ theme }) => theme.text.secondary};
  margin-top: 0.5rem;
  font-size: 1.2rem;
  & span {
    float: right;
  }
`;

export const UnderInfoContainer = styled.div`
  margin-top: 1.5rem;
  margin-bottom: 2rem;
`;

export const Bottom = styled.div`
  background: ${({ theme }) => theme.base.darkBg};
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 10px 2rem;
  justify-content: flex-end;
  border-radius: inherit;
`;

export const LogOutText = styled.div`
  display: flex;
  font-size: 1.2rem;
  text-transform: uppercase;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  & span {
    display: flex;
    align-items: center;
  }
  &:hover {
    color: ${({ theme }) => theme.text.offWhite};
  }
`;
