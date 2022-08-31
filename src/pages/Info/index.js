/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import * as api from "../../utils/api/api";

import InfoComponent from "../../components/Info";

function Info() {
  let location = useLocation();
  const from = location?.state?.from;
  const [data, setData] = useState(null);
  const [episodes, setEpisodes] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    if (from?.toLowerCase() === "gogoanime") {
      api.getGoGoInfo(id).then((res) => {
        setData(res);
      });
    }
    if (from?.toLowerCase() === "animixplay") {
      api.getEpisodes(id).then((res) => {
        setEpisodes(res.data);
      });
      api.getAnimaxInfo(id).then((res) => {
        setData(res);
      });
    }

    if (!from) {
      api.getEpisodes(id).then((res) => {
        setEpisodes(res.data);
      });
      api.getAnimaxInfo(id).then((res) => {
        setData(res);
      });
    }
  }, []);

  if (!episodes) return "loading...";
  if (!data) return "loading...";
  return <InfoComponent {...data} episodesData={episodes} from={from} />;
}

export default Info;
