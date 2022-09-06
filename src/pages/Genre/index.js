import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PostComponent from "../../components/Post";

import * as api from "../../utils/api/api";
import { GenreContainer, GenreTitle, GenreWrapper } from "./Genre.styles";

const Genre = () => {
  const [data, setData] = useState([]);
  const { genre } = useParams();

  useEffect(() => {
    api.getGenre([genre], 1, 7 * 4).then((res) => {
      setData(res);
    });
  }, [genre]);

  if (!data?.results?.length) return null;
  return (
    <GenreContainer>
      <GenreTitle>{genre}</GenreTitle>
      <GenreWrapper>
        {data.results.map((res) => {
          return <PostComponent key={res.id} {...res} />;
        })}
      </GenreWrapper>
    </GenreContainer>
  );
};

export default Genre;
