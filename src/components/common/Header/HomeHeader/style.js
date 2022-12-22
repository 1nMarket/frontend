import styled from 'styled-components';
import search from '../../../../assets/icons/icon-search.svg';

export const Title = styled.h1`
  font-weight: 500;
  font-size: 18px;
  color: ${({ theme }) => theme.palette.black};
  line-height: 1;
  margin-bottom: -3px;
`;

  export const SearchIcon = styled.img.attrs({
    src: search,
    alt: '검색하기',
  })``;