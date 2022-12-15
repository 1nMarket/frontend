import styled from 'styled-components';
import LeftArrowIcon from '../../../../assets/icons/icon-arrow-left.svg';
import ModalIcon from '../../../../assets/icons/icon-more-vertical.svg';

export const LeftIcon = styled.img.attrs({
  src: LeftArrowIcon,
  alt: '뒤로가기',
})``;

export const RightIcon = styled.img.attrs({
  src: ModalIcon,
  alt: '모달창',
})``;