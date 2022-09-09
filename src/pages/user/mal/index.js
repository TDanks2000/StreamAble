import React from "react";
import { Wrapper } from "../styles";

import UserNav from "../../../components/user/nav";
import { UserMalComponent } from "../../../components/user/Mal";

export const UserMal = () => {
  return (
    <div>
      <UserNav />
      <Wrapper>
        <UserMalComponent />
      </Wrapper>
    </div>
  );
};
