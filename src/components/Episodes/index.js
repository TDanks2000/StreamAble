import React from "react";
import {
  Episode,
  EpisodeInner,
  EpisodesContainer,
  EpisodesTitle,
  EpisodesWrapper,
} from "./Episodes.styles";

function InfoEpisodes(props) {
  const { episodes, id, color, ep } = props;

  console.log(episodes);

  return (
    <EpisodesContainer>
      <EpisodesTitle>Episodes</EpisodesTitle>
      <EpisodesWrapper className={episodes.length > 100 ? "number" : "name"}>
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
              {episodes.length > 100 ? (
                <EpisodeInner>{realEpisode}</EpisodeInner>
              ) : (
                <EpisodeInner>
                  {!title
                    ? `Episode ${realEpisode}`
                    : `${realEpisode} - ${title}`}
                </EpisodeInner>
              )}
            </Episode>
          );
        })}
      </EpisodesWrapper>
    </EpisodesContainer>
  );
}

export default InfoEpisodes;
