import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './style';
import { HeaderWrapper } from '../style';

const UploadHeader = ({ canSave, handlePostUpload }) => {
  const navigate = useNavigate();

  return (
    <HeaderWrapper>
      <S.BackIcon onClick={() => navigate(-1)} />
      <S.UploadButton disabled={!canSave} onClick={handlePostUpload}>
        업로드
      </S.UploadButton>
    </HeaderWrapper>
  );
};

export default UploadHeader;
