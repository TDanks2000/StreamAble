import styled from "styled-components";

export const ToggleSwitchContainer = styled.div`
  position: relative;
  z-index: 1;
  display: block;
  min-height: 1.5rem;
  color-adjust: exact;
  padding-left: 2.775rem;
`;

export const ToggleSwitchSlider = styled.label`
  display: inline-block;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.text.offWhite};
  position: relative;
  margin-bottom: 0;
  vertical-align: top;

  &:before {
    top: 0.1rem;
    left: -2.775rem;
    width: 2.275rem;
    pointer-events: all;
    border-radius: 0.65rem;

    position: absolute;
    display: block;
    height: 1.3rem;
    content: "";
    border: 0.15rem solid ${({ theme }) => theme.text.secondary};
    transition: background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
  &:after {
    top: calc(0.1rem + 2px);
    left: calc(-2.775rem + 2px);
    width: calc(1.3rem - 4px);
    height: calc(1.3rem - 4px);
    border-radius: 0.65rem;
    transition: transform 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    position: absolute;
    display: block;
    content: "";
    background-color: ${({ theme }) => theme.text.primary};
  }
`;

export const ToggleSwitchInput = styled.input`
  position: absolute;
  left: 0;
  z-index: -1;
  width: 1.3rem;
  height: 1.4rem;
  opacity: 0;

  &:checked ~ ${ToggleSwitchSlider}::before {
    color: #fff;
    border-color: ${({ theme }) => theme.base.mainColor};
    background-color: ${({ theme }) => theme.base.mainColor};
  }

  &:checked ~ ${ToggleSwitchSlider}::after {
    // background-color: ${({ theme }) => theme.text}
    transform: translateX(0.975rem);
  }

  &:focus + span {
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
  }

  &:focus:checked + span {
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
  }
`;
