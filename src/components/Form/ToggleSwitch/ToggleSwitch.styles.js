import styled from "styled-components";

export const ToggleSwitchContainer = styled.label`
  position: relative;
`;

export const ToggleSwitchInput = styled.input`
  position: absolute;
  left: -99999px;
  top: -99999px;
  &:checked + span {
    background-color: ${({ theme }) => theme.base.mainColor};
    &:before {
      left: calc(100% - 2px);
      transform: translateX(-100%);
    }
  }

  &:focus + span {
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
  }

  &:focus:checked + span {
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
  }
`;

export const ToggleSwitchSlider = styled.span`
  display: flex;
  cursor: pointer;
  width: 50px;
  height: 25px;
  border-radius: 100px;
  background-color: ${({ theme }) => theme.text.secondary};
  position: relative;
  transition: background-color 0.25s ease-in-out;

  &:before {
    content: "";
    position: absolute;
    top: 2px;
    left: 2px;
    width: 21px;
    height: 21px;
    border-radius: 45px;
    transition: 0.2s;
    background: ${({ theme }) => theme.text.offWhite};
  }
  &:active:before {
    width: 28px;
  }
`;
