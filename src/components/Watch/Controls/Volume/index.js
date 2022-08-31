import React from "react";
import { Button } from "../Controls.styles";
import {
  MuteIcon,
  VolumeContainer,
  VolumeHighIcon,
  VolumeLowIcon,
  VolumeSlider,
} from "./Volume.styles";
import VolumeIcons from "./VolumeIcons";

function Volume({ volume, setVolume, setMuted, muted }) {
  const handleMute = (e) => {
    setMuted(!muted);
  };

  const handleChange = (e) => {
    const vol = parseFloat(e.target.value);
    setVolume(vol);
    setMuted(vol === 0);
  };

  return (
    <VolumeContainer>
      <Button onClick={handleMute}>
        <VolumeIcons volume={volume} muted={muted} />
      </Button>
      <VolumeSlider
        type="range"
        min="0"
        max="1"
        step="any"
        value={muted === true ? 0 : volume}
        onChange={handleChange}
      />
    </VolumeContainer>
  );
}

export default Volume;
