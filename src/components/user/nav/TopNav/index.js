import React from "react";
import { TopNavContainer, TopNavLink, TopNavLinks } from "./TopNav.styles";

export const TopNav = () => {
  return (
    <TopNavContainer>
      <TopNavLinks>
        <TopNavLink to={"/user/profile"}>Profile</TopNavLink>
        <TopNavLink to={"/user/watchList"}>Watch List</TopNavLink>
        <TopNavLink to={"/user/continueWatching"}>Continue Watching</TopNavLink>
        <TopNavLink to={"/user/mal"}>MAL</TopNavLink>
        <TopNavLink to={"/user/settings"}>Settings</TopNavLink>
      </TopNavLinks>
    </TopNavContainer>
  );
};
