import React from "react";
import Slider from "react-slick";
import Related from "./Related";

const toInclude = ["tv", "manga"];

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

const Relations = ({ related }) => {
  const relatedFiltered = related.filter((item) => {
    const type = item.type?.toLowerCase();
    return toInclude.includes(type);
  });

  const sortedArray = relatedFiltered.sort((a, b) => {
    var nA = a.type.toLowerCase();
    var nB = b.type.toLowerCase();

    if (nA < nB) return -1;
    else if (nA > nB) return 1;
    return 0;
  });

  if (sortedArray.length < 1) return null;

  return (
    <Slider {...settings}>
      {sortedArray.map((item) => (
        <Related {...item} key={`relations-${item.id}`} />
      ))}
    </Slider>
  );
};

export default Relations;
