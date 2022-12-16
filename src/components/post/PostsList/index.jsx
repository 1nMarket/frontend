import React from 'react';
import * as S from './style';
import PostItem from '../PostItem';

const PostsList = ({ postsList }) => {
  console.log(postsList);

  return (
    <S.PostsContainer>
      {postsList.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </S.PostsContainer>
  );
};

export default PostsList;
