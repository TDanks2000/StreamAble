import React, { useEffect, useState } from "react";
import screenfull from "screenfull";
import { useHotkeys } from "react-hotkeys-hook";

import { Button, ControlsWrapper } from "./Controls.styles";
import Duration from "./Duration";
import Fullscreen from "./Fullscreen";
import PlayPause from "./PlayPause";
import Volume from "./Volume";
import Quality from "./Quality";

function Controls({
  playing,
  setPlaying,
  volume,
  setVolume,
  setMuted,
  muted,
  ContainerRef,
  currentTime,
  VideoRef,
  WrapperRef,
}) {
  const [fullscreen, setFullscreen] = useState(false);

  const handleFullscreen = () => {
    if (screenfull.isEnabled) {
      screenfull.toggle(WrapperRef.current);
      setFullscreen((prev) => !prev);
    }
  };

  const handlePlayPause = () => {
    setPlaying((prev) => !prev);
  };

  useHotkeys("m", () => setMuted((prev) => !prev));
  useHotkeys("f", handleFullscreen);
  useHotkeys("space", handlePlayPause);

  const hlsPlayer = VideoRef?.getInternalPlayer("hls");
  const levels = VideoRef?.getInternalPlayer("hls")?.levels;
  const currentQuality = VideoRef?.getInternalPlayer("hls")?.currentLevel;

  return (
    <ControlsWrapper>
      <Button onClick={handlePlayPause}>
        <PlayPause playing={playing} />
      </Button>
      <Volume
        volume={volume}
        muted={muted}
        setVolume={setVolume}
        setMuted={setMuted}
      />
      <Duration currentTime={currentTime} VideoRef={VideoRef} />
      <Quality
        VideoRef={VideoRef}
        hlsPlayer={hlsPlayer}
        levels={levels}
        currentQuality={currentQuality}
      />
      <Button onClick={handleFullscreen}>
        <Fullscreen fullscreen={fullscreen} />
      </Button>
    </ControlsWrapper>
  );
}

export default Controls;
