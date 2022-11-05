import React, { useEffect, useState } from "react";
import PostComponent from "../../Post";
import * as api from "../../../utils/api/api";
import { datesGroupByComponent, numberToDay } from "../../../utils/Helpers";
import {
  Container,
  DayTitle,
  ItemsContainer,
  Wrapper,
} from "./AiringSchedule..styles";

function AiringSchedule() {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    api.getAiringSchedule(150).then((data) => {
      //   setInfo(data);
      const grouped = datesGroupByComponent(data.results, "d");
      setInfo(grouped);
    });
  }, []);

  if (!info) return null;
  return (
    <Container>
      {Object.keys(info).map((key, index) => {
        const res = info[key];
        return (
          <ItemsContainer>
            <DayTitle>{numberToDay(key)}</DayTitle>
            <Wrapper>
              {res.map((r) => (
                <PostComponent
                  key={`airing-post-${r.id}`}
                  {...r}
                  aired={r.airingAt * 1000}
                  wantMeta={false}
                  wantMetaDate={true}
                  wantRating={false}
                />
              ))}
            </Wrapper>
          </ItemsContainer>
        );
      })}
    </Container>
  );
}

export default AiringSchedule;
