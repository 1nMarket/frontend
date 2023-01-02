import React, { useState } from 'react';
import { useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { axiosPrivate } from '../../apis/axios';
import UploadHeader from '../../components/common/Header/UploadHeader';
import PostForm from '../../components/post/PostForm';

const PostModify = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { postId } = useParams();
  const accountName = JSON.parse(localStorage.getItem('accountname'));

  const [content, setContent] = useState(state?.content || '');
  const [imgFiles, setImgFiles] = useState(state?.image?.split(',') || []);

  const canSave = !!imgFiles.length || !!content;

  const handlePostUpload = async (e) => {
    e.preventDefault();
    if (!canSave) return;
    await axiosPrivate.put(
      `/post/${postId}`,
      JSON.stringify({
        post: {
          content,
          image: imgFiles.join(','),
        },
      }),
    );

    navigate(`/profile/${accountName}`);
  };

  useEffect(() => {
    if (!state) navigate('/home');
  }, []);

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

export default PostModify;
