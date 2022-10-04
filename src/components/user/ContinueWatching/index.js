import {
  collection,
  limit,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useAuth } from "../../../contexts/AuthContext";
import { db } from "../../../utils/firebase";
import PostComponent from "../../Post";
import { UserContainer, UserWrapper } from "../styles";
import { FaSpinner } from "react-icons/fa";

export const UserCWComponent = () => {
  const [movies, setMovies] = useState([]);
  const { currentUser } = useAuth();

  const movieID = collection(db, "users", `${currentUser?.email}`, "anime");
  const queryRef = query(movieID, where("watched", "!=", true), limit(10));

  useEffect(() => {
    const unSubscribe = onSnapshot(queryRef, (col) => {
      setMovies([]);
      const colData = col.docs;
      if (col.empty) {
        setMovies(null);
      }
      colData.forEach((doc) => {
        const newData = doc.data();
        setMovies((current) => [...current, newData]);
      });
    });

    return () => {
      return unSubscribe;
    };
  }, []);

  const getNextEpisode = (watched) => {
    if (watched !== true) {
      const currentEpisode = parseFloat(watched.split(" / ").shift());
      const totalEpisodes = parseFloat(watched.split(" / ").pop());

      return {
        nextEpisode:
          currentEpisode === totalEpisodes
            ? currentEpisode
            : Number(currentEpisode + 1),
        totalEpisodes: totalEpisodes,
      };
    } else {
      return { nextEpisode: false };
    }
  };

  if (movies === null) {
    return (
      <UserContainer>
        <span>You have watched everything!</span>
      </UserContainer>
    );
  }

  if (!movies.length)
    return (
      <UserContainer>
        <FaSpinner />
      </UserContainer>
    );

  return (
    <UserContainer>
      <UserWrapper>
        {movies.map((user, index) => {
          const nextEp = getNextEpisode(user.watched);

          if (nextEp.nextEpisode !== false) {
            return (
              <PostComponent
                key={`post-cw-${index}`}
                {...user}
                episodeNumber={nextEp.nextEpisode}
                wantMeta={false}
                isEpisode={true}
                subOrDub={""}
                number={nextEp.nextEpisode}
                image={user.image}
                title={user.title.english}
                id={user.id}
                wantWatched={true}
              />
            );
          }
        })}
      </UserWrapper>
    </UserContainer>
  );
};
