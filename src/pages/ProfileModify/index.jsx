import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { axiosPrivate } from '../../apis/axios';
import SaveHeader from '../../components/common/Header/SaveHeader';
import UserProfileForm from '../../components/user/UserProfileForm';

const ProfileModify = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [profileImg, setProfileImg] = useState(state?.image || '');
  const [username, setUsername] = useState(state?.username || '');
  const [accountname, setAccountname] = useState(state?.accountname || '');
  const [intro, setIntro] = useState(state?.intro || '');
  const [canSave, setCanSave] = useState(false);

  const handleProductUpload = async (e) => {
    e.preventDefault();
    if (!canSave) return;
    await axiosPrivate.put(
      '/user',
      JSON.stringify({
        user: {
          username,
          accountname,
          intro,
          image: profileImg,
        },
      }),
    );
    localStorage.setItem('accountname', JSON.stringify(accountname));
    localStorage.setItem('profile-img', JSON.stringify(profileImg));
    navigate(`/profile/${accountname}`);
  };

  useEffect(() => {
    if (!state) navigate('/home');
  }, []);

  return (
    <>
      <SaveHeader canSave={canSave} handleProductUpload={handleProductUpload} />
      <UserProfileForm
        profileImg={profileImg}
        setProfileImg={setProfileImg}
        username={username}
        setUsername={setUsername}
        accountname={accountname}
        setAccountname={setAccountname}
        intro={intro}
        setIntro={setIntro}
        canSave={canSave}
        setCanSave={setCanSave}
      />
    </>
  );
};

export default ProfileModify;
