/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { getTrending } from "../../../utils/api/api";
import PostComponent from "../../Post";

function Trending({ page = 1, perPage = 10 }) {
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getTrending(page, perPage).then((data) => {
      setInfo(data);
      setLoading(false);
    });
  }, []);

  if (loading) return "loading...";
  return info.map((item) => (
    <PostComponent key={`trending-post-${item.id}`} {...item} />
  ));
}

export default Trending;
