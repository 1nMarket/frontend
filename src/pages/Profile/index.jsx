import React from 'react';
import ProfileInfo from '../../components/profile/ProfileInfo';
import ProductList from '../../components/profile/ProductList';
import * as S from './style';
import PostList from './../../components/profile/PostList/index';

const Profile = () => {
  return (
    <>
      <S.Content>
        <ProfileInfo />
        <ProductList />
        <PostList />
      </S.Content>
    </>
  );
};

export default Profile;
