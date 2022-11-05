import React from "react";
import { useAuth } from "../../../contexts/AuthContext";
import { UserActionsContainer } from "./styles";
import Like from "./like";
import WatchList from "./watchList";

const UserActions = ({ data }) => {
  const { currentUser } = useAuth();

  if (!currentUser) return <UserActionsContainer></UserActionsContainer>;

  return (
    <UserActionsContainer>
      {currentUser && (
        <>
          <Like data={data} currentUser={currentUser} />
          <WatchList data={data} currentUser={currentUser} />
        </>
      )}
    </UserActionsContainer>
  );
};

export default UserActions;
