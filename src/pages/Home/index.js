import React from "react";
import TopRated from "../../components/Sections/TopRated";
import Popular from "../../components/Sections/Popular";
import {
  Identifier,
  Wrapper,
  HomeContainer,
  SectionContainer,
} from "./Home.styles";

function Home() {
  return (
    <HomeContainer>
      <SectionContainer>
        <Identifier>Popular</Identifier>
        <Wrapper>
          <Popular limit={9} type={1} />
        </Wrapper>
      </SectionContainer>
      <SectionContainer>
        <Identifier>Top Rated</Identifier>
        <Wrapper>
          <TopRated limit={9 * 2} type={1} />
        </Wrapper>
      </SectionContainer>
    </HomeContainer>
  );
}

export default Home;
