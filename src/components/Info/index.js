import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import InfoEpisodes from "../Episodes";
import {
  InfoGenreWrapper,
  InfoContainer,
  InfoGenre,
  InfoTitle,
  InfoSynopsis,
  InfoLeft,
  InfoRight,
  InfoTop,
  EpisodeTitle,
  PlayerContainer,
} from "./Info.styles";

import * as api from "../../utils/api/api";
import ReactVideoPlayer from "../Watch";
import { DownloadButton } from "./Download";

function InfoComponent(props) {
  const {
    title,
    animeId,
    genres,
    synopsis,
    episodesData,
    episodes,
    mal_id,
    animeTitle,
    from,
  } = props;
  const [stream, setStream] = useState(null);
  const { ep = 1 } = useParams();
  const { id } = useParams();
  const titlE = animeTitle || title;

  useEffect(() => {
    const realAnimeId = isNaN(id) ? id : animeId;
    api.getEpisodeStream(realAnimeId, ep, from).then(({ sources }) => {
      const src = sources[0].file;
      setStream(src);
    });
    document.title = titlE;
    return () => {
      document.title = "Anime";
    };
  }, [ep, animeId, mal_id, titlE, from, id]);

  return (
    <InfoContainer>
      <InfoTop>
        <InfoLeft>
          <PlayerContainer>
            <ReactVideoPlayer
              url={stream}
              startMuted={false}
              startPlaying={false}
              title={titlE}
              epNum={ep}
              epTitle={
                !episodesData.length
                  ? ep
                  : `${ep} -  ${episodesData[ep - 1]?.title}`
              }
            />
          </PlayerContainer>
        </InfoLeft>
        <InfoRight>
          <InfoEpisodes
            animeTitle={id}
            from={from}
            episodes={episodesData.length ? episodesData : episodes}
            id={mal_id}
          />
        </InfoRight>
      </InfoTop>
      <InfoLeft>
        <EpisodeTitle>
          {episodesData[ep - 1] ? episodesData[ep - 1].title : ""}
        </EpisodeTitle>
        <InfoTitle>{titlE}</InfoTitle>

        <DownloadButton stream={stream} epNum={ep} title={titlE} />

        <InfoGenreWrapper>
          {genres?.map((genre, index) => (
            <InfoGenre href="#" key={`${genre}-${index}`}></InfoGenre>
          ))}
        </InfoGenreWrapper>
        <InfoSynopsis>
          {synopsis.split(" [Written by MAL Rewrite]")[0]}
        </InfoSynopsis>
      </InfoLeft>
    </InfoContainer>
  );
}

export default InfoComponent;
