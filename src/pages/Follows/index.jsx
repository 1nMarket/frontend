import React, { useRef, useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { FollowHeader, FollowUser } from 'components';
import { axiosPrivate } from 'apis/axios';
import { useTitle } from 'hooks';
import * as S from './style';

const Follows = () => {
  useTitle('1nMarket - Follow');
  const { pathname } = useLocation();
  const { accountname } = useParams();
  const [usersList, setUsersList] = useState([]);
  const [hasNextUsers, setHasNextUsers] = useState(true);
  const page = useRef(0);
  const observerTargetEl = useRef(null);

  useEffect(() => {
    if (!observerTargetEl.current || !hasNextUsers) return;

    const getUsersData = async () => {
      if (pathname.includes('followings')) {
        const { data } = await axiosPrivate.get(
          `/profile/${accountname}/following?limit=20&skip=${page.current}`,
        );
        setUsersList((prev) => [...prev, ...data]);
        setHasNextUsers(data.length % 20 === 0);
        page.current += 20;
      } else {
        const { data } = await axiosPrivate.get(
          `/profile/${accountname}/follower?limit=20$skip=${page.current}`,
        );
        setUsersList((prev) => [...prev, ...data]);
        setHasNextUsers(data.length % 20 === 0);
        page.current += 20;
      }
    };

    const io = new IntersectionObserver((entries, observer) => {
      if (entries[0].isIntersecting) {
        getUsersData();
      }
    });
    io.observe(observerTargetEl.current);

    return () => {
      io.disconnect();
    };
  }, [hasNextUsers]);

  return (
    <>
      <FollowHeader />
      <S.Content>
        <S.UsersList>
          {usersList.map((user, i) => (
            <FollowUser key={user._id} {...user} />
          ))}
        </S.UsersList>

        <div ref={observerTargetEl}></div>
      </S.Content>
    </>
  );
};

export default Follows;
