import moment from "moment";
import React from "react";
import {
  NextEpisodeContainer,
  NextEpisodeDate,
  NextEpisodeNumber,
  NextEpisodeTime,
} from "./NextEpisode.styles";

const NextEpisode = ({ nextAiringEpisode }) => {
  if (!nextAiringEpisode) return null;

  const nextAiringTimeDate = moment(nextAiringEpisode.airingTime * 1000);
  return (
    <NextEpisodeContainer>
      <NextEpisodeDate>{nextAiringTimeDate.format("MMM DD")}</NextEpisodeDate>
      <NextEpisodeNumber>
        <p>
          Episode <span>{nextAiringEpisode.episode}</span>
        </p>
      </NextEpisodeNumber>
      <NextEpisodeTime>{nextAiringTimeDate.format("HH:MM")}</NextEpisodeTime>
    </NextEpisodeContainer>
  );
};

export default NextEpisode;
