import React from "react";
import {
  ToggleSwitchContainer,
  ToggleSwitchInput,
  ToggleSwitchSlider,
} from "./ToggleSwitch.styles";

const ToggleSwitch = ({ Name, handleToggle, checked }) => {
  return (
    <ToggleSwitchContainer>
      <ToggleSwitchInput
        type="checkbox"
        onChange={handleToggle}
        checked={checked}
        id={Name}
      />
      <ToggleSwitchSlider for={Name} />
    </ToggleSwitchContainer>
  );
};

export default ToggleSwitch;
