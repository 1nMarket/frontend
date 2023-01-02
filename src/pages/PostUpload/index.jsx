import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { axiosPrivate } from '../../apis/axios';
import UploadHeader from '../../components/common/Header/UploadHeader';
import PostForm from '../../components/post/PostForm';

const PostUpload = () => {
  const navigate = useNavigate();
  const [content, setContent] = useState('');
  const [imgFiles, setImgFiles] = useState([]);

  const canSave = !!imgFiles.length || !!content;

  const handlePostUpload = async (e) => {
    e.preventDefault();
    if (!canSave) return;
    await axiosPrivate.post(
      '/post',
      JSON.stringify({
        post: {
          content,
          image: imgFiles.join(','),
        },
      }),
    );
    navigate('/home');
  };

  return (
    <>
      <UploadHeader canSave={canSave} handlePostUpload={handlePostUpload} />
      <PostForm
        content={content}
        setContent={setContent}
        imgFiles={imgFiles}
        setImgFiles={setImgFiles}
      />
    </>
  );
};

export default PostUpload;
