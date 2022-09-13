import styled from "styled-components";

export const ToggleSwitchButton = styled.span``;

export const ToggleSwitchLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 50px;
  height: 30px;
  background: ${({ theme, isOn }) =>
    isOn ? theme.base.mainColor : theme.text.secondary};
  border-radius: 100px;
  position: relative;
  transition: background-color 0.2s;
  & ${ToggleSwitchButton} {
    content: "";
    position: absolute;
    top: 2px;
    left: 2px;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    transition: 0.2s;
    background: #fff;
    box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
  }
  &:active ${ToggleSwitchButton} {
    width: 60px;
  }
`;

export const ToggleSwitchContainer = styled.input`
  display: none !important;
  height: 0 !important;
  width: 0 !important;
  visibility: hidden !important;
  &:checked + ${ToggleSwitchLabel} ${ToggleSwitchButton} {
    left: calc(100% - 2px);
    transform: translateX(-100%);
  }
`;
