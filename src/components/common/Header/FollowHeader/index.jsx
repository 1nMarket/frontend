import React from "react";
import * as S from "./style"
import { HeaderWrapper } from "../style";
import { useNavigate } from "react-router-dom";

const FollowHeader = () => {
  const navigate = useNavigate();
  return (
    <HeaderWrapper style={{display:"flex", justifyContent:"start"}}>
        <S.LeftIcon style={{marginRight:"10px"}} onClick={() => navigate(-1)}/>
        <S.RightIcon/>
    </HeaderWrapper>
  );
};

export default FollowHeader;
