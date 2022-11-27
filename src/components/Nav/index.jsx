import React from "react";
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
import { useIsMobile } from "../../hooks/useIsMobile";
import MobileNav from "./Mobile/MobileNav";

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
  "SCI-FI",
  "SLICE OF LIFE",
  "SPORTS",
  "SUPERNATURAL",
  "THRILLER",
];

function Nav() {
  const detectMobile = useIsMobile();
  const { currentUser } = useAuth();

  if (detectMobile.isMobile()) {
    return (
      <NavWrapper>
        <NavContainer>
          <MobileNav Logo={LOGO} currentUser={currentUser} />
        </NavContainer>
      </NavWrapper>
    );
  }

  return (
    <NavWrapper>
      <NavContainer>
        <Logo>
          <img src={LOGO} alt="logo" />
        </Logo>
        <Search />
        <LinkContainer>
          <LinkNav end to="/">
            Home
          </LinkNav>
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
          {/* <LinkNav to="/types">Type</LinkNav> */}
          <LinkNav to="/news">News</LinkNav>
          <LinkNav to="/download/app">App</LinkNav>
        </LinkContainer>
        <Right>
          <NavProfile loggedIn={currentUser} />
        </Right>
      </NavContainer>
    </NavWrapper>
  );
}

export default Nav;
