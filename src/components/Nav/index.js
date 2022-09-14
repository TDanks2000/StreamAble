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
} from "./Nav.styles";
import Search from "./SearchBar";

import DropdownComponent from "./Dropdown";
import NavProfile from "./Profile";

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
  const [loggedIn] = useState(true);
  return (
    <NavContainer>
      <Logo>Consume</Logo>
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
        <NavProfile loggedIn={loggedIn} />
      </Right>
    </NavContainer>
  );
}

export default Nav;
