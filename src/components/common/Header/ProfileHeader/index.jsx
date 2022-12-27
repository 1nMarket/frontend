import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './style';
import { HeaderWrapper } from '../style';

const ProfileHeader = ({ setOpenModal }) => {
  const navigate = useNavigate();
  return (
    <HeaderWrapper>
      <S.LeftIcon onClick={() => navigate(-1)} />
      <S.RightIcon onClick={() => setOpenModal(true)} />
    </HeaderWrapper>
  );
};

export default ProfileHeader;
