import React from "react";
import Character from "./character";
import {
  CharactersContainer,
  CharactersTitle,
  CharactersWrapper,
} from "./Characters.styles";

const Characters = ({ data, wantVoiceActors = true, typeDub = false }) => {
  return (
    <CharactersContainer>
      <CharactersTitle>Characters</CharactersTitle>
      <CharactersWrapper>
        {data.map((item, index) => (
          <Character
            {...item}
            key={`character-${index}`}
            wantVoiceActors={wantVoiceActors}
            typeDub={typeDub}
          />
        ))}
      </CharactersWrapper>
    </CharactersContainer>
  );
};

export default Characters;
