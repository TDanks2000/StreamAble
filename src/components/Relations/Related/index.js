import React from "react";
import { Container, Inner, RelatedName, RelatedType } from "./Related.styles";

const Related = (props) => {
  const { cover, relationType, id, type } = props;

  const typeLC = type.toLowerCase();
  const toManga = `/manga/${id}/chapter`;
  const toAnime = `/anime/${id}/episode/1`;
  const to = typeLC === "manga" ? toManga : toAnime;

  return (
    <Container image={cover} to={to}>
      <Inner>
        <RelatedName>{relationType.replace("_", " ")}</RelatedName>
        <RelatedType>{typeLC === "tv" ? "anime" : type}</RelatedType>
      </Inner>
    </Container>
  );
};

export default Related;
