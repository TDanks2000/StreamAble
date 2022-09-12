import styled from "styled-components";

export const Container = styled.div`
  width: 250px;
  height: 360px;
  overflow: hidden;
  flex-grow: 0;
  flex-shrink: 0;
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
  border-radius: 10px;
  overflow: hidden;
  -webkit-box-shadow: -8px 10px 40px -16px rgba(0, 0, 0, 0.5);
  box-shadow: -8px 10px 40px -16px rgba(0, 0, 0, 0.5);
`;

export const Info = styled.div`
  width: 100%;
  margin-top: 0.8rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const InfoItem = styled.div`
  margin-bottom: 3px;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.text.offWhite};
  &:first-letter {
    text-transform: uppercase;
  }
  &:first-of-type {
    color: ${({ theme }) => theme.text.primary};
  }
`;

export const Name = styled(InfoItem)`
  font-size: 1rem;
`;

export const Role = styled(InfoItem)`
  text-transform: lowercase;
`;

export const Actor = styled(InfoItem)`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  gap: 0.6rem;
  overflow: hidden;
  margin-bottom: 0.3rem;
  font-size: 1rem;
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
  width: 30px;
  height: 30px;
  border-radius: 50%;
  overflow: hidden;
  flex-grow: 0;
  flex-shrink: 0;
`;
