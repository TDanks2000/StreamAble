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
    malId,
    image,
    rating,
    genres,
    duration,
    type,
    releaseDate,
    status,
    format,
  } = props;
  const { setOutput } = props;

  return (
    <ItemContainer
      to={`/anime/${id}/episode/1`}
      onClick={() => setOutput([])}
      key={id}
    >
      <Poster>
        <span>
          <img src={image} alt="img" />
        </span>
      </Poster>
      <Info>
        <Name>{title_userPreferred}</Name>
        <Meta>
          {rating ? <MetaItem>{(rating / 10).toFixed(1)}</MetaItem> : ""}
          {releaseDate ? <MetaItem>{releaseDate}</MetaItem> : ""}
          {type ? <MetaItem>{type}</MetaItem> : ""}
        </Meta>
      </Info>
    </ItemContainer>
  );
}

export default Item;
