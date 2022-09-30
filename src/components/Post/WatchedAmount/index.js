import React from "react";
import {
  Container,
  WatchedAmount,
  WatchedAmountText,
} from "./WatchedAmount.styles";

const WatchedComponent = ({ progress, episode }) => {
  return (
    <Container>
      <WatchedAmountText progress={progress}>ep {episode}</WatchedAmountText>
      <WatchedAmount progress={progress}></WatchedAmount>
    </Container>
  );
};

export default WatchedComponent;
