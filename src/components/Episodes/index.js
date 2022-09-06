import React from "react";
import {
  Episode,
  EpisodeInner,
  EpisodesContainer,
  EpisodesTitle,
  EpisodesWrapper,
} from "./Episodes.styles";

function InfoEpisodes({ episodes, id, color, ep }) {
  return (
    <EpisodesContainer>
      <EpisodesTitle>Episodes</EpisodesTitle>
      <EpisodesWrapper>
        {episodes.map(({ title, image }, index) => {
          const realEpisode = index + 1;
          return (
            <Episode
              to={`/anime/${id}/episode/${realEpisode}`}
              key={realEpisode}
              image={image}
              color={color}
              className={realEpisode === ep ? "active" : ""}
            >
              <EpisodeInner>
                {!title
                  ? `Episode ${realEpisode}`
                  : `${realEpisode} - ${title}`}
              </EpisodeInner>
            </Episode>
          );
        })}
      </EpisodesWrapper>
    </EpisodesContainer>
  );
}

export default InfoEpisodes;
