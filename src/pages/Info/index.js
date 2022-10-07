/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import * as api from "../../utils/api/api";

import InfoComponent from "../../components/Info";
import { Error, GoBack } from "../styles";
import useLocalStorage from "../../hooks/useLocalStorage";

function Info() {
  let { pathname } = useLocation();
  const [data, setData] = useState(null);
  const [episodes, setEpisodes] = useState(null);
  const { id, typeDub = "sub" } = useParams();
  const [subOrDub, setSubOrDub] = useLocalStorage("typeDub", false);

  useEffect(() => {
    api.getData(id).then((res) => {
      setData(res);
    });
    api.getEpisodes(id, subOrDub).then((res) => {
      setEpisodes(res);
    });
  }, [id, subOrDub]);

  useEffect(() => {
    if (pathname.includes("sub")) {
      setSubOrDub(false);
    } else if (pathname.includes("dub")) {
      setSubOrDub(true);
    }
  }, [pathname]);

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
      subOrDub={subOrDub}
      typeDub={typeDub}
    />
  );
}

export default Info;
