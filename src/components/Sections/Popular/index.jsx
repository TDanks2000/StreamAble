import React, { useEffect, useState } from "react";
import PostComponent from "../../Post";
import * as api from "../../../utils/api/api";
function Popular({ limit, type }) {
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    api.getPopular({ limit, type }).then((data) => {
      setInfo(data);
      setLoading(false);
    });
  }, []);

  if (loading) return "loading...";
  return info.map((item, i) => (
    <PostComponent key={`popular-post-${i}`} {...item} />
  ));
}

export default Popular;
