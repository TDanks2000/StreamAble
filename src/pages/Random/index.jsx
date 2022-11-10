import React, { useEffect, useState } from "react";
import InfoComponent from "../../components/Info";
import Loading from "../../components/Loading";
import * as api from "../../utils/api/api";

const Random = () => {
  const [randomAnime, setRandomAnime] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.getRandomAnime().then((res) => {
      setLoading(false);
      setRandomAnime(res);
    });
    return () => {
      setRandomAnime([]);
      setLoading(true);
    };
  }, []);

  if (loading) return <Loading />;
  return <InfoComponent {...randomAnime} episodes={randomAnime?.episodes} />;
};

export default Random;
