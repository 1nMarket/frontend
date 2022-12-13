import React from 'react';
import ProfileInfo from '../../components/profile/ProfileInfo';
import ProductList from '../../components/profile/ProductList';
import Header from '../../components/common/Header';
import * as S from './style';

const Profile = () => {
  return (
    <>
      <Header />
      <S.Content>
        <ProfileInfo />
        <ProductList />
      </S.Content>
    </>
  );
};

export default Profile;
