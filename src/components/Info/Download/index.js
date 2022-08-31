import React from "react";
import { DownloadContainer, Download } from "./Download.styles";

export const DownloadButton = ({ stream }) => {
  if (!stream) return null;
  return (
    <DownloadContainer>
      <Download href={stream} target="_blank" download>
        tt
      </Download>
    </DownloadContainer>
  );
};
