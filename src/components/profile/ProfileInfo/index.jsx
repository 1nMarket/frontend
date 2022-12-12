import React, { useState } from 'react';
import { useEffect } from 'react';
import { axiosPrivate } from '../../../apis/axios';

const ProfileInfo = ({ accountname }) => {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    const getUserInfo = async () => {
      const { data: { profile } } = await axiosPrivate.get(`/profile/${accountname}`);
      setProfile(profile);
    }
    getUserInfo();
  }, []);
  console.log(profile);

  return <div>ProfileInfo</div>;
};

export default ProfileInfo;
