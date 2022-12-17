import React from 'react';
import { Outlet } from 'react-router-dom';
import * as S from './style';
import { ReactComponent as HomeIcon } from '../../../assets/icons/icon-home.svg'
import { ReactComponent as ChatIcon } from '../../../assets/icons/icon-message-circle.svg'
import { ReactComponent as PostIcon } from '../../../assets/icons/icon-edit.svg'
import { ReactComponent as ProfileIcon } from "../../../assets/icons/icon-user.svg"



const Navbar = () => {
  return (
    <>
      <Outlet />
      <S.NavWrapper>
        <S.NavList>
          <S.NavItem>
            <HomeIcon/>
            <S.NavText>홈</S.NavText>
          </S.NavItem>

          <S.NavItem>
            <ChatIcon/>
            <S.NavText>채팅</S.NavText>
          </S.NavItem>

          <S.NavItem>
            <PostIcon/>
            <S.NavText>게시글 작성</S.NavText>
          </S.NavItem>

          <S.NavItem>
            <ProfileIcon/>
            <S.NavText>프로필</S.NavText>
          </S.NavItem>
        </S.NavList>

      </S.NavWrapper>
    </>
  )
};

export default Navbar;
