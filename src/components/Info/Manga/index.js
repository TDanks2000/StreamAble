import React, { useEffect, useState } from "react";
import { FaBook } from "react-icons/fa";
import * as api from "../../../utils/api/api";
import { Button, Container } from "./Manga.styles";

const MangaInfo = ({ title }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const titleReplace = title.replace(" Part ", "").replace(/\s?[0-9]/g, "");

  useEffect(() => {
    setLoading(true);
    api
      .getMangaFromAnimeTitle(titleReplace)
      .then((res) => {
        if (res.length < 1) return setLoading(true);
        setLoading(false);
        setData(res);
      })
      .catch((err) => {
        setLoading(true);
      });
  }, []);

  if (loading) return null;
  return (
    <Container>
      <Button to={`/manga/${data.id}/chapter`}>
        <FaBook />
      </Button>
    </Container>
  );
};

export default MangaInfo;
