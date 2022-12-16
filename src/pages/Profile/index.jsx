import React from 'react';
import ProfileInfo from '../../components/profile/ProfileInfo';
import ProductList from '../../components/profile/ProductList';
import * as S from './style';
import PostsList from '../../components/profile/PostsList/index';

const Profile = () => {
  return (
    <>
      <S.Content>
        <ProfileInfo />
        <ProductList />
        <PostsList />
      </S.Content>
    </>
  );
};

export default Profile;
