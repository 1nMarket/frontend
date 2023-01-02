import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './style';

function Missing() {
  const navigate = useNavigate();

  return (
    <S.ErrorWrapper>
      <S.ErrorIcon />
      <S.ErrorText>페이지를 찾을 수 없습니다. :(</S.ErrorText>
      <S.PreButton onClick={() => navigate(-1)}>이전 페이지</S.PreButton>
    </S.ErrorWrapper>
  );
}

export default Missing;
