import styled from "styled-components";

export const BannerContainer = styled.div`
  width: 100%;
  height: 350px;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  -webkit-box-shadow: -8px 21px 43px -16px rgba(0, 0, 0, 0.67);
  box-shadow: -8px 21px 43px -16px rgba(0, 0, 0, 0.67);
  margin-bottom: 1rem;
  @media (min-width: 1700px) {
    height: 500px;
  }
`;
