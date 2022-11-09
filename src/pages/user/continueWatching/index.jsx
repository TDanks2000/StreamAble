import React from "react";
import { Wrapper } from "../styles";

import UserNav from "../../../components/user/nav";
import { UserCWComponent } from "../../../components/user/ContinueWatching";

export const UserCW = () => {
  return (
    <div>
      <UserNav />
      <Wrapper>
        <UserCWComponent />
      </Wrapper>
    </div>
  );
};
