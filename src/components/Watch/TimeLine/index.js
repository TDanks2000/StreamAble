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
    if (!VideoRef?.getCurrentTime()) return null;
    if (e <= 0) return null;
    if (e >= VideoRef.getDuration()) return null;
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
