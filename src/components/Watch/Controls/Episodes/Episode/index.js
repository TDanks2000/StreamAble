import React from "react";
import { useNavigate } from "react-router-dom";
import {
  EpisodeContainer,
  EpisodeName,
  ImgContainer,
  Left,
  Right,
} from "./episode.styles";

const Episode = ({ image, title, index, ep, animeId, id }) => {
  const navigate = useNavigate();

  const realEpisode = Number(index + 1);
  return (
    <EpisodeContainer
      className={realEpisode === Number(ep) ? "active" : ""}
      onClick={() => navigate(`/anime/${animeId}/episode/${realEpisode}`)}
    >
      <Left>
        <ImgContainer>
          <img src={image} alt={title} />
        </ImgContainer>
      </Left>
      <Right>
        <EpisodeName>
          {!title ? `Episode ${realEpisode}` : `${realEpisode} - ${title}`}
        </EpisodeName>
      </Right>
    </EpisodeContainer>
  );
};

export default Episode;
