import React, { useState } from "react";
import {
  LinkContainer,
  NavContainer,
  Logo,
  Right,
  DropdownItem,
  DropdownLink,
  DropdownLinkText,
  LinkNav,
  NavWrapper,
} from "./Nav.styles";
import Search from "./SearchBar";

import DropdownComponent from "./Dropdown";
import NavProfile from "./Profile";

import LOGO from "../../assets/images/logo.png";
import { useAuth } from "../../contexts/AuthContext";

export const Genres = [
  "ACTION",
  "ADVENTURE",
  "CARS",
  "COMEDY",
  "DRAMA",
  "ECCHI",
  "FANTASY",
  "HORROR",
  "MAHOU SHOUJO",
  "MECHA",
  "MUSIC",
  "MYSTERY",
  "PSYCHOLOGICAL",
  "ROMANCE",
  "SCI FI",
  "SLICE OF LIFE",
  "SPORTS",
  "SUPERNATURAL",
  "THRILLER",
];

function Nav() {
  const { currentUser } = useAuth(true);
  return (
    <NavWrapper>
      <NavContainer>
        <Logo>
          <img src={LOGO} alt="logo" />
        </Logo>
        <Search />
        <LinkContainer>
          <LinkNav to="/">Home</LinkNav>
          <DropdownComponent to="/genres" title="Genre">
            {Genres.map((genre, index) => (
              <DropdownItem key={`genre-${genre}-${index}`}>
                <DropdownLink to={`/genre/${genre}`.toLowerCase()}>
                  <DropdownLinkText key={`genre-${index}`}>
                    {genre}
                  </DropdownLinkText>
                </DropdownLink>
              </DropdownItem>
            ))}
          </DropdownComponent>
          <LinkNav to="/types">Type</LinkNav>
        </LinkContainer>
        <Right>
          <NavProfile loggedIn={currentUser ? true : false} />
        </Right>
      </NavContainer>
    </NavWrapper>
  );
}

export default Nav;
