import React from 'react';
import { Outlet } from 'react-router-dom';
import * as S from './style';
import { ReactComponent as HomeIcon } from '../../../assets/icons/icon-home.svg'
import { ReactComponent as ChatIcon } from '../../../assets/icons/icon-message-circle.svg'
import { ReactComponent as PostIcon } from '../../../assets/icons/icon-edit.svg'
import { ReactComponent as ProfileIcon } from "../../../assets/icons/icon-user.svg"
import { ReactComponent as HomeIconText } from '../../../assets/icons/icon-home-text.svg'
import { ReactComponent as ChatIconText } from '../../../assets/icons/icon-message-circle-text.svg'
import { ReactComponent as PostIconText } from '../../../assets/icons/icon-edit-text.svg'
import { ReactComponent as ProfileIconText } from "../../../assets/icons/icon-user-text.svg"


const Navbar = () => {
  return (
    <>
      <Outlet />
      <S.NavWrapper>
        <S.NavList>
          <S.NavItem><HomeIcon/></S.NavItem>
          <S.NavItem><ChatIcon/></S.NavItem>
          <S.NavItem><PostIcon/></S.NavItem>
          <S.NavItem><ProfileIcon/></S.NavItem>
        </S.NavList>
        <S.NavList>
          <S.NavItem><HomeIconText style={{marginLeft: "7px"}}/></S.NavItem>
          <S.NavItem><ChatIconText style={{marginRight: "2px"}}/></S.NavItem>
          <S.NavItem><PostIconText style={{marginRight: "10px"}}/></S.NavItem>
          <S.NavItem><ProfileIconText style={{marginLeft: "0px"}}/></S.NavItem>
        </S.NavList>
      </S.NavWrapper>
    </>
  )
};

export default Navbar;
