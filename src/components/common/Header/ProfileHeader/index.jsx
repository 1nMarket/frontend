import React from "react";
import * as S from "./style"
import { HeaderWrapper } from "../style";

const ProfileHeader = ({ setOpenModal }) => {
  return (
    <HeaderWrapper>
        <S.LeftIcon/>
        <S.RightIcon onClick={() => setOpenModal(true)} />
    </HeaderWrapper>
  );
};

export default ProfileHeader;