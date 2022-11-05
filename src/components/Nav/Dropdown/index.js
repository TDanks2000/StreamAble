import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { Dropdown, DropdownContainer, DropdownTitle } from "./DropdownStyles";

const DropdownComponent = ({ to, title, children }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();
  const linkRef = useRef();

  const handleOpen = (e) => {
    e.preventDefault();
    setOpen((prev) => !prev);
  };

  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        if (linkRef.current && !linkRef.current.contains(e.target)) {
          setOpen(false);
        }
      }
    });
  }, []);

  return (
    <Dropdown>
      <DropdownTitle ref={linkRef} onClick={handleOpen} to={to}>
        {title}
      </DropdownTitle>
      <DropdownContainer open={open} ref={dropdownRef}>
        {children}
      </DropdownContainer>
    </Dropdown>
  );
};

export default DropdownComponent;
