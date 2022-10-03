import React from "react";
import Like from "./like";
import { useAuth } from "../../../contexts/AuthContext";
import { UserActionsContainer } from "./styles";

const UserActions = ({ data }) => {
  const { currentUser } = useAuth();

  return (
    <UserActionsContainer>
      <Like data={data} currentUser={currentUser} />
    </UserActionsContainer>
  );
};

export default UserActions;
