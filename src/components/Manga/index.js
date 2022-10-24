import React, { useState } from "react";
import {
  Bottom,
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

const MangaComponent = (props) => {
  const {
    title: { english: title_english, romaji: title_romaji },
    cover,
    image,
    description,
    chapters,
    characters,
    color,
  } = props;
  const titlE = title_romaji || title_english;
  const [modalShow, setModalShow] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const desc = description.split("<br>")[0];

  console.log(props);
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
          <MangaChapters
            chapters={chapters}
            show={modalShow}
            setShow={setModalShow}
            setSelectedId={setSelectedId}
          />
          <Characters data={characters} wantVoiceActors={false} />
        </Bottom>
      </MangaWrapper>
      <Modal
        show={modalShow}
        setShow={setModalShow}
        id={selectedId}
        color={color}
      />
    </MangaContainer>
  );
};

export default MangaComponent;
