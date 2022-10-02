import React from "react";
import {
  LeftNavContainer,
  UnderInfo,
  UserIcon,
  UserName,
  UnderInfoContainer,
  LogOutText,
  Bottom,
} from "./LeftNav.styles";
import { MdLogout } from "react-icons/md";
import { useNavigate } from "react-router-dom";

import imgUrl from "../../../../assets/images/defaultUser.png";

export const LeftNav = ({ logout, currentUser }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout().then(() => navigate("/"));
  };

  let d = new Date(currentUser.metadata.creationTime);
  const creationDate = new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(d);

  return (
    <LeftNavContainer>
      <UserIcon>
        <img
          src={currentUser.photoURL !== "null" ? imgUrl : currentUser.photoURL}
          alt={`${currentUser.displayName} profile picture`}
        />
      </UserIcon>
      <UserName>{currentUser.displayName}</UserName>
      <UnderInfoContainer>
        <UnderInfo>
          Joined: <span>{creationDate}</span>
        </UnderInfo>
        <UnderInfo>
          Watched: <span>200</span>
        </UnderInfo>
      </UnderInfoContainer>
      <Bottom>
        <LogOutText onClick={handleLogout}>
          <span>
            <MdLogout />
          </span>
          Log Out
        </LogOutText>
      </Bottom>
    </LeftNavContainer>
  );
};
