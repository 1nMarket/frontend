import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { axiosPrivate } from '../../apis/axios';
import Header from '../../components/common/Header';
import * as S from './style';

const Follows = () => {
  const { pathname } = useLocation();
  const { accountname } = useParams();
  console.log(pathname, accountname);
  const [usersList, setUsersList] = useState([]);
  
  useEffect(() => {
    if (pathname.includes('followings')) {
      const getAllFollowings = async () => {
        const { data } = await axiosPrivate.get(`/profile/${accountname}/following`);
        console.log(data);
        setUsersList(data);
      }
      getAllFollowings();
    } else {
      const getAllFollwers = async () => {
        const { data } = await axiosPrivate.get(`/profile/${accountname}/follower`);
        console.log(data);
        setUsersList(data);
      }
      getAllFollwers();
    }
  }, []);

  return (
    <>
      <Header />
      <S.Content>
        <S.UsersList>
          <li>
            <Link to='/profile/await2'>

            </Link>
            
          </li>
        </S.UsersList>
      </S.Content>
    </>
  );
};

export default Follows;
