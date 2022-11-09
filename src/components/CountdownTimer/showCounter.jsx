import DateTimeDisplay from "./DateTimeDisplay";
import { ShowCounterContainer } from "./styles";

export const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <ShowCounterContainer>
      <DateTimeDisplay value={days} type={"Days"} isDanger={days <= 3} />
      <DateTimeDisplay value={hours} type={"Hours"} isDanger={false} />
      <DateTimeDisplay value={minutes} type={"Mins"} isDanger={false} />
      <DateTimeDisplay value={seconds} type={"Seconds"} isDanger={false} />
    </ShowCounterContainer>
  );
};
