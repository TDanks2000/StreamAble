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
} from "./Info.styles";

import * as api from "../../utils/api/api";
import ReactVideoPlayer from "../Watch";
import { SubOrDubSelector } from "./SubOrDubSelector";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import Recommended from "./Recommended";
import Characters from "./Characters";
import UserActions from "./UserActions";
import NextEpisode from "./NextEpisode";
import HowLongToWatch from "./HowLongToWatch";
import Servers from "./Servers";

function InfoComponent(props) {
  console.log(props);
  const {
    title: {
      english: title_english,
      title_userPreferred,
      romaji: title_romaji,
    },
    id,
    genres,
    description,
    duration,
    episodes,
    recommendations,
    subOrDub,
    color,
    setSubOrDub,
    typeDub,
    characters,
    cover,
    totalEpisodes,
    nextAiringEpisode,
  } = props;
  const [stream, setStream] = useState(null);
  const [headers, setHeaders] = useState(null);

  const [selectedServer, setSelectedServer] = useState(null);

  let { ep = 1 } = useParams();
  var parser = new DOMParser();

  var htmlDoc = parser.parseFromString(description, "text/html");

  const [episodeId, setEpisodeId] = useState(episodes[ep - 1]?.id);
  const titlE = `${
    title_english || title_userPreferred || title_romaji
  } (${subOrDub})`;

  const subEpisodeId = episodeId.replace("-dub-", "-");
  const dubEpisodeId = episodeId
    .replace("-dub-", "-")
    .split("-episode-")
    .join("-dub-episode-");

  useDocumentTitle(`${ep} - ${titlE} `);

  const handleSourceChange = (serverName, newSourceType) => {
    console.log(newSourceType);
    setSelectedServer({ name: serverName });
    if (serverName.toLowerCase().includes("gogo")) serverName = "gogocdn";
    if (newSourceType === "dub") {
      setSubOrDub(true);
      setEpisodeId(dubEpisodeId);
    }
    if (newSourceType === "sub") {
      setSubOrDub(false);
      setEpisodeId(subEpisodeId);
    }
    api.getSource(episodeId, serverName).then(({ sources, headers }) => {
      setHeaders(headers);
      const src = sources.pop().url;
      setStream(src);
    });
  };

  return (
    <InfoContainer cover={cover}>
      {/* <InfoBg src={cover} alt={title_english || title_userPreferred} /> */}

      <InfoTop>
        <InfoLeft>
          <PlayerContainer>
            <ReactVideoPlayer
              animeData={props}
              totalEpisodes={totalEpisodes}
              headers={headers}
              url={stream}
              startMuted={false}
              startPlaying={false}
              title={titlE}
              epNum={ep}
              episodes={episodes}
              id={id}
              epTitle={
                episodes[ep - 1]?.title
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
          <Servers
            episodeId={episodeId}
            subOrDub={subOrDub}
            stream={stream}
            selectedServer={selectedServer}
            handleSourceChange={handleSourceChange}
            subEpisodeId={subEpisodeId}
            dubEpisodeId={dubEpisodeId}
          />

          <InfoTitle color={color}>
            <span>{title_english || title_userPreferred || title_romaji}</span>
            <UserActions data={props} />
            <SubOrDubSelector
              typeDub={typeDub}
              subOrDub={subOrDub}
              setSubOrDub={setSubOrDub}
            />
          </InfoTitle>
          <EpisodeTitle>
            <span>
              {episodes[ep - 1]?.title
                ? episodes[ep - 1].title
                : `Episode ${ep}`}
            </span>
          </EpisodeTitle>

          {/* <DownloadButton stream={stream} epNum={ep} title={titlE} /> */}

          <InfoGenreWrapper>
            {genres?.map((genre, index) => (
              <InfoGenre to={`/genre/${genre}`} key={`${genre}-${index}`}>
                {genre}
              </InfoGenre>
            ))}
          </InfoGenreWrapper>

          <InfoSynopsis>{htmlDoc.querySelector("body").innerText}</InfoSynopsis>

          {duration && (
            <HowLongToWatch
              duration={duration}
              nextAiringEpisode={nextAiringEpisode}
              episodes={episodes}
            />
          )}

          <Characters data={characters} />
        </InfoLeft>
        <InfoRight>
          <NextEpisode nextAiringEpisode={nextAiringEpisode} />
          <Recommended data={recommendations} />
        </InfoRight>
      </InfoBottom>
    </InfoContainer>
  );
}

export default InfoComponent;
