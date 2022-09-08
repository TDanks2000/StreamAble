import React from "react";
import UserNav from "../../../components/user/nav";
import { UserProfileComponent } from "../../../components/user/Profile";
import { Wrapper } from "./profile.styles";

export const UserProfile = () => {
  return (
    <div>
      <UserNav />
      <Wrapper>
        <UserProfileComponent />
      </Wrapper>
    </div>
  );
};
