import React, { useEffect, useState } from "react";
import Trending from "../../components/Sections/Trending";
import { Identifier, HomeContainer, SectionContainer } from "./Home.styles";
import * as api from "../../utils/api/api";
import { Banner } from "../../components/Banner";
import { BannerItem } from "../../components/Banner/BannerItem";
import Recent from "../../components/Sections/Recent";
import { useIsMobile } from "../../hooks/useIsMobile";
import ContinueWatching from "../../components/ContinueWatching";
import Slider from "react-slick";
import { useAuth } from "../../contexts/AuthContext";

const settings = {
  infinite: false,
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

function Home() {
  const { currentUser } = useAuth();
  const detectMobile = useIsMobile();
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    api.getPopular(1, 7).then((data) => {
      setPopular(data);
    });

    // if (detectMobile.isMobile())
    //   toastWarnNotify(
    //     "this website is not made for mobile, if you want the best experience please visit on desktop"
    //   );
  }, []);

  return (
    <HomeContainer>
      <Banner>
        {popular &&
          popular.map((res) => (
            <BannerItem
              key={res.id}
              {...res}
              to={`/anime/${res.id}/episode/1`}
            />
          ))}
      </Banner>
      {currentUser?.email ? (
        <SectionContainer>
          <Identifier>Continue Watching</Identifier>
          <ContinueWatching settings={settings} currentUser={currentUser} />
        </SectionContainer>
      ) : null}
      <SectionContainer>
        <Identifier>Recent Episodes</Identifier>
        <Recent perPage={7 * 4} settings={settings} />
      </SectionContainer>
      <SectionContainer>
        <Identifier>Trending</Identifier>
        <Trending perPage={7 * 3} settings={settings} />
      </SectionContainer>
    </HomeContainer>
  );
}

export default Home;
