import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { axiosPrivate } from 'apis/axios';
import { UploadHeader, PostForm } from 'components';
import { useTitle } from 'hooks';

const PostUpload = () => {
  useTitle('1nMarket - PostUpload');
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
    navigate(`/profile/${JSON.parse(localStorage.getItem('accountname'))}`);
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
