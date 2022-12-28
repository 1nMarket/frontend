import styled from 'styled-components';
import LeftArrowIcon from '../../../../assets/icons/icon-arrow-left.svg';

export const LeftIcon = styled.img.attrs({
  src: LeftArrowIcon,
  alt: '검색하기',
})`
  cursor: pointer;
`;

export const FollowersText = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.palette.black};
  margin-top: 3px; // 가운데 맞춤
`;
