import React from "react";
import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { useAuth } from "../../../contexts/AuthContext";
import { UserDropdown } from "./Dropdown";
import {
  ProfileContainer,
  ProfileImage,
  ProfileLink,
  ProfileContent,
  ProfileUserName,
} from "./styles";

import imgUrl from "../../../assets/images/defaultUser.png";

const NavProfile = ({ loggedIn }) => {
  const [open, setOpen] = useState(false);

  const handleClick = (e) => {
    setOpen((prevState) => !prevState);
  };

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
                alt={`${loggedIn.displayName} profile picture`}
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
