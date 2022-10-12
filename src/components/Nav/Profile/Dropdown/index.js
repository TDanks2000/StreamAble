import React, { useState } from "react";
import {
  FaBookmark,
  FaClock,
  FaCog,
  FaSignOutAlt,
  FaSync,
  FaUser,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../../contexts/AuthContext";
import {
  DropdownContainer,
  DropdownItem,
  DropdownLogout,
} from "./Dropdown.styles";

export const UserDropdown = ({ open, handleClick }) => {
  const navigate = useNavigate();
  const [error, setError] = useState();
  const { logout } = useAuth();

  const handleLogout = async (e) => {
    e.preventDefault();
    logout()
      .then(() => {
        navigate("/");
      })
      .catch((err) => setError("unable to logout"));
  };

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
      {/* <DropdownItem to={`/user/continueWatching`} onClick={handleClick}>
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
      </DropdownItem> */}
      <DropdownLogout to={`#`} onClick={handleLogout}>
        <FaSignOutAlt />
        <span>Logout</span>
      </DropdownLogout>
    </DropdownContainer>
  );
};
