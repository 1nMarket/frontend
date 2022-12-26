import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import SaveHeader from '../../components/common/Header/SaveHeader';
import UserProfileForm from '../../components/user/UserProfileForm';

const ProfileModify = () => {
  const { state } = useLocation();
  console.log(state);
  const [profileImg, setProfileImg] = useState(state.image || '');
  const [username, setUsername] = useState(state.username || '');
  const [accountname, setAccountname] = useState(state.accountname || '');
  const [intro, setIntro] = useState(state.intro || '');
  const [canSave, setCanSave] = useState(false);

  return (
    <>
      <SaveHeader />
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
