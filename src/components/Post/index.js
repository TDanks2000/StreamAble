import React from "react";
import {
  PostBottom,
  PostContainer,
  PostRating,
  PostRatingWrapper,
  PostTitle,
  PostTop,
  PostWrapper,
} from "./Post.styles";

function PostComponent(props) {
  const {
    title,
    images,
    score,
    mal_id,
    title_english,
    animeTitle,
    animeImg,
    img,
    animeId,
  } = props;
  const image = img || animeImg || images?.jpg?.image_url;
  const titlE = title_english || title || animeTitle;
  const Score = parseInt(score) == 0 ? "N/A" : score.toFixed(2);

  if (!props) return null;
  return (
    <PostContainer
      key={mal_id || animeId}
      image={image}
      to={
        animeId ? `/anime/${animeId}/episode/1` : `/anime/${mal_id}/episode/1`
      }
    >
      <PostWrapper>
        <PostTop>
          <PostRatingWrapper>
            <PostRating>{Score}</PostRating>
          </PostRatingWrapper>
        </PostTop>
        <PostBottom>
          <PostTitle>{titlE}</PostTitle>
        </PostBottom>
      </PostWrapper>
    </PostContainer>
  );
}

export default PostComponent;
