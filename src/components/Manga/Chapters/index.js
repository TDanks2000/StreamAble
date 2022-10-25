import React from "react";
import MangaChapter from "./Chapter";
import { Container, Title } from "./Chapters.styles";

const MangaChapters = ({
  chapters,
  show,
  setShow,
  setSelectedId,
  selectedId,
  setLoading,
  loading,
}) => {
  return (
    <Container>
      <Title>Chapters</Title>
      {chapters.map((chapter, i) => (
        <MangaChapter
          {...chapter}
          chapterNumber={i + 1}
          key={`chapter-${i}`}
          setShow={setShow}
          selectedId={selectedId}
          setSelectedId={setSelectedId}
          setLoading={setLoading}
          loading={loading}
        />
      ))}
    </Container>
  );
};

export default MangaChapters;
