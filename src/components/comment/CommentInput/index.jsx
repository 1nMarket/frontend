import { useState } from 'react';
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
    <footer>
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
    </footer>
  );
};

export default CommentInput;
