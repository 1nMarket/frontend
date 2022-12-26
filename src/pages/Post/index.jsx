import React, { useEffect, useState } from 'react';
import { axiosPrivate } from '../../apis/axios';
import { useParams } from 'react-router-dom';
import PostsList from '../../components/post/PostsList';
import CommentCard from '../../components/comment/CommentCard';

const Post = () => {
  const { postId } = useParams();
  console.log(postId);

  const [postsList, setPostsList] = useState([]);
  const [comments, setComments] = useState([]);

  const getPostData = async () => {
    const {
      data: { post },
    } = await axiosPrivate.get(`/post/${postId}`);
    setPostsList([post]);
  };

  const getComments = async () => {
    const {
      data: { comments },
    } = await axiosPrivate.get(`/post/${postId}/comments`);
    setComments(comments);
  };

  useEffect(() => {
    getPostData();
    getComments();
  }, []);

  return (
    <>
      <PostsList postsList={postsList} setPostsList={setPostsList} />
      <CommentCard postId={postId} comments={comments} />
    </>
  );
};

export default Post;
