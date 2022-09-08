import React from "react";
import { LeftNav } from "./LeftNav";
import { TopNav } from "./TopNav";
import { UserNavContainer } from "./userNav.styles";

const UserNav = () => {
  return (
    <UserNavContainer>
      <LeftNav />
      <TopNav />
    </UserNavContainer>
  );
};

export default UserNav;
