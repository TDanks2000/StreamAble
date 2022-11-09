import React from "react";
import Slider from "react-slick";
import Related from "./Related";

const toInclude = ["tv", "manga"];

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 4.1,
  slidesToScroll: 2,
  adaptiveHeight: true,
  arrows: false,
  dots: false,
  centerMode: false,
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
