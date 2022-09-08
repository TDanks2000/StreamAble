import styled from "styled-components";

export const LeftNavContainer = styled.div`
  position: relative;
  width: 350px;
  float: left;
  background: ${({ theme }) => theme.base.navBg};
  padding: 2rem 3rem;
  border-radius: 7px;
`;

export const UserIcon = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  & img {
    width: 80%;
    object-fit: cover;
    border-radius: 50%;
    border: 0.5rem solid ${({ theme }) => theme.base.mainColor};
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
