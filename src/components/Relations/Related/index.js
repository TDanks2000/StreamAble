import React from "react";
import { Container, Inner, RelatedName } from "./Related.styles";

const Related = ({ cover, relationType, id, type }) => {
  const toManga = `/manga/${id}/chapter`;
  const toAnime = `/anime/${id}/episode/1`;
  const to = type.toLowerCase() === "manga" ? toManga : toAnime;

  return (
    <Container image={cover} to={to}>
      <Inner>
        <RelatedName>{relationType.replace("_", " ")}</RelatedName>
      </Inner>
    </Container>
  );
};

export default Related;
