import React from 'react';
import * as S from './style';

const SearchList = ({ searchList }) => {
  return (
    <S.SearchList>
      {searchList.map((item) => (
        <S.StyledLink to={`/profile/${item.accountname}`} key={item._id}>
          <S.SearchItem>
            <S.UserImage alt="프로필" src={item.image}/>
          
            <S.UserInfo>
              <S.UserName>{item.username}</S.UserName>
              <S.AccountName>{item.accountname}</S.AccountName>
            </S.UserInfo>
          </S.SearchItem>
        </S.StyledLink>
      ))}
    </S.SearchList>
  )
}

export default SearchList