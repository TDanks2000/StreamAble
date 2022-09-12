import React from "react";
import {
  FaBookmark,
  FaClock,
  FaCog,
  FaSignOutAlt,
  FaSync,
  FaUser,
} from "react-icons/fa";
import {
  DropdownContainer,
  DropdownItem,
  DropdownLogout,
} from "./Dropdown.styles";

export const UserDropdown = ({ open, handleClick }) => {
  return (
    <DropdownContainer open={open}>
      <DropdownItem to={`/user/profile`} onClick={handleClick}>
        <FaUser />
        <span>Profile</span>
      </DropdownItem>
      <DropdownItem to={`/user/watchlist`} onClick={handleClick}>
        <FaBookmark />
        <span>Watch List</span>
      </DropdownItem>
      <DropdownItem to={`/user/continueWatching`} onClick={handleClick}>
        <FaClock />
        <span>Continue Watching</span>
      </DropdownItem>
      <DropdownItem to={`/user/mal`} onClick={handleClick}>
        <FaSync />
        <span>Mal</span>
      </DropdownItem>
      <DropdownItem to={`/user/settings`} onClick={handleClick}>
        <FaCog />
        <span>Settings</span>
      </DropdownItem>
      <DropdownLogout to={`/user/logout`} onClick={handleClick}>
        <FaSignOutAlt />
        <span>Logout</span>
      </DropdownLogout>
    </DropdownContainer>
  );
};
