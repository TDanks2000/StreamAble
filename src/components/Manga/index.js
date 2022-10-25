import React, { useEffect, useState } from "react";
import {
  Bottom,
  BottomLeft,
  BottomRight,
  Desc,
  Left,
  MangaBG,
  MangaContainer,
  MangaImage,
  MangaWrapper,
  Right,
  Title,
  Top,
} from "./Manga.styles";
import parse from "html-react-parser";
import MangaChapters from "./Chapters";
import Modal from "./Modal";
import Characters from "../Characters";
import Recommended from "../Recommended";
import { useHotkeys } from "react-hotkeys-hook";

const MangaComponent = (props) => {
  const {
    title: { english: title_english, romaji: title_romaji },
    cover,
    image,
    description,
    chapters,
    characters,
    color,
    recommendations,
  } = props;
  const titlE = title_romaji || title_english;
  const [modalShow, setModalShow] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [loading, setLoading] = useState(true);

  const desc = description.split("<br>")[0];

  useHotkeys("esc", (e) => {
    return setModalShow(false);
  });

  return (
    <MangaContainer>
      <MangaBG>
        <img src={cover} alt={titlE} />
      </MangaBG>
      <MangaWrapper>
        <Top>
          <Left>
            <MangaImage>
              <img src={image} alt={`poster-${titlE}`} />
            </MangaImage>
          </Left>
          <Right>
            <Title>{titlE}</Title>
            <Desc>{parse(desc)}</Desc>
          </Right>
        </Top>
        <Bottom>
          <BottomLeft>
            <MangaChapters
              chapters={chapters}
              show={modalShow}
              setShow={setModalShow}
              selectedId={selectedId}
              setSelectedId={setSelectedId}
              setLoading={setLoading}
              loading={loading}
            />
            <Characters data={characters} wantVoiceActors={false} />
          </BottomLeft>
          <BottomRight>
            <Recommended data={recommendations} />
          </BottomRight>
        </Bottom>
      </MangaWrapper>
      <Modal
        show={modalShow}
        setShow={setModalShow}
        id={selectedId}
        color={color}
        setLoading={setLoading}
        loading={loading}
      />
    </MangaContainer>
  );
};

export default MangaComponent;
