import React from 'react';
import ProfileInfo from '../../components/profile/ProfileInfo';
import ProductList from '../../components/profile/ProductList';
import Header from '../../components/common/Header';
import * as S from './style';
import { ReactComponent as LeftArrowIcon } from '../../assets/icons/icon-arrow-left.svg';
import { ReactComponent as ModalIcon } from '../../assets/icons/icon-more-vertical.svg';
import PostList from './../../components/profile/PostList/index';

const Profile = () => {
  return (
    <>
      <Header leftContent={<LeftArrowIcon />} rightContent={<ModalIcon />} />
      <S.Content>
        <ProfileInfo />
        <ProductList />
        <PostList />
      </S.Content>
    </>
  );
};

export default Profile;
