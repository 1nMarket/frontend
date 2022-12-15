import React from "react";
import * as S from "./style"
import { HeaderWrapper } from "../style";

const HomeHeader = () => {
  return (
    <HeaderWrapper>
        <S.LeftIcon/>
        <S.RightIcon/>
    </HeaderWrapper>
  );
};

export default HomeHeader;
