import React from "react";
import * as S from "./style"
import { HeaderWrapper } from "../style";

const SaveHeader = () => {
  return (
    <HeaderWrapper>
        <S.LeftIcon/>
        <S.RightIcon/>
    </HeaderWrapper>
  );
};

export default SaveHeader;