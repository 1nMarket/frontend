import React from 'react';
import { useState } from 'react';
import LogoutModal from '../../alertModals/LogoutModal';
import ModalLayout from '../ModalLayout';

const ProfileModal = ({ setOpen }) => {
  const [openAlert, setOpenAlert] = useState(false);

  return (
    <>
      <ModalLayout setOpen={setOpen}>
        <li>설정 및 개인정보</li>
        <li onClick={() => {setOpenAlert(true); console.log('hi')}}>로그아웃</li>
      </ModalLayout>
      {openAlert && <LogoutModal setOpenAlert={setOpenAlert} />}
    </>
  );
};

export default ProfileModal;
