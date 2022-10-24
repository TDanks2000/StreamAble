import React from "react";
import {
  Container,
  Dot,
  Inner,
  Left,
  Meta,
  Poster,
  Right,
  Title,
} from "./RecommendItem.styles";

const RecommendItem = (props) => {
  const {
    image,
    id,
    title: { userPreferred: title_userPreferred },
    rating,
    type,
    episodes,
    status,
  } = props;

  const toManga = `/manga/${id}/chapter`;
  const toAnime = `/anime/${id}/episode/1`;
  const to = type.toLowerCase() === "manga" ? toManga : toAnime;

  return (
    <Container to={to}>
      <Inner>
        <Left>
          <Poster>
            <img src={image} alt="" />
          </Poster>
        </Left>
        <Right>
          <Title>{title_userPreferred}</Title>
          <Meta>
            <Dot>{(rating / 10).toFixed(1)}</Dot>
            <Dot>
              {type.toLowerCase() === "manga" ? `${status}` : `${episodes} EPS`}
            </Dot>
            <Dot>{type.toUpperCase()}</Dot>
          </Meta>
        </Right>
      </Inner>
    </Container>
  );
};

export default RecommendItem;
