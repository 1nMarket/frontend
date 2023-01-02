import React from 'react';
import { useState } from 'react';
import ModalLayout from '../ModalLayout';
import PostRemoveModal from '../../alertModals/PostRemoveModal';
import * as S from './style';

const MyPostModal = ({ setOpenModal, postId, setPostsList, post }) => {
  const [openAelrt, setOpenAlert] = useState(false);

  return (
    <>
      <ModalLayout setOpenModal={setOpenModal}>
        <li onClick={() => setOpenAlert(true)}>삭제</li>
        <li>
          <S.PostEditLink to={`/post/${postId}/edit`} state={{ ...post }}>수정</S.PostEditLink>
        </li>
      </ModalLayout>
      {openAelrt && (
        <PostRemoveModal
          postId={postId}
          setOpenModal={setOpenModal}
          setOpenAlert={setOpenAlert}
          setPostsList={setPostsList}
        />
      )}
    </>
  );
};

export default MyPostModal;
