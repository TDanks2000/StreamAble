import React from "react";
import { camelize } from "../../../../utils/utils";
import {
  Role,
  Actor,
  CharacterImage,
  Container,
  Info,
  Name,
  ActorImage,
  ActorName,
} from "./character.styles";

const Character = (props) => {
  const { image, name, voiceActors, role } = props;
  return (
    <Container>
      <CharacterImage>
        <img src={image} alt={name.userPreferred} />
      </CharacterImage>
      <Info>
        <Name>{camelize(name.userPreferred)}</Name>
        <Actor>
          <ActorImage>
            <img
              src={voiceActors[0].image}
              alt={voiceActors[0].name.userPreferred}
            />
          </ActorImage>
          <ActorName>{camelize(voiceActors[0].name.userPreferred)}</ActorName>
        </Actor>
        <Role>{role}</Role>
      </Info>
    </Container>
  );
};

export default Character;
