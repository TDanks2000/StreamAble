import {
  collection,
  limit,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { db } from "../../utils/firebase";
import PostComponent from "../Post";

const ContinueWatching = ({ settings, currentUser }) => {
  if (!currentUser?.email) return null;

  const [list, setList] = useState([]);
  const movieID = collection(db, "users", `${currentUser?.email}`, "anime");
  const queryRef = query(movieID, where("episodes", "!=", []), limit(10));

  useEffect(() => {
    const unSubscribe = onSnapshot(queryRef, (col) => {
      setList([]);
      const docs = col.docs;
      if (col.empty) setMovies([]);
      docs.forEach((doc) => {
        setList((prev) => [...prev, doc.data()]);
      });
    });

    return () => {
      return unSubscribe;
    };
  }, []);

  if (!list.length) return null;

  return (
    <Slider {...settings}>
      {list.map((item, index) => {
        return (
          <PostComponent
            key={`post-cw-${index}`}
            {...item}
            title={{
              userPreferred: item.title.romaji,
            }}
            episodeNumber={item?.episodes[item?.episodes.length - 1].number}
            wantMeta={false}
            isEpisode={true}
            subOrDub={""}
            number={item?.episodes[item?.episodes.length - 1].number}
            wantWatched={false}
          />
        );
      })}
    </Slider>
  );
};

export default ContinueWatching;
