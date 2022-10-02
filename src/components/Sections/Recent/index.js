import React, { useEffect, useState } from "react";
import PostComponent from "../../Post";
import * as api from "../../../utils/api/api";

function Recent({ page, perPage }) {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    api.getRecentEpisodes(page, perPage).then((data) => {
      setInfo(data);
    });
  }, []);

  if (!info.length) return null;
  return info.map((item) => (
    <PostComponent isEpisode={true} key={`recent-post-${item.id}`} {...item} />
  ));
}

export default Recent;
