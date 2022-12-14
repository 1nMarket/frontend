import React from "react";
import * as S from "./style"
import { HeaderWrapper } from "../style";

const FollowHeader = () => {
  return (
    <HeaderWrapper style={{display:"flex", justifyContent:"start"}}>
        <S.LeftIcon style={{marginRight:"10px"}}/>
        <S.RightIcon/>
    </HeaderWrapper>
  );
};

export default FollowHeader;
