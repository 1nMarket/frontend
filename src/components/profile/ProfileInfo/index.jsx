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

  useEffect(() => {
    const getUserInfo = async () => {
      const {
        data: { profile },
      } = await axiosPrivate.get(`/profile/${accountname}`);
      setProfile(profile);
      setIsLoading(true);
    };
    getUserInfo();
  }, []);
  console.log(profile);

  const isMyProfile =
    JSON.parse(localStorage.getItem('accountname')) === profile.accountname
      ? true
      : false;

  if (!isLoading) return <PulseLoader color='#000' />

  return (
    <S.ProfileSection>
      <S.TopContent>
        <S.CustomLink to={`/follow/${profile.accountname}/follower`}>
          <S.Count>{profile.followerCount}</S.Count>
          <S.CountInfo>followers</S.CountInfo>
        </S.CustomLink>
        <S.ProfileImg src={profile.image} alt={`${profile.accountname}의 프로필 사진`} />

        <S.CustomLink to={`/follow/${profile.accountname}/follower`}>
          <S.Count>{profile.followingCount}</S.Count>
          <S.CountInfo>followings</S.CountInfo>
        </S.CustomLink>
      </S.TopContent>

      <S.Name>{profile.username}</S.Name>
      <S.AccountName>{profile.accountname}</S.AccountName>
      <S.Intro>{profile.intro}</S.Intro>

      <S.ButtonWrapper>
        {isMyProfile ? (
          <>
            <Link to='edit'>
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
            {profile.isfollow
              ? <S.YourProfileButton isfollow={profile.isfollow}>언팔로우</S.YourProfileButton>
              : <S.YourProfileButton isfollow={profile.isfollow}>팔로우</S.YourProfileButton>}
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
