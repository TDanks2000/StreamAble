import styled from "styled-components";

export const Dropdown = styled.div`
  position: relative;
`;

export const DropdownContainer = styled.ul`
  background-color: ${({ theme }) => theme.base.navBg};
  position: absolute;
  left: 0;
  top: calc(100% + 0.5rem);
  min-height: 100%;
  font-weight: 700;
  font-size: 0.8rem;
  border-radius: 0 0 5px 5px;
  width: 600px;
  padding: 5px !important ;
  overflow: hidden;
  z-index: 200;
  transform: translateY(-10px);
  opacity: ${({ open }) => (open ? 1 : 0)};
  pointer-events: ${({ open }) => (!open ? "none" : "auto")};
  transition: all 0.3s linear;
`;
