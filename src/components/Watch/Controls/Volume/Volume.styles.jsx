import styled from "styled-components";
import { ImVolumeMute2, ImVolumeHigh, ImVolumeLow } from "react-icons/im";

export const VolumeSlider = styled.input`
  width: 0;
  transform-origin: left;
  transform: scaleX(0);
  -webkit-appearance: none;
  border: none;
  background: none;
  transition: width 150ms ease-in-out, transform 150ms ease-in-out;
  &::focus-within {
    width: 100px;
    transform: scaleX(1);
  }
  &:focus {
    outline: none;
  }
  &::-webkit-slider-thumb {
    box-shadow: 0px 0px 0px #000000;
    height: 17px;
    width: 17px;
    border-radius: 50%;
    background: ${({ theme }) => theme.base.mainColor};
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -6.5px;
  }
  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 6px;
    cursor: pointer;
    animate: 0.2s;
    background: ${({ theme }) => theme.base.mainColor};
    border-radius: 15px;
  }
  &::-moz-range-track {
    width: 100%;
    height: 6px;
    cursor: pointer;
    animate: 0.2s;
    background: ${({ theme }) => theme.base.mainColor};
    border-radius: 15px;
  }
  &::-moz-range-thumb {
    box-shadow: 0px 0px 0px #000000;
    height: 17px;
    width: 17px;
    border-radius: 50%;
    background: ${({ theme }) => theme.base.mainColor};
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -6.5px;
  }
  &::-ms-track {
    width: 100%;
    height: 6px;
    cursor: pointer;
    animate: 0.2s;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }
  &::-ms-fill-upper {
    background: ${({ theme }) => theme.base.SecondColor};
    border: 0px solid #000000;
    border-radius: 10px;
    box-shadow: 1px 1px 1px #000000;
  }
  &::-ms-thumb {
    box-shadow: 0px 0px 0px #000000;
    height: 17px;
    width: 17px;
    border-radius: 50%;
    background: ${({ theme }) => theme.base.mainColor};
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -6.5px;
  }
`;

export const VolumeContainer = styled.div`
  display: flex;
  align-items: center;
  &:hover ${VolumeSlider} {
    width: 100px;
    transform: scaleX(1);
  }
`;

export const MuteIcon = styled(ImVolumeMute2)``;
export const VolumeHighIcon = styled(ImVolumeHigh)``;
export const VolumeLowIcon = styled(ImVolumeLow)``;
