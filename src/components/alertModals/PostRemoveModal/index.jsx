import React from 'react';
import { axiosPrivate } from 'apis/axios';
import AlertModalLayout from '../AlertModalLayout';

const PostRemoveModal = ({
  postId,
  setOpenModal,
  setOpenAlert,
  setPostsList,
}) => {
  const handleCancel = () => {
    setOpenAlert(false);
    setOpenModal(false);
  };

  const handleRemove = async () => {
    await axiosPrivate.delete(`post/${postId}`);
    setOpenAlert(false);
    setOpenModal(false);
    setPostsList((prev) => prev.filter(({ id }) => id !== postId));
  };

  return (
    <AlertModalLayout comment='게시글을 삭제할까요?'>
      <li onClick={handleCancel}>취소</li>
      <li onClick={handleRemove}>삭제</li>
    </AlertModalLayout>
  );
};

export default PostRemoveModal;
