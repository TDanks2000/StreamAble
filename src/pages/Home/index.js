import React, { useEffect, useState } from "react";
import TopRated from "../../components/Sections/TopRated";
import Popular from "../../components/Sections/Popular";
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
    api.getTopRated(7).then(({ data }) => {
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
        <Identifier>Popular</Identifier>
        <Wrapper>
          <Popular limit={9} type={1} />
        </Wrapper>
      </SectionContainer>
    </HomeContainer>
  );
}

export default Home;
