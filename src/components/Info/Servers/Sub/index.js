import React from "react";
import { FaClosedCaptioning } from "react-icons/fa";
import Server from "../Server";
import { SubContainer, TypeTitle, TypeWrapper } from "../Servers.styles";

const SubServers = ({
  servers,
  subOrDub,
  selectedServer,
  handleSourceChange,
}) => {
  if (servers.includes("not found") || !servers.length) return null;

  return (
    <SubContainer>
      <TypeTitle>
        <FaClosedCaptioning />
        <span>SUB</span>
      </TypeTitle>
      <TypeWrapper>
        {servers.map((item, index) => (
          <Server
            handleSourceChange={handleSourceChange}
            serverName={item?.name}
            serverUrl={item?.url}
            key={`server-sub-${index}`}
            type={"sub"}
            active={subOrDub === "sub" && selectedServer?.name === item?.name}
          />
        ))}
      </TypeWrapper>
    </SubContainer>
  );
};

export default SubServers;
