import React from 'react';
import ProfileInfo from '../../components/profile/ProfileInfo';
import ProductList from '../../components/profile/ProductList';
import * as S from './style';
import MyPosts from '../../components/profile/MyPosts';
import ProfileHeader from '../../components/common/Header/ProfileHeader'

const Profile = () => {
  return (
    <>
      <ProfileHeader />
      <S.Content>
        <ProfileInfo />
        <ProductList />
        <MyPosts />
      </S.Content>
    </>
  );
};

export default Profile;
