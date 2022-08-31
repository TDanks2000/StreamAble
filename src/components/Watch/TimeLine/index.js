import React from "react";
import { Scrubber } from "react-scrubber";
import { TimelineContainer } from "./TimeLine.styles";
import { useHotkeys } from "react-hotkeys-hook";

function TimeLine({ VideoRef, playing, currentTime, setCurrentTime }) {
  const handleChange = (e) => {
    setCurrentTime(e);
    VideoRef.seekTo(e);
  };

  const handleSkip = (e) => {
    if (!VideoRef?.getCurrentTime()) return;
    if (e <= 0) return;
    if (e >= VideoRef.getDuration()) return;
    setCurrentTime(e);
    VideoRef.seekTo(e);
  };

  useHotkeys("right", () => handleSkip(VideoRef.getCurrentTime() + 5));
  useHotkeys("left", () => handleSkip(VideoRef.getCurrentTime() - 5));

  // if (currentTime <= 0 && !playing) return null;
  return (
    <TimelineContainer>
      <Scrubber
        min={0}
        max={currentTime >= 1 ? VideoRef.getDuration() : 0}
        value={currentTime}
        onScrubEnd={handleChange}
      />
    </TimelineContainer>
  );
}

export default TimeLine;
