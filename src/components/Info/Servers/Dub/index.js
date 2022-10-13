import React from "react";
import { FaClosedCaptioning } from "react-icons/fa";
import Server from "../Server";
import { DubContainer, TypeTitle, TypeWrapper } from "../Servers.styles";

const DubServers = ({ dubServers, subOrDub }) => {
  if (dubServers.includes("not found") || !dubServers.length) return null;
  return (
    <DubContainer>
      <TypeTitle>
        <FaClosedCaptioning />
        <span>DUB</span>
      </TypeTitle>
      <TypeWrapper>
        {dubServers.map((item, index) => (
          <Server
            serverName={item?.name}
            serverUrl={item?.url}
            key={`server-sub-${index}`}
            active={
              subOrDub === "dub" && dubServers[0].name === item.name
                ? true
                : false
            }
          />
        ))}
      </TypeWrapper>
    </DubContainer>
  );
};

export default DubServers;
