import React, { useState, useRef } from "react";
import ReactPlayer from "react-player/lazy";
import Controls from "../Controls";
import TimeLine from "../TimeLine";
import Top from "../TopControls";
import {
  FullContainer,
  VideoControlsContainer,
  VideoWrapper,
} from "./Player.styles";

function Player({
  url,
  startMuted = false,
  startPlaying = false,
  title,
  epTitle,
}) {
  const [playing, setPlaying] = useState(startPlaying);
  const [muted, setMuted] = useState(startMuted);
  const [volume, setVolume] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);

  const ContainerRef = useRef();
  const WrapperRef = useRef();
  const VideoRef = useRef();

  const handleTimeChange = (e) => {
    setCurrentTime(e.playedSeconds);
  };

  let duration = 5000;
  let timeout;
  const handleInactive = () => {
    ContainerRef.current.classList.add("show");
    ContainerRef.current.classList.remove("hide");
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      ContainerRef.current.classList.remove("show");
      ContainerRef.current.classList.add("hide");
    }, duration);
  };

  return (
    <VideoWrapper onMouseMove={handleInactive} ref={WrapperRef}>
      <FullContainer ref={ContainerRef}>
        <Top title={title} epTitle={epTitle} />
        <VideoControlsContainer>
          <TimeLine
            VideoRef={VideoRef.current}
            playing={playing}
            currentTime={currentTime}
            setCurrentTime={setCurrentTime}
          />
          <Controls
            playing={playing}
            setPlaying={setPlaying}
            setVolume={setVolume}
            setMuted={setMuted}
            muted={muted}
            volume={volume}
            ContainerRef={ContainerRef}
            WrapperRef={WrapperRef}
            VideoRef={VideoRef.current}
            currentTime={currentTime}
          />
        </VideoControlsContainer>
      </FullContainer>
      <ReactPlayer
        width="100%"
        height="100%"
        url={url}
        playing={playing}
        muted={muted}
        volume={volume}
        ref={VideoRef}
        onProgress={handleTimeChange}
        config={{
          file: {
            attributes: {
              preload: "auto",
            },
          },
        }}
      />
    </VideoWrapper>
  );
}

export default Player;
