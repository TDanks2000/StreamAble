import React from "react";
import {
  Episode,
  EpisodesContainer,
  EpisodesTitle,
  EpisodesWrapper,
} from "./Episodes.styles";

function InfoEpisodes({ animeTitle, episodes, id, from }) {
  return (
    <EpisodesContainer>
      <EpisodesTitle>Episodes</EpisodesTitle>
      <EpisodesWrapper>
        {episodes.map(({ title }, index) => {
          const realEpisode = index + 1;
          return (
            <Episode
              to={
                id
                  ? `/anime/${id}/episode/${realEpisode}`
                  : `/anime/${animeTitle}/episode/${realEpisode}`
              }
              sate={{ from }}
              key={realEpisode}
            >
              {!title ? `Episode ${realEpisode}` : `${realEpisode} - ${title}`}
            </Episode>
          );
        })}
      </EpisodesWrapper>
    </EpisodesContainer>
  );
}

export default InfoEpisodes;
