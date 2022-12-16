import React from 'react';
import ImageSlide from '../ImageSlide';
import * as S from './style';

const PostItem = ({ post }) => {
  const images = post.image.split(',');
  console.log(post);

  return (
    <S.PostArticle>
      <S.AuthorInfo>
        <S.AuthorImage src={post.author.image} />
        <S.AuthorNameWrapper>
          <S.UserName>{post.author.username}</S.UserName>
          <S.AccountName>{post.author.accountname}</S.AccountName>
        </S.AuthorNameWrapper>
      </S.AuthorInfo>
      <S.PostContent>
        <S.PostText>{post.content}</S.PostText>
        <ImageSlide images={images} />
      </S.PostContent> 
    </S.PostArticle>
  );
};

export default PostItem;
