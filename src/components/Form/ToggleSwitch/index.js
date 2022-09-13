import React from "react";
import {
  ToggleSwitchButton,
  ToggleSwitchContainer,
  ToggleSwitchLabel,
} from "./ToggleSwitch.styles";

const ToggleSwitch = ({ isOn, handleToggle, Name }) => {
  return (
    <>
      <ToggleSwitchContainer
        type="checkbox"
        name={Name}
        id={Name}
        checked={isOn}
        onChange={handleToggle}
      ></ToggleSwitchContainer>
      <ToggleSwitchLabel htmlFor={Name} isOn={isOn}>
        <ToggleSwitchButton />
      </ToggleSwitchLabel>
    </>
  );
};

export default ToggleSwitch;
