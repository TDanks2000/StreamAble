/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { getTrending } from "../../../utils/api/api";
import PostComponent from "../../Post";

import Slider from "react-slick";
import Loading from "../../Loading";

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 7.1,
  slidesToScroll: 5,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1524,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 890,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 790,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 580,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 300,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
  adaptiveHeight: false,
  arrows: false,
  dots: false,
};

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

  if (loading) return <Loading />;
  return (
    <Slider {...settings}>
      {info.map((item) => (
        <PostComponent key={`trending-post-${item.id}`} {...item} />
      ))}
    </Slider>
  );
}

export default Trending;
