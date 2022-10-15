import React, { useEffect, useState } from "react";
import { BufferIcon, Container } from "./Buffering.styles";

const Buffering = ({ toShow }) => {
  const [show, setShow] = useState(toShow);

  useEffect(() => {
    setShow(toShow);
  }, [toShow]);

  if (!show) return null;
  return (
    <Container>
      <BufferIcon />
    </Container>
  );
};

export default Buffering;
