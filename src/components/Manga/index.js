import React, { useState } from "react";
import {
  Bottom,
  BottomLeft,
  BottomRight,
  Desc,
  Left,
  MangaBG,
  MangaContainer,
  MangaImage,
  MangaTop,
  MangaWrapper,
  Right,
  Title,
  Top,
  TopInfo,
} from "./Manga.styles";
import parse from "html-react-parser";
import MangaChapters from "./Chapters";
import Modal from "./Modal";
import Characters from "../Characters";
import Recommended from "../Recommended";
import { useHotkeys } from "react-hotkeys-hook";
import Genres from "./genres";
import Meta from "./Meta";

const MangaComponent = (props) => {
  const {
    title: { english: title_english, romaji: title_romaji },
    cover,
    image,
    description,
    chapters,
    characters,
    color,
    genres,
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
      <MangaTop>
        <MangaBG>
          <img src={cover} alt={titlE} />
        </MangaBG>
        <TopInfo>
          <Title>{titlE}</Title>
          <Genres genres={genres} />
          <Meta {...props} />
        </TopInfo>
      </MangaTop>
      <MangaWrapper>
        <Top>
          <Left>
            <MangaImage>
              <img src={image} alt={`poster-${titlE}`} />
            </MangaImage>
          </Left>
          <Right>
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
