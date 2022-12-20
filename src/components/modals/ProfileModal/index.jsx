import React from 'react';
import { useState } from 'react';
import LogoutModal from '../../alertModals/LogoutModal';
import ModalLayout from '../ModalLayout';

const ProfileModal = ({ setOpenModal }) => {
  const [openAlert, setOpenAlert] = useState(false);

  return (
    <>
      <ModalLayout setOpenModal={setOpenModal}>
        <li>설정 및 개인정보</li>
        <li onClick={() => setOpenAlert(true)}>로그아웃</li>
      </ModalLayout>
      {openAlert && (
        <LogoutModal setOpenAlert={setOpenAlert} setOpenModal={setOpenModal} />
      )}
    </>
  );
};

export default ProfileModal;
