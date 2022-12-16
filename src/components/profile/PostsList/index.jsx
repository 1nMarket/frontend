import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { axiosPrivate } from '../../../apis/axios';
import PostContent from '../../post/PostContent';

const PostList = () => {
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
    <ul>
      {postsList.map((post) => (
        <PostContent key={post.id} post={post} />
      ))}
    </ul>
  );
};

export default PostList;
