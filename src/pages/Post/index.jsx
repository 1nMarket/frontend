import React from 'react';
import { useParams } from 'react-router-dom';

const Post = () => {
  const { postId } = useParams();
  console.log(postId);
  return <div>Post</div>;
};

export default Post;
