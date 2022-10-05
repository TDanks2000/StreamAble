import React, { useEffect, useState } from "react";
import PostComponent from "../../Post";
import * as api from "../../../utils/api/api";
import { datesGroupByComponent, numberToDay } from "../../../utils/Helpers";

function AiringSchedule({ wrapper: Wrapper }) {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    api.getAiringSchedule(40).then((data) => {
      //   setInfo(data);
      const grouped = datesGroupByComponent(data.results, "d");
      setInfo(grouped);
    });
  }, []);

  if (!info) return null;
  return (
    <div>
      {Object.keys(info).map((key, index) => {
        const res = info[key];
        return (
          <>
            <strong>{numberToDay(key)}</strong>
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
          </>
        );
      })}
    </div>
  );
}

export default AiringSchedule;
