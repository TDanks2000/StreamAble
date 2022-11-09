import React from "react";
import Player from "./Player/Player";

import "./assets/fonts.css";
import "./assets/reset.css";
import "react-scrubber/lib/scrubber.css";

function ReactVideoPlayer(props) {
  return <Player {...props} />;
}

export default ReactVideoPlayer;
