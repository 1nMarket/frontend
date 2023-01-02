import React from "react";
import * as S from "./style"
import { HeaderWrapper } from "../style";
import { useNavigate } from "react-router-dom";

const FollowHeader = () => {
  const navigate = useNavigate();
  return (
    <HeaderWrapper style={{display:"flex", justifyContent:"start"}}>
        <S.LeftIcon style={{marginRight:"8px"}} onClick={() => navigate(-1)}/>
        <S.FollowersText>Followers</S.FollowersText>
    </HeaderWrapper>
  );
};

export default FollowHeader;
