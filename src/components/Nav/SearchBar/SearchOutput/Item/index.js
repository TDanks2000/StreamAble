import React from "react";
import {
  Info,
  ItemContainer,
  Meta,
  MetaItem,
  Name,
  Poster,
} from "./Item.styles";

function Item(props) {
  const {
    title: { userPreferred: title_userPreferred },
    id,
    image,
    rating,
    type,
    releaseDate,
    totalChapters,
    volumes,
  } = props;
  const { setOutput } = props;

  const toManga = `/manga/${id}/chapter`;
  const toAnime = `/anime/${id}/episode/1`;
  const to = type.toLowerCase() === "manga" ? toManga : toAnime;

  const ratingFixed = (rating / 10).toFixed(1);
  const actualRating = ratingFixed.startsWith(0) ? "??" : ratingFixed;

  if (type.toLowerCase() === "novel") return null;
  return (
    <ItemContainer to={to} onClick={() => setOutput([])} key={id}>
      <Poster>
        <span>
          <img src={image} alt="img" />
        </span>
      </Poster>
      <Info>
        <Name>{title_userPreferred}</Name>
        <Meta>
          <MetaItem>{actualRating || "??"}</MetaItem>
          <MetaItem>{releaseDate || "??"}</MetaItem>
          <MetaItem>{type || "??"}</MetaItem>
        </Meta>
      </Info>
    </ItemContainer>
  );
}

export default Item;
