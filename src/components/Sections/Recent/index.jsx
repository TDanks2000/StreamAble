import React, { useEffect, useState } from "react";
import PostComponent from "../../Post";
import * as api from "../../../utils/api/api";

import Slider from "react-slick";

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 7.1,
  slidesToScroll: 5,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
  adaptiveHeight: false,
  arrows: false,
  dots: false,
};

function Recent({ page, perPage }) {
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    api.getRecentEpisodes(page, perPage).then((data) => {
      setInfo(data);

      setLoading(false);
    });
  }, [page, perPage]);

  if (loading) return "loading...";
  return (
    <Slider {...settings}>
      {info.map((item) => (
        <PostComponent
          isEpisode={true}
          key={`recent-post-${item.id}-${item.episodeNumber}`}
          {...item}
        />
      ))}
    </Slider>
  );
}

export default Recent;
