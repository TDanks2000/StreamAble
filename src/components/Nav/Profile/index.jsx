import React from "react";
import { useState } from "react";
import { UserDropdown } from "./Dropdown";
import {
  ProfileContainer,
  ProfileImage,
  ProfileLink,
  ProfileContent,
  ProfileUserName,
  ProfileContainerMobile,
} from "./styles";

import imgUrl from "../../../assets/images/defaultUser.png";
import { useIsMobile } from "../../../hooks/useIsMobile";

const NavProfile = ({ loggedIn }) => {
  const detectMobile = useIsMobile();
  const [open, setOpen] = useState(false);

  const handleClick = (e) => {
    setOpen((prevState) => !prevState);
  };

  if (detectMobile.isMobile()) {
    if (loggedIn?.email)
      return (
        <ProfileContainerMobile>
          <ProfileLink to={`/user/profile`}>
            <ProfileImage>
              <img
                src={
                  !loggedIn?.photoURL?.startsWith("http")
                    ? imgUrl
                    : loggedIn.photoURL
                }
                alt={`${loggedIn.displayName}`}
              />
            </ProfileImage>
          </ProfileLink>
        </ProfileContainerMobile>
      );
    return null;
  }

  return (
    <ProfileContainer>
      {loggedIn !== null ? (
        <>
          <ProfileContent onClick={handleClick}>
            <ProfileUserName>{loggedIn.displayName}</ProfileUserName>
            <ProfileImage>
              <img
                src={
                  !loggedIn.photoURL?.startsWith("http")
                    ? imgUrl
                    : loggedIn.photoURL
                }
                alt={`${loggedIn.displayName}`}
              />
            </ProfileImage>
          </ProfileContent>
          <UserDropdown open={open} handleClick={handleClick} />
        </>
      ) : (
        <ProfileContent>
          <ProfileLink to="/user/signin">Sign In</ProfileLink>
          <ProfileLink to="/user/signUp">Sign Up</ProfileLink>
        </ProfileContent>
      )}
    </ProfileContainer>
  );
};

export default NavProfile;
