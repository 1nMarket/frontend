import React from 'react';
import ModalLayout from '../ModalLayout';

const PostModal = ({ setOpen }) => {

  return (
    <ModalLayout setOpen={setOpen}>
      <li>신고하기</li>
    </ModalLayout>
  );
};

export default PostModal;
