import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { axiosPrivate } from '../../../apis/axios';
import * as S from './style';
import { ReactComponent as MessageIcon } from '../../../assets/icons/icon-message-circle.svg';
import { ReactComponent as ShareIcon } from '../../../assets/icons/icon-share.svg';
import PulseLoader from 'react-spinners/PulseLoader';

const ProfileInfo = () => {
  const { accountname } = useParams();
  const [profile, setProfile] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const { followerCount, followingCount, image, intro, isfollow, username } =
    profile;

  useEffect(() => {
    const getUserInfo = async () => {
      const {
        data: { profile },
      } = await axiosPrivate.get(`/profile/${accountname}`);
      setProfile(profile);
      setIsLoading(true);
    };
    getUserInfo();
  }, [accountname]);

  const isMyProfile =
    JSON.parse(localStorage.getItem('accountname')) === accountname
      ? true
      : false;

  const handleFollow = async () => {
    const {
      data: { profile },
    } = await axiosPrivate.post(`/profile/${accountname}/follow`);
    setProfile(profile);
  };

  const handleUnfollow = async () => {
    const {
      data: { profile },
    } = await axiosPrivate.delete(`/profile/${accountname}/unfollow`);
    setProfile(profile);
  };

  if (!isLoading) return <PulseLoader color='#000' />;

  return (
    <S.ProfileSection>
      <S.TopContent>
        <S.CustomLink to={`followers`}>
          <S.Count>{followerCount}</S.Count>
          <S.CountInfo>followers</S.CountInfo>
        </S.CustomLink>
        <S.ProfileImg src={image} alt={`${accountname}의 프로필 사진`} />

        <S.CustomLink to={`followings`}>
          <S.Count>{followingCount}</S.Count>
          <S.CountInfo>followings</S.CountInfo>
        </S.CustomLink>
      </S.TopContent>

      <S.Name>{username}</S.Name>
      <S.AccountName>{accountname}</S.AccountName>
      <S.Intro>{intro}</S.Intro>

      <S.ButtonWrapper>
        {isMyProfile ? (
          <>
            <Link to='edit' state={{ image, username, accountname, intro }}>
              <S.MyProfileButton>프로필 수정</S.MyProfileButton>
            </Link>
            <Link to='product'>
              <S.MyProfileButton>상품 등록</S.MyProfileButton>
            </Link>
          </>
        ) : (
          <>
            <S.IconButton>
              <MessageIcon />
            </S.IconButton>
            {isfollow ? (
              <S.YourProfileButton onClick={handleUnfollow} isfollow={isfollow}>
                언팔로우
              </S.YourProfileButton>
            ) : (
              <S.YourProfileButton onClick={handleFollow} isfollow={isfollow}>
                팔로우
              </S.YourProfileButton>
            )}
            <S.IconButton>
              <ShareIcon />
            </S.IconButton>
          </>
        )}
      </S.ButtonWrapper>
    </S.ProfileSection>
  );
};

export default ProfileInfo;
