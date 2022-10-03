import { Link } from "react-router-dom";
import styled from "styled-components";

export const InfoContainer = styled.div`
  width: 100%;
  overflow: hidden;
  // position: relative;
  padding-bottom: 1rem;
`;

export const InfoBg = styled.img`
  position: absolute;
  top: 6rem;
  z-index: 0;
  left: 0;
  width: 100%;
  height: 700px;
  object-fit: cover;
  filter: blur(18px);
  // -webkit-filter: blur(8px);
  border-radius 5%;
  overflow: hidden;
`;

export const InfoTitle = styled.h1`
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
  font-size: 1.6rem;
  font-weight: bold;
  text-transform: uppercase;
  // color: ${({ color }) => color};
  & span {
    width: 80%;
    display: flex;
    align-items: center;
  }
`;

export const InfoTopBot = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  position: relative;
  overflow: hidden;
  margin-bottom: 0.5rem;
`;

export const InfoTop = styled(InfoTopBot)`
  height: 700px;
`;

export const InfoBottom = styled(InfoTopBot)`
  height: auto;
`;

export const EpisodeTitle = styled.span`
  width: 100%;
  color: ${({ theme }) => theme.text.offWhite};
  font-size: 0.9rem;
  font-weight: 300;
  margin-top: -0.4rem;
`;

export const InfoLeft = styled.div`
  width: 66.4%;
  height: 100%;
`;

export const InfoRight = styled.div`
  width: 32%;
  height: 100%;
`;

export const InfoGenreWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.5rem;
  margin: 0.1rem 0;
`;

export const InfoGenre = styled(Link)`
  font-size: 1rem;
  font-weight: 500;
  text-transform: uppercase;
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.text.offWhite};
  margin-bottom: 0.5rem;
  &:hover {
    text-decoration: underline;
  }
`;

export const InfoSynopsis = styled.p`
  font-size: 1rem;
  font-weight: 500;
`;

export const PlayerContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background: black;
`;
