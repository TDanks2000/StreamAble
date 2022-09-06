import React, { useEffect, useState } from "react";
import Trending from "../../components/Sections/Trending";
import {
  Identifier,
  Wrapper,
  HomeContainer,
  SectionContainer,
} from "./Home.styles";
import * as api from "../../utils/api/api";
import { Banner } from "../../components/Banner";
import { BannerItem } from "../../components/Banner/BannerItem";

function Home() {
  const [topRated, setTopRated] = useState([]);
  useEffect(() => {
    api.getPopular(1, 7).then((data) => {
      setTopRated(data);
    });
  }, []);

  return (
    <HomeContainer>
      <Banner>
        {topRated &&
          topRated.map((res) => <BannerItem key={res.id} {...res} />)}
      </Banner>
      <SectionContainer>
        <Identifier>Trending</Identifier>
        <Wrapper>
          <Trending perPage={7 * 2} />
        </Wrapper>
      </SectionContainer>
    </HomeContainer>
  );
}

export default Home;
