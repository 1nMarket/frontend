import React from 'react';
import { Outlet } from 'react-router-dom';
import * as S from './style';
import { ReactComponent as HomeIcon } from '../../../assets/icons/icon-home.svg'
import { ReactComponent as ChatIcon } from '../../../assets/icons/icon-message-circle.svg'
import { ReactComponent as PostIcon } from '../../../assets/icons/icon-edit.svg'
import { ReactComponent as ProfileIcon } from "../../../assets/icons/icon-user.svg"

const Navbar = () => {
  const accountName = JSON.parse(localStorage.getItem('accountname'));

  return (
    <>
      <Outlet />
      <S.NavWrapper>
        <S.NavList>
          <li>
            <S.StyledLink to='/home'>
              <HomeIcon/>
              <S.NavIconText>홈</S.NavIconText>
            </S.StyledLink>
          </li>

          <li>
            <S.StyledLink to='/chat'>
              <ChatIcon/>
              <S.NavIconText>채팅</S.NavIconText>
            </S.StyledLink>
          </li>

          <li>
            <S.StyledLink to='/post/upload'>
              <PostIcon/>
              <S.NavIconText>게시글 작성</S.NavIconText>
            </S.StyledLink>
          </li>

          <li>
            <S.StyledLink to={`/profile/${accountName}`}>
              <ProfileIcon/>
              <S.NavIconText>프로필</S.NavIconText>
            </S.StyledLink>
          </li>
        </S.NavList>
      </S.NavWrapper>
    </>
  )
};

export default Navbar;
