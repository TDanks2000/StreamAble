import React, { useEffect, useState } from "react";
import { Container, Separator } from "./Servers.styles";
import SubServers from "./Sub";
import DubServers from "./Dub";
import * as api from "../../../utils/api/api";

const Servers = ({ subServers, dubServers, subOrDub, stream }) => {
  return (
    <Container>
      <SubServers subOrDub={subOrDub} servers={subServers} stream={stream} />
      <Separator />
      <DubServers subOrDub={subOrDub} dubServers={dubServers} stream={stream} />
    </Container>
  );
};

export default Servers;
