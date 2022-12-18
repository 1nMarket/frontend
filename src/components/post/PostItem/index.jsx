import React from 'react';
import ImageSlide from '../ImageSlide';
import * as S from './style';
import { ReactComponent as UnLikeIcon } from '../../../assets/icons/unheart.svg';
import { ReactComponent as LikeIcon } from '../../../assets/icons/heart.svg';
import { ReactComponent as CommentIcon } from '../../../assets/icons/message-circle.svg';

const PostItem = ({ post }) => {
  const images = post.image.split(',');
  console.log(images);

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
        {!!images[0] && <ImageSlide images={images} />}
        <S.LikeCommentCount>
          <S.LikeBtn>
            {post.hearted ? <LikeIcon /> : <UnLikeIcon />}
            <span>{post.heartCount}</span>
          </S.LikeBtn>
          <S.CommentLink>
            <CommentIcon />
            <span>{post.commentCount}</span>
          </S.CommentLink>
        </S.LikeCommentCount>
        <S.DateText>
          {new Intl.DateTimeFormat('ko', { dateStyle: 'long' }).format(
            new Date(post.createdAt),
          )}
        </S.DateText>
      </S.PostContent>
    </S.PostArticle>
  );
};

export default PostItem;
