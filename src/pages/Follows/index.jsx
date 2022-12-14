import React, { useState } from 'react';
import { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { axiosPrivate } from '../../apis/axios';
import Header from '../../components/common/Header';
import * as S from './style';
import FolowUser from '../../components/profile/FollowUser';

const Follows = () => {
  const { pathname } = useLocation();
  const { accountname } = useParams();
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    if (pathname.includes('followings')) {
      const getAllFollowings = async () => {
        const { data } = await axiosPrivate.get(
          `/profile/${accountname}/following`,
        );
        setUsersList(data);
      };
      getAllFollowings();
    } else {
      const getAllFollwers = async () => {
        const { data } = await axiosPrivate.get(
          `/profile/${accountname}/follower`,
        );
        setUsersList(data);
      };
      getAllFollwers();
    }
  }, []);
  console.log(usersList);

  return (
    <>
      <Header />
      <S.Content>
        <S.UsersList>
          {usersList.map((user, i) => (
            <FolowUser key={user._id} {...user} />
          ))}
        </S.UsersList>
      </S.Content>
    </>
  );
};

export default Follows;
