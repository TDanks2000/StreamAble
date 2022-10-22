import React, { useState } from "react";
import { ModalContainer, ModalInner } from "./MangaModal.styles";

const MangaModal = ({ show = false }) => {
  if (!show) return null;
  return (
    <ModalContainer>
      <ModalInner>Red</ModalInner>
    </ModalContainer>
  );
};

export default MangaModal;
