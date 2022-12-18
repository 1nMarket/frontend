import React from 'react';
import * as S from './style';
import { HeaderWrapper } from '../style';

const UploadHeader = ({ canSave, handleUpload }) => {
  return (
    <HeaderWrapper>
      <S.BackIcon />
      <S.UploadButton disabled={!canSave} onClick={handleUpload}>
        업로드
      </S.UploadButton>
    </HeaderWrapper>
  );
};

export default UploadHeader;
