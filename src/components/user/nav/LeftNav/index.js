import React, { useState } from "react";
import {
  LeftNavContainer,
  UnderInfo,
  UserIcon,
  UserName,
  UnderInfoContainer,
  LogOutText,
  Bottom,
  UserIconWrapper,
  ImageHover,
  ImageHiddenInput,
} from "./LeftNav.styles";
import { MdLogout } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { FaPen } from "react-icons/fa";

import imgUrl from "../../../../assets/images/defaultUser.png";

export const LeftNav = ({ logout, currentUser, uploadProfilePicture }) => {
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);
  const navigate = useNavigate();

  let d = new Date(currentUser.metadata.creationTime);
  const creationDate = new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(d);

  const handleLogout = async () => {
    await logout().then(() => navigate("/"));
  };

  const handleChange = async (e) => {
    const file = e.target.files[0];

    if (file) {
      setIsFilePicked(true);
      return uploadProfilePicture(file);
    }
    setIsFilePicked(false);
  };

  return (
    <LeftNavContainer>
      <UserIconWrapper>
        <UserIcon>
          <img
            src={
              !currentUser.photoURL?.startsWith("http")
                ? imgUrl
                : currentUser.photoURL
            }
            alt={`${currentUser.displayName} profile picture`}
          />
          <ImageHover>
            <FaPen />
            <span>Change avatar</span>
          </ImageHover>
          <ImageHiddenInput
            type="file"
            onChange={handleChange}
            accept="image/png"
          />
        </UserIcon>
      </UserIconWrapper>
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
