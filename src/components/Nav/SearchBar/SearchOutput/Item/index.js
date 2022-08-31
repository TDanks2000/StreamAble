import React from "react";
import { Info, ItemContainer, Meta, Name, Poster } from "./Item.styles";

function Item(props) {
  const { setOutput } = props;

  return (
    <ItemContainer
      to={`/anime/${props.animeId}/episode/1`}
      state={{
        from: props.from,
      }}
      onClick={() => setOutput([])}
      key={props.animeId}
    >
      <Poster>
        <span>
          <img src={props.animeImg} alt="img" />
        </span>
      </Poster>
      <Info>
        <Name>{props.animeTitle}</Name>
        <Meta></Meta>
      </Info>
    </ItemContainer>
  );
}

export default Item;
