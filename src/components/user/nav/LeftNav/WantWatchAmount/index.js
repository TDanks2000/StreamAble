import React, { useEffect, useState } from "react";
import { db } from "../../../../../utils/firebase";
import { UnderInfo } from "../LeftNav.styles";
import { onSnapshot, where, query, collection } from "firebase/firestore";

const WantWatch = ({ currentUser }) => {
  const [wantWatchedAmount, setWantWatchedAmount] = useState(false);
  const movieID = collection(db, "users", `${currentUser?.email}`, "anime");
  const queryRef = query(movieID, where("wantWatch", "==", true));

  useEffect(() => {
    if (currentUser?.email) {
      onSnapshot(queryRef, (col) => {
        if (col.empty) {
          setWantWatchedAmount(null);
        }
        setWantWatchedAmount(col.size);
      });
    }
  }, []);

  return (
    <UnderInfo>
      Watch list: <span>{wantWatchedAmount}</span>
    </UnderInfo>
  );
};

export default WantWatch;
