import React from "react";
import {
  ToggleSwitchContainer,
  ToggleSwitchInput,
  ToggleSwitchSlider,
} from "./ToggleSwitch.styles";

const ToggleSwitch = ({ handleToggle, checked }) => {
  return (
    <ToggleSwitchContainer>
      <ToggleSwitchInput
        type="checkbox"
        onChange={handleToggle}
        checked={checked}
      />
      <ToggleSwitchSlider />
    </ToggleSwitchContainer>
  );
};

export default ToggleSwitch;
