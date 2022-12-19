import React from 'react';
import ModalLayout from '../ModalLayout';

const ProfileModal = ({ setOpen }) => {
  

  return (
    <ModalLayout setOpen={setOpen}>
      <li>설정 및 개인정보</li>
      <li>
        <button>로그아웃</button>
      </li>
    </ModalLayout>
  );
};

export default ProfileModal;
