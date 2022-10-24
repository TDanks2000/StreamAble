import React from "react";
import MangaChapter from "./Chapter";
import { Container, Title } from "./Chapters.styles";

const MangaChapters = ({ chapters, show, setShow, setSelectedId }) => {
  console.log(chapters);
  return (
    <Container>
      <Title>Chapters</Title>
      {chapters.map((chapter, i) => (
        <MangaChapter
          {...chapter}
          chapterNumber={i + 1}
          key={chapter.title}
          setShow={setShow}
          setSelectedId={setSelectedId}
        />
      ))}
    </Container>
  );
};

export default MangaChapters;
