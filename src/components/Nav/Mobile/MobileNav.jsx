import React from "react";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import NavProfile from "../Profile";
import MobileDropdown from "./Dropdown";
import { Menu, Logo, Container } from "./MobileNav.styles";

const MobileNav = ({ Logo: LOGO, currentUser }) => {
  const [openNav, setOpenNav] = useState(false);
  return (
    <Container>
      <NavProfile loggedIn={currentUser} />
      <Logo to={`/`}>
        <img src={LOGO} alt="logo" />
      </Logo>
      <Menu>
        <FaBars onClick={() => setOpenNav((prev) => !prev)} />
        <MobileDropdown openNav={openNav} setOpenNav={setOpenNav} />
      </Menu>
    </Container>
  );
};

export default MobileNav;
