import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import PostComponent from "../../components/Post";

import * as api from "../../utils/api/api";
import { GenreContainer, GenreTitle, GenreWrapper } from "./Genre.styles";

const Genre = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { genre } = useParams();

  useEffect(() => {
    setLoading(true);
    api.getGenre([genre], 1, 7 * 4).then((res) => {
      setData(res);
      setLoading(false);
    });
  }, [genre]);

  if (loading) return <Loading />;
  return (
    <GenreContainer>
      <GenreTitle>{genre}</GenreTitle>
      <GenreWrapper>
        {data.results.map((res) => {
          return <PostComponent key={`genres-${res.id}`} {...res} />;
        })}
      </GenreWrapper>
    </GenreContainer>
  );
};

export default Genre;
