import React, { useState } from 'react';
import ImageSlide from '../ImageSlide';
import * as S from './style';
import { ReactComponent as UnLikeIcon } from '../../../assets/icons/unheart.svg';
import { ReactComponent as LikeIcon } from '../../../assets/icons/heart.svg';
import { ReactComponent as CommentIcon } from '../../../assets/icons/message-circle.svg';
import MyPostModal from '../../modals/MyPostModal';
import PostModal from '../../modals/PostModal';

const PostItem = ({ post, setPostsList }) => {
  const [openModal, setOpenModal] = useState(false);
  const images = post.image.split(',');
  const accountname = JSON.parse(localStorage.getItem('accountname'));

  return (
    <>
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

        <S.RightIcon onClick={() => setOpenModal(true)} />
      </S.PostArticle>
      {openModal &&
        (accountname === post.author.username ? (
          <MyPostModal setOpenModal={setOpenModal} postId={post.id} setPostsList={setPostsList} />
        ) : (
          <PostModal setOpenModal={setOpenModal} />
        ))}
    </>
  );
};

export default PostItem;
