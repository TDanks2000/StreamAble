import React from "react";
import { EpTitle, TopContainer, TopTitle, TopWrapper } from "./Top.styles";

function Top({ title, epTitle }) {
  return (
    <TopContainer>
      <TopWrapper>
        <TopTitle>{title}</TopTitle>
        {epTitle ? <EpTitle>{epTitle}</EpTitle> : null}
      </TopWrapper>
    </TopContainer>
  );
}

export default Top;
