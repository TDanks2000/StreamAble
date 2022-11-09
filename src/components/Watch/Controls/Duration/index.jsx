import React from "react";
import { DurationContainer, DurationTime, TotalTime } from "./Duration.styles";

function Duration({ VideoRef, currentTime }) {
  return (
    <DurationContainer>
      <TotalTime>{formatDuration(currentTime ? currentTime : 0)}</TotalTime>/
      <DurationTime>
        {formatDuration(VideoRef?.getDuration() ? VideoRef.getDuration() : 0)}
      </DurationTime>
    </DurationContainer>
  );
}

const leadingZeroFormatter = new Intl.NumberFormat(undefined, {
  minimumIntegerDigits: 2,
});
function formatDuration(time) {
  const seconds = Math.floor(time % 60) || 0;
  const minutes = Math.floor(time / 60) % 60 || 0;
  const hours = Math.floor(time / 3600) || 0;
  if (hours === 0) {
    return `${minutes}:${leadingZeroFormatter.format(seconds)}`;
  } else {
    return `${hours}:${leadingZeroFormatter.format(
      minutes
    )}:${leadingZeroFormatter.format(seconds)}`;
  }
}
export default Duration;
