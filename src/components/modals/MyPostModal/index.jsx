import React from 'react';
import ModalLayout from '../ModalLayout';

const MyPostModal = ({ setOpen }) => {

  return (
    <ModalLayout setOpen={setOpen}>
      <li>삭제</li>
      <li>수정</li>
    </ModalLayout>
  );
};

export default MyPostModal;
