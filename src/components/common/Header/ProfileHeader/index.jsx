import React from "react";
import * as S from "./style"
import { HeaderWrapper } from "../style";

const ProfileHeader = () => {
  return (
    <HeaderWrapper>
        <S.LeftIcon/>
        <S.RightIcon/>
    </HeaderWrapper>
  );
};

export default ProfileHeader;