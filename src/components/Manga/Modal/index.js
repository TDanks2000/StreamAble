import React, { useEffect, useRef, useState } from "react";
import { Container, Inner } from "./Modal.styles";

import * as api from "../../../utils/api/api";
import Read from "./Read";

const Modal = ({ show, setShow, id, color, setLoading, loading }) => {
  const [pages, setPages] = useState([]);
  const contentRef = useRef();
  const focusedElement = document?.activeElement;
  const scrollPosition = { x: window.scrollX, y: window.scrollY };

  function preventDocBodyScrolling() {
    const width = document.body.clientWidth;
    const hasVerticalScrollBar =
      window.innerWidth > document.documentElement.clientWidth;
    document.body.style.overflowX = "hidden";
    document.body.style.overflowY = hasVerticalScrollBar ? "scroll" : "";
    document.body.style.width = `${width}px`;
    document.body.style.position = "fixed";
  }

  function restoreDocBodyScrolling() {
    document.body.style.overflowX = "";
    document.body.style.overflowY = "";
    document.body.style.width = "";
    document.body.style.position = "";
    focusedElement?.focus();
    window.scrollTo(scrollPosition.x, scrollPosition.y);
  }

  useEffect(() => {
    if (show) {
      preventDocBodyScrolling();
    } else {
      restoreDocBodyScrolling();
    }

    return () => {
      restoreDocBodyScrolling();
    };
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show]);

  const handleClick = (e) => {
    e.preventDefault();
    if (e.target === contentRef.current) setShow(false);
  };

  useEffect(() => {
    if (!show) return;
    api.getReadManga(id).then((res) => {
      setPages(res);
      setLoading(false);
    });
  }, [show, id, setLoading]);

  return (
    <Container
      className={show && "active"}
      onClick={handleClick}
      ref={contentRef}
    >
      <Inner>
        {loading ? "fetching pages..." : <Read page={pages} color={color} />}
      </Inner>
    </Container>
  );
};

export default Modal;
