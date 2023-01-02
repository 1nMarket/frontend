import React from 'react';
import * as S from './style';
import { HeaderWrapper } from '../style';
import { Link } from 'react-router-dom';

const HomeHeader = () => {
  return (
    <HeaderWrapper>
      <S.Title>1N마켓 피드</S.Title>
      <Link to='/search'>
        <S.SearchIcon />
      </Link>
    </HeaderWrapper>
  );
};

export default HomeHeader;
