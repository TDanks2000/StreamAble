import React from "react";
import { Container, Genre } from "./genres.styled";

const Genres = ({ genres }) => {
  return (
    <Container>
      {genres.map((res) => (
        <Genre>{res}</Genre>
      ))}
    </Container>
  );
};

export default Genres;
