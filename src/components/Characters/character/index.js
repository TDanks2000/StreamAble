import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { camelize } from "../../../utils/utils";
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
  const { image, name, voiceActors, role, wantVoiceActors, typeDub } = props;
  const [voiceActor, setVoiceActor] = useState(null);

  useEffect(() => {
    if (wantVoiceActors) {
      if (typeDub) {
        const engVA = voiceActors.find(
          (a) => a.language.toLowerCase() === "english"
        );
        return setVoiceActor(engVA);
      }

      const japVA = voiceActors.find(
        (a) => a.language.toLowerCase() === "japanese"
      );

      setVoiceActor(japVA);
    }
    return () => {
      setVoiceActor(null);
    };
  }, [typeDub, voiceActors, wantVoiceActors]);

  return (
    <Container>
      <CharacterImage>
        <img src={image} alt={name.userPreferred} />
      </CharacterImage>
      <Info>
        <Name>
          {camelize(name.userPreferred)}
          <Role>{role}</Role>
        </Name>
        {wantVoiceActors && (
          <Actor>
            <ActorImage>
              <img
                src={voiceActor?.image}
                alt={voiceActor?.name?.userPreferred}
              />
            </ActorImage>
            <ActorName>
              {camelize(voiceActor?.name?.userPreferred || "Unknown")}
            </ActorName>
          </Actor>
        )}
      </Info>
    </Container>
  );
};

export default Character;
