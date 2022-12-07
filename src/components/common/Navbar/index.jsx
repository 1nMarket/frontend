import React from 'react';
import { Outlet } from 'react-router-dom';
import * as S from './style';

const Navbar = () => {
  return (
    <>
      <Outlet />
      <S.NavWrapper>
        NavBar
      </S.NavWrapper>
    </>
  )
};

export default Navbar;
