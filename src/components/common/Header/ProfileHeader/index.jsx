import React from "react";
import * as S from "./style"
import { HeaderWrapper } from "../style";

const ProfileHeader = ({ setOpen }) => {
  return (
    <HeaderWrapper>
        <S.LeftIcon/>
        <S.RightIcon onClick={() => setOpen(true)} />
    </HeaderWrapper>
  );
};

export default ProfileHeader;