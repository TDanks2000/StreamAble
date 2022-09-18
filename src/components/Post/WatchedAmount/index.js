import React from "react";
import {
  Container,
  WatchedAmount,
  WatchedAmountText,
} from "./WatchedAmount.styles";

const WatchedComponent = ({ progress, episode }) => {
  return (
    <Container>
      <WatchedAmount progress={progress}>
        <WatchedAmountText progress={progress}>ep {episode}</WatchedAmountText>
      </WatchedAmount>
    </Container>
  );
};

export default WatchedComponent;
