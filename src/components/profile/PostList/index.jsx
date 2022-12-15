import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { axiosPrivate } from '../../../apis/axios';

const PostList = () => {
  // GET /post/:accountname/userpost
  const { accountname } = useParams(); // { accountname: await2 }
  const [postsList, setPostsList] = useState([]);

  useEffect(() => {
    // 2
    const getAllPosts = async () => {
      const {
        data: { post },
      } = await axiosPrivate.get(`/post/${accountname}/userpost`);

      setPostsList(post); // 3
    };
    getAllPosts();
  }, []);

  console.log('postsList', postsList); // 1 -> 4

  return <div>PostList</div>;
};

export default PostList;
