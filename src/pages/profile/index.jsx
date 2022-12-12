import React from 'react';
import { useParams } from 'react-router-dom';
import ProfileInfo from '../../components/profile/ProfileInfo';

const Profile = () => {
  const { accountname } = useParams();

  return <ProfileInfo accountname={accountname} />;
};

export default Profile;
