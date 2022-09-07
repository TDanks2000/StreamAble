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
import { SubOrDubSelector } from "./SubOrDubSelector";
import useDocumentTitle from "../../hooks/useDocumentTitle";

function InfoComponent(props) {
  const {
    title: { english: title_english },
    id,
    malId,
    genres,
    description,
    episodes,
    status,
    releaseDate,
    rating,
    duration,
    subOrDub,
    season,
    color,
    setSubOrDub,
    typeDub,
  } = props;
  const [stream, setStream] = useState(null);
  let { ep = 1 } = useParams();
  var parser = new DOMParser();
  var htmlDoc = parser.parseFromString(description, "text/html");
  const episodeId = episodes[ep - 1].id;
  const titlE = `${title_english} ${subOrDub ? "(dub)" : ""}`;

  useDocumentTitle(`${ep} - ${titlE} `);

  useEffect(() => {
    api.getSource(episodeId).then(({ sources, headers }) => {
      console.log(headers);
      const src = sources[0].url;
      setStream(src);
    });
  }, [ep, titlE, id, episodeId]);

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
                episodes[ep - 1].title
                  ? episodes[ep - 1].title
                  : `Episode ${ep}`
              }
            />
          </PlayerContainer>
        </InfoLeft>
        <InfoRight>
          <InfoEpisodes
            color={color}
            ep={ep}
            animeTitle={title_english}
            episodes={episodes}
            id={id}
          />
        </InfoRight>
      </InfoTop>
      <InfoLeft>
        <EpisodeTitle>
          {episodes[ep - 1].title ? episodes[ep - 1].title : `Episode ${ep}`}
        </EpisodeTitle>
        <InfoTitle color={color}>{titlE}</InfoTitle>

        {/* <DownloadButton stream={stream} epNum={ep} title={titlE} /> */}

        <InfoGenreWrapper>
          {genres?.map((genre, index) => (
            <InfoGenre href="#" key={`${genre}-${index}`}>
              {genre}
            </InfoGenre>
          ))}
        </InfoGenreWrapper>

        <SubOrDubSelector
          typeDub={typeDub}
          subOrDub={subOrDub}
          setSubOrDub={setSubOrDub}
        />
        <InfoSynopsis>
          {
            htmlDoc
              .querySelector("body")
              .innerText.split(" [Written by MAL Rewrite]")[0]
          }
        </InfoSynopsis>
      </InfoLeft>
    </InfoContainer>
  );
}

export default InfoComponent;
