import React, { useState } from 'react';
import ProfileInfo from '../../components/profile/ProfileInfo';
import ProductList from '../../components/profile/ProductList';
import * as S from './style';
import MyPosts from '../../components/profile/MyPosts';
import ProfileHeader from '../../components/common/Header/ProfileHeader'
import ProfileModal from '../../components/modals/ProfileModal';


const Profile = () => {
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
