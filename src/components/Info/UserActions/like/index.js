import React, { useEffect, useState } from "react";
import { db } from "../../../../utils/firebase";
import {} from "firebase/firestore/lite";
import { doc, onSnapshot, setDoc } from "firebase/firestore";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { ActionContainer } from "../styles";

const Like = ({ data, currentUser }) => {
  const [liked, setLiked] = useState(false);
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
      const docLiked = doc.data()?.liked;
      setLiked(docLiked);
    });
    return unSubscribe;
  }, [currentUser?.email, data, movieID]);

  const handleLike = async () => {
    if (currentUser?.email) {
      setLiked((prev) => !prev);

      setDoc(
        movieID,
        {
          liked: !liked,
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
      {liked !== true ? <FaRegHeart /> : <FaHeart />}
    </ActionContainer>
  );
};

export default Like;
