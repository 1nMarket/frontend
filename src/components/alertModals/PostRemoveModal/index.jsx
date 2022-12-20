import React from 'react';
import AlertModalLayout from '../AlertModalLayout';

const PostRemoveModal = ({ setOpenModal, setOpenAlert }) => {
  const handleCancel = () => {
    setOpenAlert(false);
    setOpenModal(false);
  };

  const handleRemove = async () => {

  }

  return (
    <AlertModalLayout comment='게시글을 삭제할까요?'>
      <li onClick={handleCancel}>취소</li>
      <li onClick={handleRemove}>삭제</li>
    </AlertModalLayout>
  );
};

export default PostRemoveModal;
