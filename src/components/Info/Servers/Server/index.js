import React from "react";
import { ServerContainer } from "./Server.styles";

const Server = ({ serverName, serverUrl, active }) => {
  return (
    <ServerContainer className={active ? "active" : null} data-url={serverUrl}>
      {serverName}
    </ServerContainer>
  );
};

export default Server;
