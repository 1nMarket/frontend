import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { axiosPrivate } from '../../../apis/axios';
import PostsList from '../../post/PostsList';

const MyPosts = () => {
  const { accountname } = useParams();
  const [postsList, setPostsList] = useState([]);

  useEffect(() => {
    const getAllPosts = async () => {
      const {
        data: { post },
      } = await axiosPrivate.get(`/post/${accountname}/userpost`);

      setPostsList(post);
    };
    getAllPosts();
  }, []);

  return (
    <>
      <div style={{ borderBottom: '1px solid #dbdbdb' }}>sectionHeader</div>
      <PostsList postsList={postsList} />
    </>
  );
};

export default MyPosts;
