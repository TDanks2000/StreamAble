import React, { useRef } from "react";
import { Container } from "./Chapter.styles";

const MangaChapter = (props) => {
  const {
    id,
    title,
    setShow,
    setSelectedId,
    chapterNumber,
    selectedId,
    setLoading,
  } = props;

  const chapterNumberFromId = `Chapter ${id.split("-").pop() - 0}`;
  const contentRef = useRef();

  const handleClick = (e) => {
    setShow((prev) => !prev);
    if (e.target.getAttribute("data-id") !== selectedId) {
      setLoading(true);
      return setSelectedId(id);
    }
  };

  return (
    <Container ref={contentRef} onClick={handleClick} data-id={id}>
      {chapterNumberFromId || title || chapterNumber}
    </Container>
  );
};

export default MangaChapter;
