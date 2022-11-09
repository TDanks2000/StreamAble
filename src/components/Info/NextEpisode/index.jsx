import moment from "moment";
import React from "react";
import CountdownTimer from "../../CountdownTimer";
import {
  CountdownWrapper,
  NextEpisodeContainer,
  NextEpisodeDate,
  NextEpisodeNumber,
  NextEpisodeTime,
  NextEpisodeWrapper,
} from "./NextEpisode.styles";

const NextEpisode = ({ nextAiringEpisode }) => {
  if (!nextAiringEpisode) return null;

  const nextAiringTimeDate = moment(nextAiringEpisode.airingTime * 1000);
  const date = new Date(nextAiringEpisode.airingTime * 1000);
  // console.log("date", nextAiringEpisode);
  return (
    <NextEpisodeWrapper>
      <NextEpisodeContainer>
        <NextEpisodeDate>{nextAiringTimeDate.format("MMM DD")}</NextEpisodeDate>
        <NextEpisodeNumber>
          <p>
            Episode <span>{nextAiringEpisode.episode}</span>
          </p>
        </NextEpisodeNumber>
        <NextEpisodeTime>{nextAiringTimeDate.format("HH:MM")}</NextEpisodeTime>
      </NextEpisodeContainer>
      {new Date() < date ? (
        <CountdownWrapper>
          <CountdownTimer targetDate={date} />
        </CountdownWrapper>
      ) : null}
    </NextEpisodeWrapper>
  );
};

export default NextEpisode;
