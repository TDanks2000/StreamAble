/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import * as api from "../../utils/api/api";

import InfoComponent from "../../components/Info";
import { Error, GoBack } from "../styles";

function Info() {
  const storageTypeDub = localStorage.getItem("typeDub");
  const [data, setData] = useState(null);
  const [episodes, setEpisodes] = useState(null);
  const { id, typeDub = "sub" } = useParams();
  const [subOrDub, setSubOrDub] = useState(typeDub === "sub" ? false : true);

  useEffect(() => {
    api.getData(id).then((res) => {
      console.log(res);
      setData(res);
    });
    api
      .getEpisodes(id, storageTypeDub ? storageTypeDub : subOrDub)
      .then((res) => {
        setEpisodes(res);
      });
  }, [id, subOrDub]);

  if (!episodes) return "loading...";
  if (!data) return "loading...";

  if (data?.error)
    return (
      <>
        <Error>there was an error!</Error>
        <GoBack />
      </>
    );
  return (
    <InfoComponent
      {...data}
      episodes={episodes}
      setSubOrDub={setSubOrDub}
      subOrDub={storageTypeDub ? storageTypeDub : subOrDub}
      typeDub={typeDub}
    />
  );
}

export default Info;
