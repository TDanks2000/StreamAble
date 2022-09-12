import React from "react";
import Character from "./character";
import {
  CharactersContainer,
  CharactersTitle,
  CharactersWrapper,
} from "./Characters.styles";

const Characters = ({ data }) => {
  console.log(data);
  return (
    <CharactersContainer>
      <CharactersTitle>Characters</CharactersTitle>
      <CharactersWrapper>
        {data.map((item, index) => (
          <Character {...item} key={`character-${index}`} />
        ))}
      </CharactersWrapper>
    </CharactersContainer>
  );
};

export default Characters;
