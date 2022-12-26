import React from "react";
import * as S from "./style"
import { HeaderWrapper } from "../style";
import { useNavigate } from 'react-router-dom';


const SaveHeader = ({ canSave, handleProductUpload }) => {
  const navigate = useNavigate();

  return (
    <HeaderWrapper>
        <S.LeftIcon onClick={() => navigate(-1)}/>
        <S.UploadButton disabled={!canSave} onClick={handleProductUpload}>
          저장
        </S.UploadButton>
    </HeaderWrapper>
  );
};

export default SaveHeader;