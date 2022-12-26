import { useState } from 'react';
import * as S from './style';
import { axiosPrivate } from '../../../apis/axios';

const CommentInput = ({ postId, setCommentList }) => {
  const image = JSON.parse(localStorage.getItem('profile-img'));
  const [txt, setTxt] = useState('');

  const onChangeInput = (e) => {
    setTxt(e.target.value);
  };

  const AddComment = async () => {
    const response = await axiosPrivate.post(
      `/post/${postId}/comments`,
      JSON.stringify({
        comment: {
          content: txt,
        },
      }),
    );
    console.log(response);
  };

  return (
    <S.FooterConatiner>
      <S.InputSection>
        <S.ProfileImg src={image} alt='프로필 이미지' />
        <S.InputText
          type='text'
          placeholder='댓글 입력하기...'
          onChange={onChangeInput}
          value={txt}
        />
        <S.CommentBtn
          className={txt ? 'active' : null}
          disabled={txt ? false : true}
          onClick={AddComment}
        >
          게시
        </S.CommentBtn>
      </S.InputSection>
    </S.FooterConatiner>
  );
};

export default CommentInput;
