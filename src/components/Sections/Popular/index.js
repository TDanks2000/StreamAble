import React, { useEffect, useState } from "react";
import PostComponent from "../../Post";
import * as api from "../../../utils/api/api";
function Popular({ limit, type }) {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    api.getPopular({ limit, type }).then((data) => {
      setInfo(data);
    });
  }, []);

  if (!info.length) return null;
  return info.map((item) => <PostComponent {...item} />);
}

export default Popular;
