import styled from 'styled-components';
import LeftArrowIcon from '../../../../assets/icons/icon-arrow-left.svg';
import ModalIcon from '../../../../assets/icons/icon-more-vertical.svg';

export const FlexDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const LeftIcon = styled.img.attrs({
  src: LeftArrowIcon,
  alt: '뒤로가기',
})``;

export const ChatUserName = styled.p`
  font-size: 14px;
  font-family: Pretendard-M;
  color: ${({ theme }) => theme.palette.black};
  margin: 2px 0 0 10px;
`;

export const RightIcon = styled.img.attrs({
  src: ModalIcon,
  alt: '모달창',
})``;
