import React from "react";
import * as S from "./style"
import { HeaderWrapper } from "../style";

const SaveHeader = ({ canSave, handleProductUpload }) => {
  return (
    <HeaderWrapper>
        <S.LeftIcon/>
        <S.UploadButton disabled={!canSave} onClick={handleProductUpload}>
          저장
        </S.UploadButton>
    </HeaderWrapper>
  );
};

export default SaveHeader;