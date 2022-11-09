import React from "react";
import { useCountdown } from "../../hooks/useCountdown";
import { ShowCounter } from "./showCounter";

const CountdownTimer = ({ targetDate, expiredNotice: ExpiredNotice }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default CountdownTimer;
