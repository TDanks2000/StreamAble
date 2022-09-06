import React from "react";
import {
  Link,
  LinkContainer,
  NavContainer,
  Logo,
  Right,
  ProfileLink,
} from "./Nav.styles";
import Search from "./SearchBar";

import { CgProfile } from "react-icons/cg";

function Nav() {
  return (
    <NavContainer>
      <Logo>StreamAble</Logo>
      <Search />
      <LinkContainer>
        <Link to="/">Home</Link>
        <Link to="/genres">Genres</Link>
        <Link to="/types">Types</Link>
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
