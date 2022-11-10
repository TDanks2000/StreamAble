import React from "react";
import { Container } from "./styles";

import { FaSpinner } from "react-icons/fa";

const Loading = () => {
  return (
    <Container>
      <span>
        <FaSpinner />
      </span>
    </Container>
  );
};

export default Loading;
