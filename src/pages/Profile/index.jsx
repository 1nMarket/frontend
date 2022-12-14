import React from 'react';
import ProfileInfo from '../../components/profile/ProfileInfo';
import ProductList from '../../components/profile/ProductList';
import Header from '../../components/common/Header';
import * as S from './style';
import { ReactComponent as LeftArrowIcon } from '../../assets/icons/icon-arrow-left.svg';
import { ReactComponent as ModalIcon } from '../../assets/icons/icon-more-vertical.svg';

const Profile = () => {
  return (
    <>
      <Header leftContent={<LeftArrowIcon/>} rightContent={<ModalIcon/>}/>
      <S.Content>
        <ProfileInfo />
        <ProductList />
      </S.Content>
    </>
  );
};

export default Profile;
