import { doc, getDoc, setDoc } from "firebase/firestore";
import React, { useState, useRef, useEffect } from "react";
import ReactPlayer from "react-player";
import Controls from "../Controls";
import TimeLine from "../TimeLine";
import Top from "../TopControls";
import {
  FullContainer,
  VideoControlsContainer,
  VideoWrapper,
} from "./Player.styles";
import { useAuth } from "../../../contexts/AuthContext";
import { db } from "../../../utils/firebase";
import Buffering from "../Buffering";
import { proxyURL } from "../../../utils/utils";
import useLocalStorage from "../../../hooks/useLocalStorage";

function Player({
  headers,
  url,
  startMuted = false,
  startPlaying = false,
  title,
  epTitle,
  episodes,
  epNum,
  id,
  totalEpisodes,
  animeData,
}) {
  const { currentUser } = useAuth();
  const [playing, setPlaying] = useState(startPlaying);
  const [muted, setMuted] = useState(startMuted);
  const [volume, setVolume] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [watched, setWatched] = useState(false);
  const [showBuffer, setShowBuffer] = useState(false);

  const ContainerRef = useRef();
  const WrapperRef = useRef();
  const VideoRef = useRef();

  const currentEpisode = episodes[epNum - 1];
  const [watchedAmount, setWatchedAmount] = useLocalStorage(currentEpisode.id, {
    watchedAmount: null,
    duration: null,
  });

  const movieID = doc(db, "users", `${currentUser?.email}`, "anime", id);

  const handleTimeChange = (e) => {
    if (currentUser?.email) {
      const timeWatchedPercent =
        (e.playedSeconds / VideoRef.current.getDuration()) * 100;

      if (!watched && timeWatchedPercent >= 80) {
        setWatched(true);

        setDoc(
          movieID,
          {
            watched:
              parseFloat(epNum) === parseFloat(totalEpisodes)
                ? true
                : `${epNum} / ${totalEpisodes}`,
            id: animeData.id,
            rating: animeData.rating,
            releaseDate: animeData.releaseDate,
            cover: animeData.cover,
            duration: animeData.duration,
            color: animeData.color,
            title: animeData.title,
            image: animeData.image,
            totalEpisodes: animeData.totalEpisodes,
          },
          { merge: true }
        );
      }
    }
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

  // const handlePause = (e) => {
  //   if (currentUser?.email) {
  //     const timeWatchedPercent = parseFloat(
  //       ((currentTime / VideoRef.current.getDuration()) * 100).toFixed(3)
  //     );
  //     const newEpisodesArray = [
  //       {
  //         animeId: animeData.id,
  //         animePoster: animeData.image,
  //         animeTitle:
  //           animeData.title?.userPreferred || animeData.title?.english,
  //         ...episodes[epNum - 1],
  //         watched: timeWatchedPercent,
  //       },
  //     ];

  //     setDoc(
  //       movieID,
  //       {
  //         episodes: newEpisodesArray,
  //       },
  //       { merge: true }
  //     );
  //   }
  // };

  const handleUpdateCW = async (watching = true) => {
    if (!currentUser?.email) return false;

    const docs = await getDoc(movieID);
    const docData = docs?.data();
    const docEpisodes = docData?.episodes;
    const docEpisode = docEpisodes.find((e) => e.number === parseFloat(epNum));

    const newEpisodesArray = [
      {
        number: parseFloat(epNum),
        title: epTitle,
        watching: !docEpisode ? watching : docEpisode?.watching,
      },
    ];

    setDoc(
      movieID,
      {
        episodes: newEpisodesArray,
      },
      { merge: true }
    );
  };

  const handleBuffer = (e) => {
    if (e.type === "waiting") return setShowBuffer(true);
    return setShowBuffer(false);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!VideoRef?.current) return false;
      const currentVideoRef = VideoRef.current;
      const duration = currentVideoRef?.getDuration();
      const timeWatchedPercent = parseFloat(
        ((currentVideoRef?.getCurrentTime() / duration) * 100).toFixed(5)
      );
      if (
        watchedAmount.watchedAmount !== null &&
        watchedAmount.watchedAmount === timeWatchedPercent
      )
        return false;
      if (
        watchedAmount.watchedAmount !== null &&
        watchedAmount.watchedAmount >= timeWatchedPercent
      )
        return false;
      setWatchedAmount({
        watchedAmount: timeWatchedPercent,
        duration,
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleStartingTimeUpdate = (e) => {
    if (watchedAmount) {
      e.seekTo(watchedAmount.watchedAmount * 10, "seconds");
    }
  };

  if (!url) return null;
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
            id={id}
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
            episodes={episodes}
            epNum={epNum}
          />
        </VideoControlsContainer>
      </FullContainer>
      <Buffering toShow={showBuffer} />
      <ReactPlayer
        width="100%"
        height="100%"
        url={proxyURL + url}
        playing={playing}
        muted={muted}
        volume={volume}
        ref={VideoRef}
        onProgress={handleTimeChange}
        onBuffer={handleBuffer}
        onBufferEnd={handleBuffer}
        onStart={() => handleUpdateCW(true)}
        onEnded={() => handleUpdateCW(false)}
        onReady={handleStartingTimeUpdate}
        // onPause={handlePause}
        config={{
          file: {
            attributes: {
              crossOrigin: "true",
              preload: "metadata",
            },
            hlsOptions: {
              autoStartLoad: true,
              startFragPrefetch: true,
            },
          },
        }}
      />
    </VideoWrapper>
  );
}

export default Player;
