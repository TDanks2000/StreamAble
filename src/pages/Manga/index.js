import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MangaComponent from "../../components/Manga";

import * as api from "../../utils/api/api";

const Manga = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    api
      .getMangaInfo(id)
      .then((res) => {
        setData(res);
        setLoading(false);
      })
      .catch((err) => setLoading(true));
  }, []);

  if (loading) return "loading...";
  return <MangaComponent {...data} />;
};

export default Manga;
