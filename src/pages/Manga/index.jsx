import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading";
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
  }, [id]);

  if (loading) return <Loading />;
  return <MangaComponent {...data} />;
};

export default Manga;
