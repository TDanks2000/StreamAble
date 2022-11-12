import React, { useEffect, useState } from "react";
import Trending from "../../components/Sections/Trending";
import { Identifier, HomeContainer, SectionContainer } from "./Home.styles";
import * as api from "../../utils/api/api";
import { Banner } from "../../components/Banner";
import { BannerItem } from "../../components/Banner/BannerItem";
import Recent from "../../components/Sections/Recent";
import { useIsMobile } from "../../hooks/useIsMobile";
import { toastWarnNotify } from "../../utils/toast/Notify";

function Home() {
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
      <SectionContainer>
        <Identifier>Recent Episodes</Identifier>
        <Recent perPage={7 * 4} />
      </SectionContainer>
      <SectionContainer>
        <Identifier>Trending</Identifier>
        <Trending perPage={7 * 3} />
      </SectionContainer>
    </HomeContainer>
  );
}

export default Home;
