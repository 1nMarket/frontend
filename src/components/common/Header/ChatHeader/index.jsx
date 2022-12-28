import React from "react";
import * as S from "./style"
import { HeaderWrapper } from "../style";
import { useNavigate } from "react-router-dom";

const ChatHeader = () => {
  const navigate = useNavigate();
  return (
    <HeaderWrapper>
        <S.LeftIcon/>
        <S.MiddleIcon style={{marginLeft:"-150px"}} onClick={() => navigate(-1)}/>
        <S.RightIcon/>
    </HeaderWrapper>
  );
};

export default ChatHeader;