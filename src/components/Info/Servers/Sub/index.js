import React from "react";
import { FaClosedCaptioning } from "react-icons/fa";
import Server from "../Server";
import { SubContainer, TypeTitle, TypeWrapper } from "../Servers.styles";

const SubServers = ({ servers, subOrDub, stream }) => {
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
            serverName={item?.name}
            serverUrl={item?.url}
            key={`server-sub-${index}`}
            active={
              subOrDub === "sub" && servers[0].name === item.name ? true : false
            }
          />
        ))}
      </TypeWrapper>
    </SubContainer>
  );
};

export default SubServers;
