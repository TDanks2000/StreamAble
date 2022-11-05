import React from "react";
import Carousel from "../Carousel";
import { BannerContainer } from "./Banner.styles";

export const Banner = ({ children }) => {
  return (
    <BannerContainer>
      <Carousel show={1} infiniteLoop={true}>
        {children}
      </Carousel>
    </BannerContainer>
  );
};
