import React from "react";
import * as S from "./style"
import { HeaderWrapper } from "../style";

const ChatHeader = () => {
  return (
    <HeaderWrapper>
        <S.LeftIcon/>
        <S.MiddleIcon style={{marginLeft:"-150px"}}/>
        <S.RightIcon/>
    </HeaderWrapper>
  );
};

export default ChatHeader;