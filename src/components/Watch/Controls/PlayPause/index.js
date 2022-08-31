import React from "react";
import { IoMdPause, IoMdPlay } from "react-icons/io";

function PlayPause({ playing }) {
  return playing ? <IoMdPause /> : <IoMdPlay />;
}

export default PlayPause;
