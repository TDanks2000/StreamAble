import React, { useEffect, useState } from "react";
import { UserContainer, UserWrapper } from "../styles";
import PostComponent from "../../Post";
import {
  collection,
  limit,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { useAuth } from "../../../contexts/AuthContext";
import { db } from "../../../utils/firebase";
import { FaSpinner } from "react-icons/fa";

export const UserWLComponent = () => {
  const [movies, setMovies] = useState([]);
  const { currentUser } = useAuth();
  const movieID = collection(db, "users", `${currentUser?.email}`, "anime");
  const queryRef = query(movieID, where("wantWatch", "==", true), limit(10));

  useEffect(() => {
    if (currentUser?.email) {
      const unSubscribe = onSnapshot(queryRef, (col) => {
        setMovies([]);
        const colData = col.docs;
        if (col.empty) {
          setMovies(null);
        }
        colData.forEach((doc) => {
          setMovies((current) => [...current, doc.data()]);
        });
      });

      return () => {
        return unSubscribe;
      };
    }
  }, [currentUser?.email, queryRef]);

  if (movies === null) {
    return (
      <UserContainer>
        <span>You have not added anything to you Watch List</span>
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
        {movies.map((movie) => (
          <PostComponent key={`Watch-list-${movie.id}`} {...movie} />
        ))}
      </UserWrapper>
    </UserContainer>
  );
};
