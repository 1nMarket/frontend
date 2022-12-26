import { useState } from 'react';
import axios from 'axios';

const CommentInput = ({ postId, setCommentList }) => {
  const image = localStorage.getItem('profile-img');
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
    <divdd>
      <div>
        <img src={image} alt='프로필 이미지' />
        <input
          className='input_chat-comment'
          type='text'
          placeholder='댓글 입력하기...'
          onChange={onChangeInput}
          value={txt}
        />
        <button
          className={txt ? 'active' : null}
          disabled={txt ? false : true}
          onClick={AddComment}
        >
          게시
        </button>
      </div>
    </div>
  );
};

export default CommentInput;
