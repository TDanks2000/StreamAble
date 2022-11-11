import { Link } from "react-router-dom";
import styled from "styled-components";

export const BannerItemInside = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(3px);
  padding: 0.5rem 3.2rem;
  transition: all 0.3s ease;
`;

export const BannerItemInfo = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  padding: inherit;
  text-align: left;
`;

export const BannerItemTitle = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  width: 100%;
  text-transform: uppercase;
  cursor: pointer;
  @media (min-width: 300px) {
    font-size: 1rem;
  }
`;

export const BannerGenreWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.5rem;
  margin-bottom: 0.1rem;
`;

export const BannerGenre = styled(Link)`
  position: relative;
  z-index: 200;
  font-size: 1rem;
  font-weight: 500;
  text-transform: uppercase;
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.text.offWhite};
  margin-bottom: 0.5rem;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const BannerItemDesc = styled.h1`
  font-size: 1rem;
  font-weight: 500;
  width: 100%;
  color: ${({ theme }) => theme.text.offWhite};
  text-align: left;
  padding-bottom: 0.5rem;
  @media (orientation: portrait) and (max-width: 500px) {
    display: none;
  }
`;

export const BannerItemUnderInfo = styled.div`
  display: inline-flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  @media (orientation: portrait) and (max-width: 500px) {
    display: none;
  }
`;

export const BannerItemUnderInfoItem = styled.p`
  font-size: 1.1rem;
  text-transform: uppercase;
  @media (orientation: portrait) and (max-width: 500px) {
    font-size: 0.7rem;
  }
`;

const DoT = styled.span`
  height: 7px;
  width: 7px;
  background-color: #fff;
  border-radius: 50%;
  align-self: center;
  margin: 0 1rem;
`;

export const Dot = () => <DoT></DoT>;

export const BannerItemContainer = styled(Link)`
  width: 100%;
  height: 350px;
  margin: 0;
  background: url(${({ url }) => url}) no-repeat;
  background-position: center;
  background-size: cover;
  cursor: pointer;
  &:hover ${BannerItemTitle} {
    text-decoration: underline;
  }
  &:hover ${BannerItemInside} {
    backdrop-filter: blur(1px);
  }
  @media (min-width: 1700px) {
    height: 500px;
  }
  @media (orientation: portrait) and (max-width: 500px) {
    height: 300px;
  }
`;
