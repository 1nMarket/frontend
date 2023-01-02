import React from "react";
import * as S from "./style"
import { HeaderWrapper } from "../style";
import { useNavigate } from "react-router-dom";

const SearchHeader = ({ setKeyword }) => {
  const onChangeKeyword = (e) => {
    setKeyword(e.target.value);
  };

  const navigate = useNavigate();

  return (
    <HeaderWrapper>
        <S.LeftIcon onClick={() => navigate(-1)}/>
        <S.SearchInput
          type='text'
          placeholder='계정 검색'
          onChange={onChangeKeyword}
        />
    </HeaderWrapper>
  );
};

export default SearchHeader;