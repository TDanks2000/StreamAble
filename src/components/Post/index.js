import React from "react";
import moment from "moment";
import {
  ContainerLink,
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
import WatchedComponent from "./WatchedAmount";

function PostComponent(props) {
  const {
    title,
    title: { userPreferred: title_userPreferred, english: title_english },
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
    wantWatched = false,
    number: episodeWatched = 1,
    watched: progress,
    wantMeta = true,
    subOrDub = "sub",
    wantRating = true,
    wantMetaDate = false,
  } = props;

  if (!props) return null;
  if (isEpisode) {
    const airedDate = new Date(aired);
    return (
      <PostContainer key={malId} image={image}>
        <ContainerLink to={`/anime/${id}/episode/${episodeNumber}/${subOrDub}`}>
          <PostWrapper>
            {wantWatched && (
              <WatchedComponent progress={progress} episode={episodeWatched} />
            )}
            <PostTop>
              <PostRatingWrapper>
                <PostRating color={color}>
                  {rating <= 0 ? "TBD" : (rating / 10).toFixed(1)}
                </PostRating>
              </PostRatingWrapper>
            </PostTop>
            <PostBottom wantWatched={wantWatched}>
              <PostTitle>
                {title_userPreferred || title_english || title}
              </PostTitle>
              {Boolean(wantMeta) && (
                <PostMeta>
                  <Dot>{airedDate.getFullYear()}</Dot>
                  <Dot>EP {episodeNumber}</Dot>
                  <Dot>{duration}</Dot>
                  <Dot>{type}</Dot>
                </PostMeta>
              )}
            </PostBottom>
          </PostWrapper>
        </ContainerLink>
      </PostContainer>
    );
  }

  return (
    <PostContainer key={malId} image={image}>
      <ContainerLink to={`/anime/${id}/episode/1`}>
        <PostWrapper>
          {wantWatched && (
            <WatchedComponent progress={progress} episode={episodeWatched} />
          )}
          <PostTop>
            {wantRating && rating && (
              <PostRatingWrapper>
                <PostRating>
                  {rating <= 0 ? "TBD" : (rating / 10).toFixed(1)}
                </PostRating>
              </PostRatingWrapper>
            )}
          </PostTop>
          <PostBottom wantWatched={wantWatched}>
            <PostTitle>
              {title_userPreferred || title_english || title}
            </PostTitle>
            {Boolean(wantMeta) && (
              <PostMeta>
                {Boolean(releaseDate) && <Dot>{releaseDate}</Dot>}
                {Boolean(totalEpisodes) && <Dot>{totalEpisodes}</Dot>}
                {Boolean(duration) && <Dot>{duration}</Dot>}
                {Boolean(type) && <Dot>{type}</Dot>}
              </PostMeta>
            )}
            {Boolean(wantMetaDate) && (
              <PostMeta>
                <p>{moment(aired).format("HH:mm A (ZZ)")}</p>
              </PostMeta>
            )}
          </PostBottom>
        </PostWrapper>
      </ContainerLink>
    </PostContainer>
  );
}

export default PostComponent;
