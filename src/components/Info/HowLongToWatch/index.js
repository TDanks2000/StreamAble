import moment from "moment/moment";
import React from "react";
import { Container } from "./HowLongToWatch.styles";

const HowLongToWatch = ({ duration, episodes }) => {
  const time = duration * episodes.length * 60;
  const howLongToWatchTime = moment.duration({ seconds: time }).humanize();

  return (
    <Container>
      it will take you roughly <span>{howLongToWatchTime} </span> to complete
    </Container>
  );
};

export default HowLongToWatch;
