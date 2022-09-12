import { readableColor } from "polished";
import React from "react";
import {
  Dot,
  PostBottom,
  PostContainer,
  PostMeta,
  PostRating,
  PostRatingWrapper,
  PostTitle,
  PostTop,
  PostWrapper,
} from "./Post.styles";

function PostComponent(props) {
  const {
    title: { userPreferred: title_userPreferred },
    id,
    malId,
    image,
    rating,
    duration,
    type,
    releaseDate,
    totalEpisodes,
    episodeNumber,
    aired,
    isEpisode,
    color,
  } = props;

  if (!props) return null;
  console.log(readableColor("#fff", color));

  if (isEpisode) {
    const airedDate = new Date(aired);
    return (
      <PostContainer
        key={malId}
        image={image}
        to={`/anime/${id}/episode/${episodeNumber}/sub`}
      >
        <PostWrapper>
          <PostTop>
            <PostRatingWrapper>
              <PostRating color={color}>{(rating / 10).toFixed(1)}</PostRating>
            </PostRatingWrapper>
          </PostTop>
          <PostBottom>
            <PostTitle>{title_userPreferred}</PostTitle>
            <PostMeta>
              <Dot>{airedDate.getFullYear()}</Dot>
              <Dot>EP {episodeNumber}</Dot>
              <Dot>{duration}</Dot>
              <Dot>{type}</Dot>
            </PostMeta>
          </PostBottom>
        </PostWrapper>
      </PostContainer>
    );
  }

  return (
    <PostContainer key={malId} image={image} to={`/anime/${id}/episode/1`}>
      <PostWrapper>
        <PostTop>
          <PostRatingWrapper>
            <PostRating>{(rating / 10).toFixed(1)}</PostRating>
          </PostRatingWrapper>
        </PostTop>
        <PostBottom>
          <PostTitle>{title_userPreferred}</PostTitle>
          <PostMeta>
            <Dot>{releaseDate}</Dot>
            <Dot>{totalEpisodes}</Dot>
            <Dot>{duration}</Dot>
            <Dot>{type}</Dot>
          </PostMeta>
        </PostBottom>
      </PostWrapper>
    </PostContainer>
  );
}

export default PostComponent;
