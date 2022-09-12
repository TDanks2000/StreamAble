import React from "react";
import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { UserDropdown } from "./Dropdown";
import {
  ProfileContainer,
  ProfileImage,
  ProfileLink,
  ProfileContent,
  ProfileUserName,
} from "./styles";

const imgUrl = "https://pbs.twimg.com/media/Dqay-R6X0AEQZqo.jpg";

const NavProfile = ({ loggedIn }) => {
  const [open, setOpen] = useState(false);

  const handleClick = (e) => {
    setOpen((prevState) => !prevState);
  };

  return (
    <ProfileContainer>
      {loggedIn ? (
        <>
          <ProfileContent onClick={handleClick}>
            <ProfileUserName>UserName</ProfileUserName>
            <ProfileImage>
              <img src={imgUrl} alt="" />
            </ProfileImage>
          </ProfileContent>
          <UserDropdown open={open} handleClick={handleClick} />
        </>
      ) : (
        <ProfileLink to="/user/signin">Sign In</ProfileLink>
      )}
    </ProfileContainer>
  );
};

export default NavProfile;
