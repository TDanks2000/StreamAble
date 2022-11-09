import React from "react";
import { BiFullscreen, BiExitFullscreen } from "react-icons/bi";

function Fullscreen({ fullscreen }) {
  return fullscreen ? <BiExitFullscreen /> : <BiFullscreen />;
}

export default Fullscreen;
