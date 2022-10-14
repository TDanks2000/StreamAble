import React, { useEffect, useState } from "react";
import PostComponent from "../../Post";
import * as api from "../../../utils/api/api";

function Recent({ page, perPage }) {
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    api.getRecentEpisodes(page, perPage).then((data) => {
      setInfo(data);

      setLoading(false);
    });
  }, []);

  if (loading) return "loading...";
  return info.map((item) => (
    <PostComponent
      isEpisode={true}
      key={`recent-post-${item.id}-${item.episodeNumber}`}
      {...item}
    />
  ));
}

export default Recent;
