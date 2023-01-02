import React, { useState } from 'react';
import {
  ProfileInfo,
  ProductList,
  MyPosts,
  ProfileHeader,
  ProfileModal,
} from 'components';
import * as S from './style';
import { useTitle } from 'hooks';

const Profile = () => {
  useTitle('1nMarket - Profile');
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <ProfileHeader setOpenModal={setOpenModal} />
      <S.Content>
        <ProfileInfo />
        <ProductList />
        <MyPosts />
      </S.Content>
      {openModal && <ProfileModal setOpenModal={setOpenModal} />}
    </>
  );
};

export default Profile;
