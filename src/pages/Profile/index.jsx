import React, { useState } from 'react';
import ProfileInfo from '../../components/profile/ProfileInfo';
import ProductList from '../../components/profile/ProductList';
import * as S from './style';
import MyPosts from '../../components/profile/MyPosts';
import ProfileHeader from '../../components/common/Header/ProfileHeader'
import ProfileModal from '../../components/modals/ProfileModal';


const Profile = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ProfileHeader setOpen={setOpen} />
      <S.Content>
        <ProfileInfo />
        <ProductList />
        <MyPosts />
      </S.Content>
      {open && <ProfileModal setOpen={setOpen} />}
    </>
  );
};

export default Profile;
