import React from "react";
import { Wrapper } from "../styles";

import UserNav from "../../../components/user/nav";
import { UserLikedComponent } from "../../../components/user/liked";

export const UserLiked = () => {
  return (
    <div>
      <UserNav />
      <Wrapper>
        <UserLikedComponent />
      </Wrapper>
    </div>
  );
};
