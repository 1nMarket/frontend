import { useState } from 'react';
import axios from 'axios';
import UserProfile from '../../../assets/basic-profile-img.png';
import ProfileInfo from '../../profile/ProfileInfo';

const CommentInput = ({ postId, setCommentList }) => {
  const token = localStorage.getItem('token');
  const [txt, setTxt] = useState('');

  const onChangeInput = (e) => {
    setTxt(e.target.value);
  };

  const AddComment = async () => {
    try {
      await axios.post(
        `https://mandarin.api.weniv.co.kr/post/${postId}/comments`,
        {
          comment: {
            content: txt,
          },
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-type': 'application/json',
          },
        },
      );
      setCommentList();
      setTxt('');
    } catch (error) {}
  };
  return (
    <InputWrap>
      <InputFlexContainer>
        <Profile size='42px' imgSrc={UserProfile} imgAlt='프로필 이미지' />
        <Input
          className='input_chat-comment'
          type='text'
          placeholder='댓글 입력하기...'
          onChange={onChangeInput}
          value={txt}
        />
        <InputBtn
          className={txt ? 'active' : null}
          disabled={txt ? false : true}
          onClick={AddComment}
        >
          게시
        </InputBtn>
      </InputFlexContainer>
    </InputWrap>
  );
};

export default CommentInput;
