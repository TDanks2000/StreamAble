import styled from "styled-components";

export const Container = styled.div`
  width: 250px;
  // height: 360px;
  padding-bottom: 0.5rem;
  overflow: hidden;
  flex-grow: 0;
  flex-shrink: 0;
  background: ${({ theme }) => theme.base.navBg};
  // padding: 0.5rem;
  border-radius: 10px;
  overflow: hidden;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    pointer-events: none;
  }
`;

export const CharacterImage = styled.div`
  width: 100%;
  height: 250px;
  // border-radius: 10px;
  overflow: hidden;
  -webkit-box-shadow: -8px 10px 40px -16px rgba(0, 0, 0, 0.5);
  box-shadow: -8px 10px 40px -16px rgba(0, 0, 0, 0.5);
`;

export const Info = styled.div`
  width: 100%;
  margin-top: 0.25rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0 0.7rem;
`;

const InfoItem = styled.div`
  margin-bottom: 3px;
  font-size: 0.9rem;
  white-space: nowrap;
  overflow: hidden;
  color: ${({ theme }) => theme.text.offWhite};
  &:first-letter {
    text-transform: uppercase;
  }
  &:first-of-type {
    color: ${({ theme }) => theme.text.primary};
  }
`;

export const Name = styled(InfoItem)`
  display: inline-block;
  font-size: 1.4rem;
  text-transform: uppercase;
`;

export const Role = styled.span`
  display: inline-block;
  font-size: 0.85rem;
  text-transform: lowercase;
  font-weight: 300;
  color: ${({ theme }) => theme.text.offWhite};
  padding-left: 0.35rem;
`;

export const Actor = styled(InfoItem)`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  gap: 0.6rem;
  overflow: hidden;
  // margin-bottom: 0.3rem;
  font-size: 1rem;
  margin-top: -3px;
`;

export const ActorName = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  &:first-letter {
    text-transform: uppercase;
  }
`;

export const ActorImage = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 0.35rem;
  margin-right: 0.25rem;
  overflow: hidden;
  flex-grow: 0;
  flex-shrink: 0;
`;
