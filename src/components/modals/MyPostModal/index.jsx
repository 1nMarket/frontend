import React from 'react';
import { useState } from 'react';
import ModalLayout from '../ModalLayout';
import PostRemoveModal from '../../alertModals/PostRemoveModal';

const MyPostModal = ({ setOpenModal }) => {
  const [openAelrt, setOpenAlert] = useState(false);

  return (
    <>
      <ModalLayout setOpenModal={setOpenModal}>
        <li onClick={() => setOpenAlert(true)}>삭제</li>
        <li>수정</li>
      </ModalLayout>
      {openAelrt && (
        <PostRemoveModal setOpenModal={setOpenModal} setOpenAlert={setOpenAlert} />
      )}
    </>
  );
};

export default MyPostModal;
