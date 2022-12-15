import { useState, useEffect } from 'react';
import { axiosPrivate } from '../../apis/axios';
import SearchHeader from '../../components/common/Header/SearchHeader';
import SearchList from '../../components/search/SearchList';
import * as S from './style';

const Search = () => {
  const [keyword, setKeyword] = useState('');
  const [searchList, setSearchList] = useState([]);

  useEffect(() => {
    if (!keyword.length) return;

    const searchUsers = async () => {
      const { data } = await axiosPrivate.get(`/user/searchuser/?keyword=${keyword}`);
      setSearchList(data);
    }
    searchUsers();
  }, [keyword]);

  return (
    <>
      <SearchHeader setKeyword={setKeyword}  />
      <S.Content>
        <SearchList searchList={searchList} />
      </S.Content>
    </>
  )
}

export default Search;
