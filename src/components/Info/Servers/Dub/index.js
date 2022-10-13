import React from "react";
import { FaClosedCaptioning } from "react-icons/fa";
import Server from "../Server";
import { DubContainer, TypeTitle, TypeWrapper } from "../Servers.styles";

const DubServers = ({
  servers,
  subOrDub,
  selectedServer,
  handleSourceChange,
}) => {
  if (servers.includes("not found") || !servers.length) return null;
  return (
    <DubContainer>
      <TypeTitle>
        <FaClosedCaptioning />
        <span>DUB</span>
      </TypeTitle>
      <TypeWrapper>
        {servers.map((item, index) => (
          <Server
            handleSourceChange={handleSourceChange}
            type={"dub"}
            serverName={item?.name}
            serverUrl={item?.url}
            key={`server-sub-${index}`}
            active={subOrDub === "dub" && selectedServer?.name === item?.name}
          />
        ))}
      </TypeWrapper>
    </DubContainer>
  );
};

export default DubServers;
