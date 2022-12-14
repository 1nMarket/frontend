import styled from 'styled-components';
import SearchIcon from '../../../../assets/icons/icon-search.svg';
import HomeHeaderText from '../../../../assets/icons/HomeHeaderText.svg';

export const LeftIcon = styled.img.attrs({
  src: SearchIcon,
  alt: '검색하기',
})``;

export const RightIcon = styled.img.attrs({
  src: HomeHeaderText,
  alt: '1N마켓 피드',
})``;