import React, { useEffect, useState } from "react";
import { DownloadContainer, Download } from "./Download.styles";

export const DownloadButton = ({ stream, title, epNum }) => {
  const [streamMp4, setStreamMp4] = useState(null);
  useEffect(() => {}, []);
  if (!streamMp4 || stream) return null;

  return (
    <DownloadContainer>
      <Download href={stream} target="_blank" download>
        tt
      </Download>
    </DownloadContainer>
  );
};
