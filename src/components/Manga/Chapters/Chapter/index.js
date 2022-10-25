import React, { useEffect, useRef, useState } from "react";
import Tooltip from "../../../Tooltip";
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

  const [direction, setDirection] = useState("bottom");

  const chapterNumberFromId = `Chapter ${id.split("-").pop() - 0}`;
  const contentRef = useRef();

  useEffect(() => {
    const left = contentRef.current?.getBoundingClientRect().left;
    const right = contentRef.current?.getBoundingClientRect().right;

    if (left <= 70) return setDirection("right");
    if (right >= 1350) return setDirection("left");
  }, []);

  const handleClick = (e) => {
    setShow((prev) => !prev);
    if (e.target.getAttribute("data-id") !== selectedId) {
      setLoading(true);
      return setSelectedId(id);
    }
  };

  if (!title)
    return (
      <Container ref={contentRef} onClick={handleClick} data-id={id}>
        {chapterNumberFromId || title || chapterNumber}
      </Container>
    );

  return (
    <Tooltip content={title} direction={direction} delay={250}>
      <Container ref={contentRef} onClick={handleClick} data-id={id}>
        {chapterNumberFromId || title || chapterNumber}
      </Container>
    </Tooltip>
  );
};

export default MangaChapter;