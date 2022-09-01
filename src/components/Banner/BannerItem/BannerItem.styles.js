import styled from "styled-components";

export const BannerItemContainer = styled.div`
  width: 100%;
  height: 350px;
  margin: 0;
  background: url(${({ url }) => url}) no-repeat;
  background-position: center;
  background-size: cover;
`;

export const BannerItemInside = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(3px);
  padding: 1.2rem;
`;

export const BannerItemInfo = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  padding: inherit;
`;

export const BannerItemTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  width: 100%;
  text-align: left;
`;

export const BannerItemUnderInfo = styled.div`
  display: inline-flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
`;

export const BannerItemUnderInfoItem = styled.p``;

const DoT = styled.span`
  height: 7px;
  width: 7px;
  background-color: #fff;
  border-radius: 50%;
  align-self: center;
  margin: 0 1rem;
`;

export const Dot = () => <DoT></DoT>;
