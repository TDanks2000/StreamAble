import React from "react";
import {
  BannerGenre,
  BannerGenreWrapper,
  BannerItemContainer,
  BannerItemDesc,
  BannerItemInfo,
  BannerItemInside,
  BannerItemTitle,
  BannerItemUnderInfo,
  BannerItemUnderInfoItem,
  Dot,
} from "./BannerItem.styles";

export const BannerItem = (props) => {
  const {
    title: { userPreferred: title_userPreferred },
    id,
    malId,
    cover,
    image,
    rating,
    genres,
    duration,
    type,
    releaseDate,
    status,
    description,
    to,
  } = props;

  var parser = new DOMParser();
  var desc = parser
    .parseFromString(description, "text/html")
    .querySelector("body")
    .innerText.split(" [Written by MAL Rewrite]")[0];
  return (
    <BannerItemContainer url={cover || image}>
      <BannerItemInside>
        <BannerItemInfo>
          <BannerItemTitle to={to}>{title_userPreferred}</BannerItemTitle>
          <BannerGenreWrapper>
            {genres?.map((genre) => (
              <BannerGenre to={`/genre/${genre}`} key={`genre-${genre}`}>
                {genre}
              </BannerGenre>
            ))}
          </BannerGenreWrapper>
          <BannerItemDesc>{desc.split("(Source:")[0]}</BannerItemDesc>
          <BannerItemUnderInfo>
            <BannerItemUnderInfoItem>{releaseDate}</BannerItemUnderInfoItem>
            <Dot />
            <BannerItemUnderInfoItem>{duration}</BannerItemUnderInfoItem>
            <Dot />
            <BannerItemUnderInfoItem>
              {(rating / 10).toFixed(1)}
            </BannerItemUnderInfoItem>
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
