/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { getTrending } from "../../../utils/api/api";
import PostComponent from "../../Post";

function Trending({ page = 1, perPage = 10 }) {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    getTrending(page, perPage).then((data) => {
      setInfo(data);
    });
  }, []);

  if (!info.length) return null;
  return info.map((item) => <PostComponent {...item} />);
}

export default Trending;
