import React from 'react';
import { useParams } from 'react-router-dom';
import ProfileInfo from '../../components/profile/ProfileInfo';
import ProductList from '../../components/profile/ProductList';

const Profile = () => {
  const { accountname } = useParams();

  return (
    <>
      <ProfileInfo accountname={accountname} />
      <ProductList />
    </>
  );
};

export default Profile;
