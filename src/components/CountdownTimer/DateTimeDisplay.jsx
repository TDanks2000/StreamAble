import React from "react";
import { Countdown, CountdownType, CountdownValue } from "./styles";

const DateTimeDisplay = ({ value, type, isDanger }) => {
  if (value === 0) return null;
  return (
    <Countdown>
      <CountdownValue>{value}</CountdownValue>
      <CountdownType>{type}</CountdownType>
    </Countdown>
  );
};

export default DateTimeDisplay;
