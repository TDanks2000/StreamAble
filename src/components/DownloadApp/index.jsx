import React from "react";
import {
  Container,
  DownloadAndroid,
  DownloadContainer,
  DownloadIcon,
  DownloadText,
  ReportBugs,
  SubText,
  Text,
} from "./styles";

const DownloadAppComponent = () => {
  return (
    <Container>
      <Text>Download the StreamAble App</Text>
      <SubText>
        Download the app and get a better experience on your phone
      </SubText>
      <DownloadContainer>
        <DownloadAndroid
          href={"https://github.com/TDanks2000/StreamAble-app/releases/"}
          target="_blank"
        >
          <DownloadText>DOWNLOAD</DownloadText>
          <DownloadIcon />
        </DownloadAndroid>
      </DownloadContainer>
      <ReportBugs>
        Report bugs to my{" "}
        <a
          href="https://github.com/TDanks2000/StreamAble-app/issues"
          target="_blank"
        >
          github
        </a>
      </ReportBugs>
    </Container>
  );
};

export default DownloadAppComponent;
