import React from "react";
import * as S from "./style"
import { HeaderWrapper } from "../style";

const SearchHeader = () => {
  return (
    <HeaderWrapper>
        <S.LeftIcon/>
        <S.RightIcon></S.RightIcon>
    </HeaderWrapper>
  );
};

export default SearchHeader;