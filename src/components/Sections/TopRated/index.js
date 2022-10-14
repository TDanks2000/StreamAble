/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { getTopRated } from "../../../utils/api/api";
import PostComponent from "../../Post";

function TopRated({ limit, offset }) {
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getTopRated(limit, offset).then((data) => {
      setInfo(data);
      setLoading(false);
    });
  }, []);

  if (loading) return "loading...";
  return info.data.map((item) => (
    <PostComponent key={`top-post-${i}`} {...item} />
  ));
}

export default TopRated;
