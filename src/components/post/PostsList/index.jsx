import React from 'react';
import * as S from './style';
import PostItem from '../PostItem';

const PostsList = ({ postsList, setPostsList }) => {
  return (
    <S.PostsContainer>
      <S.PostWrapper>
        {postsList.map((post) => (
          <PostItem key={post.id} post={post} setPostsList={setPostsList} />
        ))}
      </S.PostWrapper>
    </S.PostsContainer>
  );
};

export default PostsList;
