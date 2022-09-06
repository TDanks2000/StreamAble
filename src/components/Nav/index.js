import React from "react";
import {
  Link,
  LinkContainer,
  NavContainer,
  Logo,
  Right,
  ProfileLink,
  Dropdown,
  DropdownContainer,
  DropdownContent,
  DropdownItem,
  DropdownLink,
  DropdownLinkText,
  LinkNav,
} from "./Nav.styles";
import Search from "./SearchBar";

import { CgProfile } from "react-icons/cg";
import DropdownComponent from "./Dropdown";

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
  return (
    <NavContainer>
      <Logo>StreamAble</Logo>
      <Search />
      <LinkContainer>
        <LinkNav to="/">Home</LinkNav>
        <DropdownComponent to="/genres" title="Genre">
          {Genres.map((genre, index) => (
            <DropdownItem>
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
        <ProfileLink to="/user/profile">
          <CgProfile />
        </ProfileLink>
      </Right>
    </NavContainer>
  );
}

export default Nav;
