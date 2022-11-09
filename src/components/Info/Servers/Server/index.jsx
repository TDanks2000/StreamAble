import React from "react";
import { ServerContainer } from "./Server.styles";

const Server = ({
  serverName,
  serverUrl,
  active,
  handleSourceChange,
  type,
}) => {
  return (
    <ServerContainer
      className={active ? "active" : null}
      data-url={serverUrl}
      onClick={() => handleSourceChange(serverName, type)}
    >
      {serverName}
    </ServerContainer>
  );
};

export default Server;
