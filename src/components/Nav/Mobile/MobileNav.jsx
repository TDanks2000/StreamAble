import React from "react";
import { FaBars } from "react-icons/fa";
import NavProfile from "../Profile";
import { Menu, Logo, Container } from "./MobileNav.styles";

const MobileNav = ({ Logo: LOGO, currentUser }) => {
  return (
    <Container>
      <NavProfile loggedIn={currentUser} />
      <Logo to={`/`}>
        <img src={LOGO} alt="logo" />
      </Logo>
      <Menu>
        <FaBars />
      </Menu>
    </Container>
  );
};

export default MobileNav;
