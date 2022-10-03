import React, { useEffect, useState } from "react";
import { db } from "../../../../utils/firebase";
import {} from "firebase/firestore/lite";
import { doc, onSnapshot, setDoc } from "firebase/firestore";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { ActionContainer } from "../styles";

const WatchList = ({ data, currentUser }) => {
  const [wantWatch, setWantWatch] = useState(false);
  const {
    id,
    title,
    image,
    malId,
    rating,
    releaseDate,
    cover,
    duration,
    color,
    totalEpisodes,
  } = data;

  const movieID = doc(db, "users", `${currentUser?.email}`, "anime", id);

  useEffect(() => {
    const unSubscribe = onSnapshot(movieID, (doc) => {
      const docWantWatch = doc.data()?.wantWatch;
      setWantWatch(docWantWatch);
    });

    return unSubscribe;
  }, [currentUser?.email, data]);

  const handleLike = async () => {
    if (currentUser?.email) {
      setWantWatch((prev) => !prev);

      setDoc(
        movieID,
        {
          wantWatch: !wantWatch,
          id,
          malId,
          rating,
          releaseDate,
          cover,
          duration,
          color,
          title,
          image,
          totalEpisodes,
        },
        { merge: true }
      );
    } else {
      alert("Please log in to save a movie");
    }
  };

  return (
    <ActionContainer onClick={handleLike}>
      {wantWatch !== true ? <FaRegBookmark /> : <FaBookmark />}
    </ActionContainer>
  );
};

export default WatchList;
