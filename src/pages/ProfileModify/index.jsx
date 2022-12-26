import React, { useState } from 'react';
import SaveHeader from '../../components/common/Header/SaveHeader';
import UserProfileForm from '../../components/user/UserProfileForm';

const ProfileModify = () => {
  const [profileImg, setProfileImg] = useState('');
  const [username, setUsername] = useState('');
  const [accountname, setAccountname] = useState('');
  const [intro, setIntro] = useState('');
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
