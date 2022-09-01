import React from "react";
import { Carousel } from "react-responsive-carousel";
import { BannerContainer } from "./Banner.styles";

export const Banner = ({ children }) => {
  return (
    <BannerContainer>
      <Carousel
        centerMode={false}
        showStatus={false}
        interval={5000}
        autoPlay={true}
        infiniteLoop={true}
      >
        {children}
      </Carousel>
    </BannerContainer>
  );
};
