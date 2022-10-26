import React from "react";
import Related from "./Related";
import { Container } from "./Relations.styles";

const toInclude = ["tv", "manga"];

const Relations = ({ related }) => {
  const relatedFiltered = related.filter((item) => {
    const type = item.type.toLowerCase();
    return toInclude.includes(type);
  });

  if (relatedFiltered.length < 1) return null;

  return (
    <Container>
      {relatedFiltered.map((item) => (
        <Related {...item} key={`relations-${item.id}`} />
      ))}
    </Container>
  );
};

export default Relations;
