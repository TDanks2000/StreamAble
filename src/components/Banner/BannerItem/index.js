import React from "react";
import {
  BannerItemContainer,
  BannerItemInfo,
  BannerItemInside,
  BannerItemTitle,
  BannerItemUnderInfo,
  BannerItemUnderInfoItem,
  Dot,
} from "./BannerItem.styles";

export const BannerItem = (props) => {
  console.log(props);
  const { year, score, images, title, duration, status, aired, type } = props;
  const image = images.jpg.large_image_url;

  const Aired = new Date(aired.string);
  const AiredYear = Aired.getFullYear();
  return (
    <BannerItemContainer url={image}>
      <BannerItemInside>
        <BannerItemInfo>
          <BannerItemTitle>{title}</BannerItemTitle>
          <BannerItemUnderInfo>
            <BannerItemUnderInfoItem>
              {year || AiredYear}
            </BannerItemUnderInfoItem>
            <Dot />
            <BannerItemUnderInfoItem>
              {type.toLowerCase() !== "movie"
                ? duration.split("min")[0]
                : duration}
            </BannerItemUnderInfoItem>
            <Dot />
            <BannerItemUnderInfoItem>{score}</BannerItemUnderInfoItem>
            <Dot />
            <BannerItemUnderInfoItem>{status}</BannerItemUnderInfoItem>
            <Dot />
            <BannerItemUnderInfoItem>{type}</BannerItemUnderInfoItem>
          </BannerItemUnderInfo>
        </BannerItemInfo>
        {/* <img src={image} alt={title} /> */}
      </BannerItemInside>
    </BannerItemContainer>
  );
};
