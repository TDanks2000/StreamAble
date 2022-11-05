import React from "react";
import { useMemo } from "react";
import { useState } from "react";
import Pagination from "../../Pagination";
import MangaChapter from "./Chapter";
import { Container, PaginationContainer, Title } from "./Chapters.styles";

const PageSize = 130;

const MangaChapters = ({
  chapters,
  show,
  setShow,
  setSelectedId,
  selectedId,
  setLoading,
  loading,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const currentChaptersData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return chapters.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, chapters]);

  return (
    <Container>
      <Title>Chapters</Title>
      {currentChaptersData.map((chapter, i) => (
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
      <PaginationContainer>
        <Pagination
          currentPage={currentPage}
          totalCount={chapters.length}
          pageSize={PageSize}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </PaginationContainer>
    </Container>
  );
};

export default MangaChapters;
