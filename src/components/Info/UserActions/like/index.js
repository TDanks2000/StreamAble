import React, { useEffect, useState } from "react";
import { db } from "../../../../utils/firebase";
import {} from "firebase/firestore/lite";
import { arrayUnion, doc, updateDoc, onSnapshot } from "firebase/firestore";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { LikeContainer } from "./like.styles";

const Like = ({ data, currentUser }) => {
  const [liked, setLiked] = useState(false);
  let [movies, setMovies] = useState([]);
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
  } = data;

  const movieID = doc(db, "users", `${currentUser?.email}`);

  useEffect(() => {
    onSnapshot(movieID, (doc) => {
      const moviesFilter = doc.data()?.movies?.filter((item) => item.id !== id);
      const result = doc.data()?.movies?.filter((item) => item.id === id);
      setMovies(moviesFilter);
      if (result.length > 0) return setLiked(true);
      else return setLiked(false);
    });
  }, [currentUser?.email, data]);

  const handleLike = async () => {
    if (currentUser?.email) {
      if (liked === false) {
        setLiked(true);
        await updateDoc(movieID, {
          movies: arrayUnion({
            id,
            malId,
            rating,
            releaseDate,
            cover,
            duration,
            color,
            title,
            image,
          }),
        });
      } else {
        setLiked(false);
        console.log(movies);
        await updateDoc(movieID, {
          movies: movies,
        });
      }
    } else {
      alert("Please log in to save a movie");
    }
  };

  return (
    <LikeContainer onClick={handleLike}>
      {liked !== true ? <FaRegHeart /> : <FaHeart />}
    </LikeContainer>
  );
};

export default Like;
