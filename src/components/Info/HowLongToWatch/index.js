import React from "react";
import { Container } from "./HowLongToWatch.styles";

const HowLongToWatch = ({ duration, episodes, nextAiringEpisode }) => {
  return (
    <Container>
      it will take you roughly{" "}
      <span>{((duration * episodes.length) / 60).toFixed(2)} </span>
      hours to complete {nextAiringEpisode && "the current aired episodes"}
    </Container>
  );
};

export default HowLongToWatch;
