import React from "react";
import { useAuth } from "../../../contexts/AuthContext";
import { LeftNav } from "./LeftNav";
import { TopNav } from "./TopNav";
import { UserNavContainer } from "./userNav.styles";

const UserNav = () => {
  const { currentUser, logout, uploadProfilePicture } = useAuth();

  return (
    <UserNavContainer>
      <LeftNav
        logout={logout}
        currentUser={currentUser}
        uploadProfilePicture={uploadProfilePicture}
      />
      <TopNav />
    </UserNavContainer>
  );
};

export default UserNav;
