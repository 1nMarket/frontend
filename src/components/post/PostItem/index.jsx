import React, { memo, useState } from 'react';
import ImageSlide from '../ImageSlide';
import * as S from './style';
import { ReactComponent as UnLikeIcon } from '../../../assets/icons/unheart.svg';
import { ReactComponent as LikeIcon } from '../../../assets/icons/heart.svg';
import { ReactComponent as CommentIcon } from '../../../assets/icons/message-circle.svg';
import MyPostModal from '../../modals/MyPostModal';
import PostModal from '../../modals/PostModal';
import { axiosPrivate } from '../../../apis/axios';

const PostItem = ({ post, setPostsList }) => {
  const [openModal, setOpenModal] = useState(false);
  const [heart, setHeart] = useState(post.hearted || false);
  const images = post.image.split(',');
  const accountname = JSON.parse(localStorage.getItem('accountname'));
  
  const handleLike = async () => {
    await axiosPrivate.post(`/post/${post.id}/heart`);
    setHeart((prev) => !prev);
  };

  const handleUnLike = async () => {
    await axiosPrivate.post(`/post/${post.id}/unheart`);
    setHeart((prev) => !prev);
  };

  return (
    <>
      <S.PostArticle>
        <S.AuthorInfo>
          <S.AuthorProfileLink to={`/profile/${post.author.accountname}`}>
            <S.AuthorImage src={post.author.image} />
            <S.AuthorNameWrapper>
              <S.UserName>{post.author.username}</S.UserName>
              <S.AccountName>{post.author.accountname}</S.AccountName>
            </S.AuthorNameWrapper>
          </S.AuthorProfileLink>
        </S.AuthorInfo>

        <S.PostContent>
          <S.PostText>{post.content}</S.PostText>
          {!!images[0] && <ImageSlide images={images} />}
          <S.LikeCommentCount>
            <S.LikeBtn onClick={post.hearted ? handleUnLike : handleLike}>
              {heart ? <LikeIcon /> : <UnLikeIcon />}
              <span>{post.heartCount}</span>
            </S.LikeBtn>
            <S.CommentLink to={`/post/${post.id}`}>
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
          <MyPostModal
            setOpenModal={setOpenModal}
            postId={post.id}
            setPostsList={setPostsList}
          />
        ) : (
          <PostModal setOpenModal={setOpenModal} />
        ))}
    </>
  );
};

export default memo(PostItem);
