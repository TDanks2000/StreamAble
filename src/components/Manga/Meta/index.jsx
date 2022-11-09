import React from "react";
import { Container, Dot } from "./Meta.styles";

const Meta = (props) => {
  const { releaseDate, chapters, status, rating } = props;
  const TotalChapters = chapters.length;
  const actualRating = (rating / 10).toFixed(1);

  return (
    <Container>
      <Dot>{releaseDate}</Dot>
      <Dot>{TotalChapters}</Dot>
      <Dot>{actualRating}</Dot>
      <Dot>{status}</Dot>
    </Container>
  );
};

export default Meta;
