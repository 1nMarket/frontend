import React, { useState } from 'react';
import * as S from './style';

const FollowUser = ({ image, accountname, username, intro, isfollow }) => {
  const [follow, setFollow] = useState(isfollow);

  return (
    <S.User>
      <S.StyleLink to={`/profile/${accountname}`}>
        <S.UserImage src={image} alt='사용자 프로필 이미지' />

        <S.UserInfo>
          <S.UserName>{username}</S.UserName>
          <S.UserIntro>{intro}</S.UserIntro>
        </S.UserInfo>
      </S.StyleLink>

      <S.FollowButton
        onClick={() => setFollow(!follow)}
        style={{
          backgroundColor: !follow ? '#495573' : '#fff',
          color: !follow ? '#fff' : '#767676',
          border: !follow ? 'none' : '1px solid #dbdbdb',
        }}
      >
        {!follow ? '팔로우' : '취소'}
      </S.FollowButton>
    </S.User>
  );
};

export default FollowUser;
