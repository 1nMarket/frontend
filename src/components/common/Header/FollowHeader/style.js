import styled from 'styled-components';
import LeftArrowIcon from '../../../../assets/icons/icon-arrow-left.svg';
import FollowText from '../../../../assets/icons/FollowHeaderText.svg';

export const LeftIcon = styled.img.attrs({
  src: LeftArrowIcon,
  alt: '검색하기',
})`
  cursor: pointer;
`;

export const RightIcon = styled.img.attrs({
  src: FollowText,
  alt: '1N마켓 피드',
})``;