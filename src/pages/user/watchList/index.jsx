import React from "react";
import { Wrapper } from "../styles";

import UserNav from "../../../components/user/nav";
import { UserWLComponent } from "../../../components/user/WatchList";

export const UserWL = () => {
  return (
    <div>
      <UserNav />
      <Wrapper>
        <UserWLComponent />
      </Wrapper>
    </div>
  );
};
