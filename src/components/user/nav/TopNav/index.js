import React from "react";
import { TopNavContainer, TopNavLink, TopNavLinks } from "./TopNav.styles";

export const TopNav = () => {
  return (
    <TopNavContainer>
      <TopNavLinks>
        <TopNavLink to={"/user/profile"}>Profile</TopNavLink>
        <TopNavLink to={"/"}>Watch List</TopNavLink>
        <TopNavLink to={"/"}>Continue Watching</TopNavLink>
        <TopNavLink to={"/"}>MAL</TopNavLink>
        <TopNavLink to={"/"}>Settings</TopNavLink>
      </TopNavLinks>
    </TopNavContainer>
  );
};
