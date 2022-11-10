/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import * as api from "../../utils/api/api";

import InfoComponent from "../../components/Info";
import { Error, GoBack } from "../styles";
import useLocalStorage from "../../hooks/useLocalStorage";
import Loading from "../../components/Loading";

function Info() {
  let { pathname } = useLocation();
  const [data, setData] = useState(null);
  const [episodes, setEpisodes] = useState(null);
  const { id, typeDub = "sub" } = useParams();
  const [typeSubOrDub, setTypeSubOrDub] = useLocalStorage("typeDub", false);

  useEffect(() => {
    api.getInfo(id, typeSubOrDub).then((res) => {
      setData(res);
    });
    api.getEpisodes(id, typeSubOrDub).then((res) => {
      setEpisodes(res);
    });
    return () => {
      setData(null);
      setEpisodes(null);
      return false;
    };
  }, [id, typeSubOrDub]);

  useEffect(() => {
    if (pathname.includes("sub")) {
      setTypeSubOrDub(false);
    } else if (pathname.includes("dub")) {
      setTypeSubOrDub(true);
    }
  }, [pathname]);

  if (!episodes) return <Loading />;
  if (!data) return <Loading />;

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
      setSubOrDub={setTypeSubOrDub}
      typeSubOrDub={typeSubOrDub}
      typeDub={typeDub}
    />
  );
}

export default Info;
