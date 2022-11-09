import moment from "moment";
import React from "react";
import CountdownTimer from "../../CountdownTimer";
import {
  NextEpisodeContainer,
  NextEpisodeDate,
  NextEpisodeNumber,
  NextEpisodeTime,
} from "./NextEpisode.styles";

const NextEpisode = ({ nextAiringEpisode }) => {
  if (!nextAiringEpisode) return null;

  const nextAiringTimeDate = moment(nextAiringEpisode.airingTime * 1000);
  console.log("date", nextAiringEpisode);
  return (
    <NextEpisodeContainer>
      <NextEpisodeDate>{nextAiringTimeDate.format("MMM DD")}</NextEpisodeDate>
      <NextEpisodeNumber>
        <p>
          Episode <span>{nextAiringEpisode.episode}</span>
        </p>
      </NextEpisodeNumber>
      <NextEpisodeTime>{nextAiringTimeDate.format("HH:MM")}</NextEpisodeTime>

      {/* <CountdownTimer targetDate={dateTimeAfterThreeDays}/> */}
    </NextEpisodeContainer>
  );
};

export default NextEpisode;
