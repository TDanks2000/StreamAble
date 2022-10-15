import React, { useEffect, useState } from "react";
import { Container, Separator, WIPSign, Wrapper } from "./Servers.styles";
import SubServers from "./Sub";
import DubServers from "./Dub";
import * as api from "../../../utils/api/api";

const Servers = ({
  episodeId,
  subOrDub,
  stream,
  handleSourceChange,
  selectedServer,
  subEpisodeId,
  dubEpisodeId,
}) => {
  const [subServers, setSubServers] = useState([]);
  const [dubServers, setDubServers] = useState([]);

  useEffect(() => {
    api.getServers(subEpisodeId).then((res) => {
      setSubServers(res);
    });
    api.getServers(dubEpisodeId).then((res) => {
      setDubServers(res);
    });
  }, [subEpisodeId, dubEpisodeId, episodeId, subOrDub]);

  useEffect(() => {
    if (subServers.length > 1 && subOrDub == "sub") {
      handleSourceChange(subServers[0].name, "sub");
    }
  }, [subServers]);

  useEffect(() => {
    if (dubServers.length > 1 && subOrDub == "dub") {
      handleSourceChange(dubServers[0].name, "dub");
    }
  }, [dubServers]);

  return (
    <Container>
      <WIPSign>W I P</WIPSign>
      <Wrapper>
        {subOrDub === "sub" && (
          <SubServers
            subOrDub={subOrDub}
            servers={subServers}
            stream={stream}
            handleSourceChange={handleSourceChange}
            selectedServer={selectedServer}
          />
        )}
        {subOrDub === "dub" && (
          <DubServers
            subOrDub={subOrDub}
            servers={dubServers}
            stream={stream}
            handleSourceChange={handleSourceChange}
            selectedServer={selectedServer}
          />
        )}
      </Wrapper>
    </Container>
  );
};

export default Servers;
