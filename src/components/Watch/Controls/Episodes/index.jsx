import React, { useRef } from "react";
import { Button } from "../Controls.styles";
import Episode from "./Episode";
import {
  EpisodeIcon,
  EpisodesContainer,
  EpisodesPreWrapper,
  EpisodesTitle,
  EpisodesWrapper,
} from "./Episodes.styles";

const Episodes = ({ episodes, epNum, id }) => {
  const episodeContainerRef = useRef();

  const handleClick = (e) => {
    e.preventDefault();
    episodeContainerRef.current.classList.toggle("toggle");
  };

  return (
    <EpisodesContainer>
      <EpisodesPreWrapper ref={episodeContainerRef}>
        <EpisodesTitle>Episodes</EpisodesTitle>
        <EpisodesWrapper>
          {episodes.map((episode, index) => (
            <Episode
              ep={epNum}
              animeId={id}
              {...episode}
              index={index}
              key={`episode-video-player-${index}`}
            />
          ))}
        </EpisodesWrapper>
      </EpisodesPreWrapper>
      <Button onClick={handleClick}>
        <EpisodeIcon />
      </Button>
    </EpisodesContainer>
  );
};

export default Episodes;
