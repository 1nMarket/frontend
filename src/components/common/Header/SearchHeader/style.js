import styled from 'styled-components';
import LeftArrowIcon from '../../../../assets/icons/icon-arrow-left.svg';

export const LeftIcon = styled.img.attrs({
  src: LeftArrowIcon,
  alt: '뒤로가기',
})``;

export const SearchInput = styled.input`
  flex-shrink: 1;
  width: 100%;
  height: 32px;
  padding: 7px 16px 7px;
  margin-left: 20px;
  border: none;
  border-radius: 32px;
  background-color: #F2F2F2;
  font-size: 14px;
  ::placeholder {
      color: #C4C4C4;
  }
`;