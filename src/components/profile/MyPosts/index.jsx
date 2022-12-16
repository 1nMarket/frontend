import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { axiosPrivate } from '../../../apis/axios';
import PostsList from '../../post/PostsList';
import { ReactComponent as PostListOnIcon } from '../../../assets/icons/icon-post-list-on.svg';
import { ReactComponent as PostListOffIcon } from '../../../assets/icons/icon-post-list-off.svg';
import { ReactComponent as PostAlbumOnIcon } from '../../../assets/icons/icon-post-album-on.svg';
import { ReactComponent as PostAlbumOffIcon } from '../../../assets/icons/icon-post-album-off.svg';
import * as S from './style';

const MyPosts = () => {
  const { accountname } = useParams();
  const [postsList, setPostsList] = useState([]);
  const [selectPost] = useState(true);

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
    <>
      <S.PostHeader>
        {selectPost ? (
          <>
            <PostListOnIcon />
            <PostAlbumOffIcon />
          </>
        ) : (
          <>
            <PostListOffIcon />
            <PostAlbumOnIcon />
          </>
        )}
      </S.PostHeader>
      <PostsList postsList={postsList} />
    </>
  );
};

export default MyPosts;
