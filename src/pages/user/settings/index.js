import React from "react";
import { Wrapper } from "../styles";

import UserNav from "../../../components/user/nav";
import { UserSettingsComponent } from "../../../components/user/Settings";

export const UserSettings = () => {
  return (
    <div>
      <UserNav />
      <Wrapper>
        <UserSettingsComponent />
      </Wrapper>
    </div>
  );
};
