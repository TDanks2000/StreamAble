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
    title: { userPreferred: title_userPreferred },
    id,
    malId,
    image,
    rating,
    genres,
    duration,
    type,
    releaseDate,
    status,
  } = props;

  if (!props) return null;
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
        </PostBottom>
      </PostWrapper>
    </PostContainer>
  );
}

export default PostComponent;
