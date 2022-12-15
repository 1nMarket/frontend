import React from "react";
import * as S from "./style"
import { HeaderWrapper } from "../style";

const SearchHeader = ({ setKeyword }) => {
  const onChangeKeyword = (e) => {
    setKeyword(e.target.value);
  };

  return (
    <HeaderWrapper>
        <S.LeftIcon/>
        <S.SearchInput
          type='text'
          placeholder='계정 검색'
          onChange={onChangeKeyword}
        />
    </HeaderWrapper>
  );
};

export default SearchHeader;