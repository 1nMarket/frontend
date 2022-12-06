import React from 'react';
import * as S from './style';
import { Outlet } from 'react-router-dom';

const Layout = () => {

  return (
    <S.Container>
      <Outlet />
    </S.Container>
  )
}

export default Layout