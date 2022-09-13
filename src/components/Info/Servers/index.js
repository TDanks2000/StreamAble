import React from "react";
import {
  Container,
  DubContainer,
  Separator,
  SubContainer,
  TypeTitle,
  TypeWrapper,
} from "./Servers.styles";
import { FaClosedCaptioning, FaMicrophoneAlt } from "react-icons/fa";
import Server from "./Server";

const Servers = ({ episodeId, subServers, dubServers, subOrDub }) => {
  return (
    <Container>
      <SubContainer>
        <TypeTitle>
          <FaClosedCaptioning />
          <span>SUB</span>
        </TypeTitle>
        <TypeWrapper>
          {subServers.map((item, index) => (
            <Server
              serverName={item?.name}
              serverUrl={item?.url}
              key={`server-sub-${index}`}
              active={
                subOrDub === false && subServers[0].name === item.name
                  ? true
                  : false
              }
            />
          ))}
        </TypeWrapper>
      </SubContainer>
      <Separator></Separator>
      <DubContainer>
        <TypeTitle>
          <FaMicrophoneAlt />
          <span>Dub</span>
        </TypeTitle>
        <TypeWrapper>
          {dubServers.map((item, index) => (
            <Server
              serverName={item?.name}
              serverUrl={item?.url}
              key={`server-sub-${index}`}
              active={
                subOrDub === true && dubServers[0].name === item.name
                  ? true
                  : false
              }
            />
          ))}
        </TypeWrapper>
      </DubContainer>
    </Container>
  );
};

export default Servers;
