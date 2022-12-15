import styled from 'styled-components';
import LeftArrowIcon from '../../../../assets/icons/icon-arrow-left.svg';
import UploadIcon from '../../../../assets/icons/Upload-Disabled-button.svg';

export const LeftIcon = styled.img.attrs({
  src: LeftArrowIcon,
  alt: '뒤로가기',
})``;

export const RightIcon = styled.img.attrs({
  src: UploadIcon,
  alt: '업로드',
})``;