import React from "react";
import { MuteIcon, VolumeHighIcon, VolumeLowIcon } from "./Volume.styles";

function VolumeIcons({ volume, muted }) {
  if (muted) return <MuteIcon />;
  if (volume > 0.5) return <VolumeHighIcon />;
  return <VolumeLowIcon />;
}

export default VolumeIcons;
