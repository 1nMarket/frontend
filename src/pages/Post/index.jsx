import React, { useEffect, useState } from 'react';
import { axiosPrivate } from '../../apis/axios';
import { useParams } from 'react-router-dom';
import PostsList from '../../components/post/PostsList';
import CommentCard from '../../components/comment/CommentCard';
import CommentInput from '../../components/comment/CommentInput';
import ProfileHeader from './../../components/common/Header/ProfileHeader/index';
import * as S from './style';

const Post = () => {
  const { postId } = useParams();

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
      <ProfileHeader />
      <S.PostContainer>
        <PostsList postsList={postsList} setPostsList={setPostsList} />
        <CommentCard
          postId={postId}
          comments={comments}
          setComments={setComments}
        />
      </S.PostContainer>
      <CommentInput
        setPostsList={setPostsList}
        postId={postId}
        setComments={setComments}
      />
    </>
  );
};

export default Post;
