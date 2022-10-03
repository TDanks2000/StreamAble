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

export const UserCWComponent = () => {
  const [movies, setMovies] = useState([]);
  const { currentUser } = useAuth();

  const movieID = collection(db, "users", `${currentUser?.email}`, "anime");
  const queryRef = query(movieID, where("episodes", "!=", "null"), limit(10));

  useEffect(() => {
    const unSubscribe = onSnapshot(queryRef, (col) => {
      setMovies([]);
      const colData = col.docs;
      colData.forEach((doc) => {
        const newData = doc.data()?.episodes?.pop();
        setMovies((current) => [...current, newData]);
      });
    });

    return () => {
      return unSubscribe;
    };
  }, []);

  return (
    <UserContainer>
      <UserWrapper>
        {movies.map((user, index) => (
          <PostComponent
            key={`post-cw-${index}`}
            {...user}
            image={user.animePoster}
            title={user.animeTitle}
            id={user.animeId}
            wantWatched={true}
          />
        ))}
      </UserWrapper>
    </UserContainer>
  );
};
