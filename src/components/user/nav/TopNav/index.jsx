import React from "react";
import { TopNavContainer, TopNavLink, TopNavLinks } from "./TopNav.styles";

import {
  FaBookmark,
  FaHeart,
  // FaClock,
  // FaCog,
  // FaSignOutAlt,
  // FaSync,
  FaUser,
} from "react-icons/fa";

export const TopNav = () => {
  return (
    <TopNavContainer>
      <TopNavLinks>
        <TopNavLink to={"/user/profile"}>
          <FaUser />
          <span>Profile</span>
        </TopNavLink>
        <TopNavLink to={"/user/watchList"}>
          <FaBookmark />
          <span>Watch List</span>
        </TopNavLink>
        <TopNavLink to={"/user/liked"}>
          <FaHeart />
          <span>liked</span>
        </TopNavLink>
        {/* <TopNavLink to={"/user/continueWatching"}>
          <FaClock />
          <span>Continue Watching</span>
        </TopNavLink> */}
        {/* <TopNavLink to={"/user/mal"}>
          <FaSync />
          <span>MAL</span>
        </TopNavLink> */}
        {/* <TopNavLink to={"/user/settings"}>
          <FaCog />
          <span>Settings</span>
        </TopNavLink> */}
      </TopNavLinks>
    </TopNavContainer>
  );
};
