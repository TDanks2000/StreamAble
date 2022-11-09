import React from "react";
import { Container, Title, Wrapper } from "./Recommended.styles";
import RecommendItem from "./RecommendItem";

const Recommended = ({ data }) => {
  return (
    <Container>
      <Title>You might also like</Title>
      <Wrapper>
        {data.map((res) => (
          <RecommendItem key={`ITEM_${res.id}`} {...res} />
        ))}
      </Wrapper>
    </Container>
  );
};

export default Recommended;
