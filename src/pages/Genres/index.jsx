import React from "react";
import { Container, GenreItem, Wrapper } from "./Genres.styles";

export const GenresArray = [
  "ACTION",
  "ADVENTURE",
  "CARS",
  "COMEDY",
  "DRAMA",
  "ECCHI",
  "FANTASY",
  "HORROR",
  "MAHOU SHOUJO",
  "MECHA",
  "MUSIC",
  "MYSTERY",
  "PSYCHOLOGICAL",
  "ROMANCE",
  "SCI-FI",
  "SLICE OF LIFE",
  "SPORTS",
  "SUPERNATURAL",
  "THRILLER",
];

const Genres = () => {
  return (
    <Wrapper>
      <Container>
        {GenresArray.map((genre, i) => (
          <GenreItem key={`genre-page=${genre}-${i}`} to={`/genre/${genre}`}>
            {genre}
          </GenreItem>
        ))}
      </Container>
    </Wrapper>
  );
};

export default Genres;
