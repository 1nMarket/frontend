import { useState, useEffect } from 'react';
import { axiosPrivate } from 'apis/axios';
import { SearchHeader, SearchList } from 'components';
import { useDebounce, useTitle } from 'hooks';
import * as S from './style';

const Search = () => {
  useTitle('1nMarket - Search');
  const [keyword, setKeyword] = useState('');
  const debouncedValue = useDebounce(keyword);
  const [searchList, setSearchList] = useState([]);

  useEffect(() => {
    if (!keyword.length) return;

    const searchUsers = async () => {
      const { data } = await axiosPrivate.get(
        `/user/searchuser/?keyword=${keyword}`,
      );
      setSearchList(data);
    };
    searchUsers();
  }, [debouncedValue]);

  return (
    <>
      <SearchHeader setKeyword={setKeyword} />
      <S.Content>
        <SearchList searchList={searchList} />
      </S.Content>
    </>
  );
};

export default Search;
