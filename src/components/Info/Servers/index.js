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
      const filters = ["gogo server", "vidstreaming"];
      const ServersFiltered = res.filter((server) =>
        filters.includes(server.name.toLowerCase())
      );
      setSubServers(ServersFiltered);
    });
    api.getServers(dubEpisodeId).then((res) => {
      const filters = ["gogo server", "vidstreaming"];
      const ServersFiltered = res.filter((server) =>
        filters.includes(server.name.toLowerCase())
      );
      setDubServers(ServersFiltered);
    });
  }, [subEpisodeId, dubEpisodeId, episodeId, subOrDub]);

  useEffect(() => {
    if (subOrDub == "sub" && subServers.length > 0) {
      handleSourceChange(subServers[subServers.length - 1].name, "sub");
    }
  }, [subServers]);

  useEffect(() => {
    if (subOrDub == "dub" && dubServers.length > 0) {
      handleSourceChange(dubServers[dubServers.length - 1].name, "dub");
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
