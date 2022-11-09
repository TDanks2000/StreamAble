import React from "react";
import {
  Container,
  Inner,
  RelatedName,
  RelatedTitle,
  RelatedType,
  Wrapper,
} from "./Related.styles";

const Related = (props) => {
  const { cover, image, relationType, id, type, title } = props;

  const typeLC = type?.toLowerCase();
  const toManga = `/manga/${id}/chapter`;
  const toAnime = `/anime/${id}/episode/1`;
  const to = typeLC === "manga" ? toManga : toAnime;

  return (
    <Container image={cover || image}>
      <Wrapper to={to}>
        <Inner>
          <RelatedName>{relationType.replace("_", " ")}</RelatedName>
          <RelatedType>{typeLC === "tv" ? "anime" : type}</RelatedType>
          <RelatedTitle>{title.userPreferred}</RelatedTitle>
        </Inner>
      </Wrapper>
    </Container>
  );
};

export default Related;
