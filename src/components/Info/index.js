import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
  InfoBottom,
  InfoBg,
} from "./Info.styles";

import * as api from "../../utils/api/api";
import ReactVideoPlayer from "../Watch";
import { SubOrDubSelector } from "./SubOrDubSelector";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import Recommended from "./Recommended";
import Characters from "./Characters";
// import Servers from "./Servers";

function InfoComponent(props) {
  const {
    title: { english: title_english, title_userPreferred },
    id,
    genres,
    description,
    episodes,
    recommendations,
    subOrDub,
    color,
    setSubOrDub,
    typeDub,
    characters,
    cover,
  } = props;
  const [stream, setStream] = useState(null);
  const [headers, setHeaders] = useState(null);
  let { ep = 1 } = useParams();
  var parser = new DOMParser();
  var htmlDoc = parser.parseFromString(description, "text/html");
  const episodeId = episodes[ep - 1].id;
  const titlE = `${title_english || title_userPreferred} ${
    subOrDub ? "(dub)" : ""
  }`;

  useDocumentTitle(`${ep} - ${titlE} `);

  useEffect(() => {
    api.getSource(episodeId).then(({ sources, headers }) => {
      setHeaders(headers);
      const src = sources.pop().url;
      setStream(src);
    });
  }, [episodeId, subOrDub]);

  return (
    <InfoContainer cover={cover}>
      {/* <InfoBg src={cover} alt={title_english || title_userPreferred} /> */}

      <InfoTop>
        <InfoLeft>
          <PlayerContainer>
            <ReactVideoPlayer
              headers={headers}
              url={stream}
              startMuted={false}
              startPlaying={false}
              title={titlE}
              epNum={ep}
              episodes={episodes}
              id={id}
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
      <InfoBottom>
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
          <InfoSynopsis>{htmlDoc.querySelector("body").innerText}</InfoSynopsis>

          <Characters data={characters} />
        </InfoLeft>
        <InfoRight>
          <Recommended data={recommendations} />
        </InfoRight>
      </InfoBottom>
    </InfoContainer>
  );
}

export default InfoComponent;
