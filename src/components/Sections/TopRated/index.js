/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { getTopRated } from "../../../utils/api/api";
import PostComponent from "../../Post";

function TopRated({ limit, offset }) {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    getTopRated(limit, offset).then((data) => {
      setInfo(data);
    });
  }, []);

  if (!info.data) return null;
  return info.data.map((item) => (
    <PostComponent key={`top-post-${i}`} {...item} />
  ));
}

export default TopRated;
