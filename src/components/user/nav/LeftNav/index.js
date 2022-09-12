import React from "react";
import {
  LeftNavContainer,
  UnderInfo,
  UserIcon,
  UserName,
  UnderInfoContainer,
  LogOutText,
  Bottom,
} from "./LeftNav.styles";
import { MdLogout } from "react-icons/md";

const imgUrl = "https://pbs.twimg.com/media/Dqay-R6X0AEQZqo.jpg";

export const LeftNav = () => {
  return (
    <LeftNavContainer>
      <UserIcon>
        <img src={imgUrl} alt="" />
      </UserIcon>
      <UserName>UserName</UserName>
      <UnderInfoContainer>
        <UnderInfo>
          Joined: <span>jul 11, 2017</span>
        </UnderInfo>
        <UnderInfo>
          Watched: <span>200</span>
        </UnderInfo>
      </UnderInfoContainer>
      <Bottom>
        <LogOutText>
          <span>
            <MdLogout />
          </span>
          Log Out
        </LogOutText>
      </Bottom>
    </LeftNavContainer>
  );
};
